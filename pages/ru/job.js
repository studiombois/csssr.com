import React, {Fragment, PureComponent} from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'
import Head from '../../components/Head'
import withI18next from '../../utils/withI18next'

class Jobs extends PureComponent {
  static async getInitialProps({ query }) {
    const res = await fetch('https://hr.csssr.ru/api/public/vacancies/active')
    const vacancies = await res.json()

    // TODO 404 если вакансия недоступна
    return {
      vacancy: vacancies.find(v => v.pathName === query.jobPathName),
    }
  }

  render() {
    const { t, vacancy } = this.props

    return (
      <Fragment>
        <Layout>
          <Head title={t('job:meta.title')} description={vacancy.description} />
          <h1>{ vacancy.name }</h1>
          <h2>Дистанционно, и на фуллтайм</h2>
          <div>{ vacancy.description }</div>
          <form novalidate>
            { JSON.stringify(vacancy.sections) }

            {/*{vacancy.hasComment && <label>*/}
              {/*Хотите добавить что-то о себе?*/}
              {/*<textarea name="comment" required="vacancy.isCommentRequired"/>*/}
            {/*</label>}*/}

            <label>
              Политике конфиденциальности
              <input type="checkbox"/>
            </label>

            <button>Отправить</button>
          </form>
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
