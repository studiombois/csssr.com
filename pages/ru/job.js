import React, { Fragment, PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import CandidateForm from '../../components/job/CandidateForm'
import withI18next from '../../utils/withI18next'

class Jobs extends PureComponent {
  static async getInitialProps({ query }) {
    // TODO Поменять на нормальный адресс перед финальным пушем
    const res = await fetch('https://hr.csssr.ru/api/public/vacancies/active')
    const vacancies = await res.json()

    // TODO 404 если вакансия недоступна
    return {
      vacancies,
      vacancy: vacancies.find(v => v.pathName === query.jobPathName),
    }
  }

  render() {
    const { t, vacancy, vacancies } = this.props
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
            onSubmit={() => {}}
            component={CandidateForm}
          />
        </Layout>
      </Fragment>
    )
  }
}

// sections

// hasResume,
// hasPortfolio,
// hasGithub,
// hasComment,
// isCommentRequired,
// commentMaxLength,

// TODO загрузка файлов
// hasFile,
// maxFileSize: Number,
// fileExt: String,
// uploadedFiles: [String],

export default withI18next(['job'])(Jobs)
