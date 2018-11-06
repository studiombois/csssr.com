import React, { Fragment, PureComponent } from 'react'
import { FORM_ERROR } from 'final-form'
import { Form as ReactFinalForm } from 'react-final-form'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import CandidateForm from '../../components/job/CandidateForm'
import withI18next from '../../utils/withI18next'
import hrOrigin from '../../utils/hrOrigin'
import candidateFormValidationRules from '../../components/job/candidateFormValidationRules'
import withError from '../../utils/withError'
import { contactOptions } from '../../components/job/ContactOptions'

// Итерируемся по всем секциям:
// 1. Добавляем индексы заданиям "вопрос-ответ" для отображения на интерфейсе
// 2. Добавляем индексы всем полям для сабмита и корректной работы в связке с final-form
// 3. Записываем title у всех заданий, потому что они в таком виде сохраняются в модель кандидата
const processVacancy = vacancy => {
  const vacancySections = []
  const initialValues = {
    vacancy: vacancy.pathName,
    quests: [],
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

const filterUnckeckedContactOptions = values => {
  const filteredContactOptions = contactOptions.reduce((acc, option) => {
    const optionId = option.id
    if (!values.connection.includes(optionId)) {
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

const onSubmit = async values => {
  const res = await fetch(`${hrOrigin}/api/candidates`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filterUnckeckedContactOptions(values)),
  })

  if (res.status === 200) {
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'job_form' })
    }
  } else {
    let error
    await res.json()
    try {
      const response = await res.json()
      error = response.error
    } catch {
      error = 'Something went wrong. Please try again later.'
    }

    return { [FORM_ERROR]: error }
  }
}

class Job extends PureComponent {
  static async getInitialProps({ res, query }) {
    const response = await fetch(`${hrOrigin}/api/public/vacancies/active`)
    const vacancies = await response.json()

    const vacancy = vacancies.find(v => v.pathName === query.jobPathName)

    if (!vacancy) {
      res.statusCode = 404
      return
    }

    const { processedVacancy, initialValues } = processVacancy(vacancy)
    return {
      vacancies,
      vacancy: processedVacancy,
      initialValues,
    }
  }

  render() {
    const { t, vacancy, vacancies, initialValues } = this.props
    return (
      <Fragment>
        <Layout
          headerProps={{
            isHalfed: true,
            logoHref: '/ru/jobs#',
            logoAlt: 'CSSSR jobs logo',
            logoSup: '.jobs',
            isLogoLink: true,
            isBurgerVisible: true,
          }}
        >
          <Head title={t('job:meta.title')} description={vacancy.description} />
          <ReactFinalForm
            vacancy={vacancy}
            vacancies={vacancies}
            initialValues={initialValues}
            validate={candidateFormValidationRules(vacancy)}
            onSubmit={onSubmit}
            component={CandidateForm}
          />
        </Layout>
      </Fragment>
    )
  }
}

// TODO загрузка файлов
// hasFile,
// maxFileSize: Number,
// fileExt: String,
// uploadedFiles: [String],

export default withError(withI18next(['job'])(Job))
