import React, { Fragment, PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import { serialize } from 'object-to-formdata'
import * as Sentry from '@sentry/node'
import Layout from '../Layout'
import Head from '../Head'
import CandidateForm from './CandidateForm'
import { L10nConsumer } from '../../utils/l10nProvider'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'
import candidateFormValidationRules from '../../utils/validators/candidateFormValidationRules'
import withError from '../../utils/withError'
import getContactOptions from '../../data/job/getContactOptions'
import StructuredDataVacancy from '../StructuredDataVacancy'
import { getOriginal } from '@csssr/csssr.images/dist/utils'

import ogImages from '../../public/images/jobs/cover/desktop.all.png?csssr-images'

// Итерируемся по всем секциям:
// 1. Добавляем индексы заданиям "вопрос-ответ" для отображения на интерфейсе
// 2. Добавляем индексы всем полям для сабмита и корректной работы в связке с final-form
// 3. Записываем title у всех заданий, потому что они в таком виде сохраняются в модель кандидата
const processVacancy = (vacancy) => {
  const vacancySections = []
  const initialValues = {
    vacancy: vacancy.pathName,
    quests: [],
    connection: [],
  }

  let inputIndex = 0
  vacancy.sections.forEach((section) => {
    if (section.type === 'questBox') {
      let displayIndex = 1
      const innerSections = []
      section.sections.forEach((innerSection) => {
        if (innerSection.type === 'questionAndAnswer') {
          initialValues.quests.push({
            title: innerSection.title,
          })
          innerSections.push({
            ...innerSection,
            time: Number(innerSection.time),
            inputIndex: inputIndex++,
            displayIndex: displayIndex++,
          })
        } else if (innerSection.type === 'textField') {
          initialValues.quests.push({
            title: innerSection.title,
          })
          innerSections.push({
            ...innerSection,
            inputIndex: inputIndex++,
          })
        } else {
          innerSections.push(innerSection)
        }
      })

      vacancySections.push({
        ...section,
        sections: innerSections,
      })
    } else {
      vacancySections.push(section)
    }
  })

  return {
    processedVacancy: {
      ...vacancy,
      sections: vacancySections,
    },
    initialValues,
  }
}

const filterUncheckedContactOptions = (values, translations) => {
  const filteredContactOptions = getContactOptions(translations).reduce((acc, option) => {
    const optionId = option.id

    if (values.connection && values.connection.indexOf(optionId) === -1) {
      acc[optionId] = true
    }
    return acc
  }, {})

  return Object.keys(values)
    .filter((key) => !filteredContactOptions[key])
    .reduce(
      (memo, key) => ({
        ...memo,
        [key]: values[key],
      }),
      {},
    )
}

const onSubmit = (translations) => async (values) => {
  const filteredValues = filterUncheckedContactOptions(values, translations)

  if (values.quests.length === 0) {
    delete filteredValues.quests
  }
  delete filteredValues.file
  delete filteredValues.files

  const formData = serialize(filteredValues, {
    indices: true,
  })

  if (values.files) {
    formData.set('file', values.files[0])
  }

  let res
  try {
    res = await fetch(`${csssrSpaceOrigin}/api/candidates`, {
      method: 'POST',
      body: formData,
    })
  } catch {
    return { [FORM_ERROR]: translations.common.form.errors.general }
  }

  if (res.status === 200) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'job_form_success' })
    }
  } else {
    let error
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = translations.common.form.errors.general
    }
    Sentry.withScope((scope) => {
      scope.setExtra('reqBody', formData)
      Sentry.captureException(error)
    })
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'job_form_fail' })
    }

    return { [FORM_ERROR]: error }
  }
}

const focusOnErrors = createDecorator()

const pageName = 'job'
class JobPage extends PureComponent {
  static async getInitialProps({ res, query }) {
    const l10n = res ? res.locals.l10n : window.__NEXT_DATA__.props.pageProps.l10n
    const locale = l10n.locale
    const response = await fetch(
      `${csssrSpaceOrigin}/api/public/vacancies/${
        query.preview ? 'preview' : 'active'
      }?locale=${locale}`,
    )
    const vacancies = await response.json()

    const vacancy = vacancies.find((v) => v.pathName === query.jobPathName)

    if (!vacancy) {
      // SSR
      if (res) {
        res.statusCode = 404
      }

      // Client-side
      return {
        statusCode: 404,
      }
    }

    const { processedVacancy, initialValues } = processVacancy(vacancy)
    return {
      vacancies,
      vacancy: processedVacancy,
      initialValues,
    }
  }

  render() {
    const {
      vacancy,
      vacancies,
      initialValues,
      l10n: { translations, language },
    } = this.props

    return (
      <Fragment>
        <Layout pageName={pageName}>
          <Head
            title={vacancy.name}
            templateTitle={`${language === 'ru' ? ' | Вакансии CSSSR' : ' | CSSSR'}`}
            description={translations.job.descriptions[vacancy.pathName] || vacancy.description}
            structuredData={<StructuredDataVacancy vacancy={vacancy} />}
            ogImage={{
              url: getOriginal(ogImages),
              width: 1266,
              height: 2000,
            }}
          />
          <ReactFinalForm
            vacancy={vacancy}
            language={language}
            vacancies={vacancies}
            initialValues={{ ...initialValues, privacyPolicy: true }}
            validate={candidateFormValidationRules(vacancy, translations, language)}
            onSubmit={onSubmit(translations)}
            decorators={[focusOnErrors]}
            component={CandidateForm}
          />
        </Layout>
      </Fragment>
    )
  }
}

export default withError(L10nConsumer(JobPage))
