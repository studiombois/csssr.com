import React, { Fragment, PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'
import fetch from 'isomorphic-unfetch'
import objectToFormData from 'object-to-formdata'
import Sentry from '@sentry/node'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import CandidateForm from '../../components/job/CandidateForm'
import withI18next from '../../utils/withI18next'
import csssrSpaceOrigin from '../../utils/csssrSpaceOrigin'
import candidateFormValidationRules from '../../components/job/candidateFormValidationRules'
import withError from '../../utils/withError'
import getContactOptionsByI18N from '../../data/job/getContactOptionsByI18N'
import StructuredDataVacancy from '../../components/StructuredDataVacancy'
import i18n from '../../common/i18n'

// Итерируемся по всем секциям:
// 1. Добавляем индексы заданиям "вопрос-ответ" для отображения на интерфейсе
// 2. Добавляем индексы всем полям для сабмита и корректной работы в связке с final-form
// 3. Записываем title у всех заданий, потому что они в таком виде сохраняются в модель кандидата
const processVacancy = vacancy => {
  const vacancySections = []
  const initialValues = {
    vacancy: vacancy.pathName,
    quests: [],
    connection: [],
  }

  let inputIndex = 0
  vacancy.sections.forEach(section => {
    if (section.type === 'questBox') {
      let displayIndex = 1
      const innerSections = []
      section.sections.forEach(innerSection => {
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

const filterUnckeckedContactOptions = (values, t) => {
  const filteredContactOptions = getContactOptionsByI18N(t).reduce((acc, option) => {
    const optionId = option.id

    if (values.connection && !values.connection.includes(optionId)) {
      acc[optionId] = true
    }
    return acc
  }, {})

  return Object.keys(values)
    .filter(key => !filteredContactOptions[key])
    .reduce((memo, key) => ({
      ...memo,
      [key]: values[key],
    }), {})
}

const onSubmit = t => async values => {
  const filteredValues = filterUnckeckedContactOptions(values, t)

  // TODO надо добавить
  // values.gacid = getGaCid()

  if (values.quests.length === 0) {
    delete filteredValues.quests
  }
  delete filteredValues.file
  delete filteredValues.files

  const formData = objectToFormData(filteredValues, {
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
    return { [FORM_ERROR]: t('common:form.errors.general') }
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
      error = t('common:form.errors.general')
    }
    Sentry.withScope(scope => {
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

class JobPage extends PureComponent {
  static async getInitialProps({ req, res, query }) {
    const locale = req ? req.language : i18n.language
    const response = await fetch(`${csssrSpaceOrigin}/api/public/vacancies/${query.preview ? 'preview' : 'active'}?locale=${locale}`)
    const vacancies = await response.json()

    const vacancy = vacancies.find(v => v.pathName === query.jobPathName)

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
    const { vacancy, vacancies, initialValues, t, lng, locale } = this.props

    return (
      <Fragment>
        <Layout
          headerProps={{
            logoAlt: 'CSSSR jobs logo',
            isLogoLink: true,
            isBurgerVisible: true,
            menuName: t('common:menu.job'),
            sectionName: t('common:sectionName.job'),
          }}
        >
          <Head
            title={vacancy.name}
            templateTitle={`${locale === 'ru-ru' ? ' | Вкансии CSSSR' : ' | CSSSR'}`}
            description={vacancy.description}
            structuredData={<StructuredDataVacancy vacancy={vacancy}/>}
            ogImage={{
              url: require('../../static/images/jobs/1920/cover@2x.jpg'),
              width: 1266,
              height: 2000,
            }}/>
          <ReactFinalForm
            vacancy={vacancy}
            language={lng}
            vacancies={vacancies}
            initialValues={initialValues}
            validate={candidateFormValidationRules(vacancy, t)}
            onSubmit={onSubmit(t)}
            decorators={[ focusOnErrors ]}
            component={CandidateForm}
          />
        </Layout>
      </Fragment>
    )
  }
}

export default withError(withI18next(['job'])(JobPage))
