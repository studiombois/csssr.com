import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Earn from '../../components/school/Earn'
import Manifest from '../../components/school/Manifest'
// import Counter from '../../components/school/Counter'
import Courses from '../../components/school/Courses'
import Costs from '../../components/school/Costs'
import Bonus from '../../components/school/Bonus'
import About from '../../components/school/About'
import Form from '../../components/school/Form'
import Layout from '../../components/Layout'
import { allSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'
import { courseIdByName } from '../../data/school/courses-mock'

class School extends PureComponent {
  static async getInitialProps({ query }) {
    let modalActiveId

    if (query['full-programm']) {
      modalActiveId = courseIdByName[query['full-programm']]
    }

    return { modalActiveId }
  }

  state = {
    isTablet: false,
    chosenCourse: null,
  }

  componentDidMount() {
    this.mediumMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')

    this.mediumMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mediumMediaQuery)
  }
  componentWillUnmount() {
    this.mediumMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isTablet: matches,
    })

  handleChooseCourse = courseId =>
    this.setState({
      chosenCourse: courseId,
    })

  render() {
    const { t, modalActiveId } = this.props
    const { isTablet, chosenCourse } = this.state

    return (
      <Layout
        headerProps={{
          logoAlt: 'CSSSR school logo',
          logoSup: '.school',
          isLogoLink: true,
          isBurgerVisible: true,
        }}
        footerProps={{ socialLinks: allSocialLinks }}
      >
        <Head title={t('school:meta.title')} description={t('school:meta.description')} />
        <Earn />
        <Manifest />
        {/* <Counter />*/}
        <Courses
          isTablet={isTablet}
          modalActiveId={modalActiveId}
          onChoosingCourse={this.handleChooseCourse}
        />
        <Costs />
        <Bonus />
        <About />
        <Form chosenCourse={chosenCourse} />
      </Layout>
    )
  }
}

export default withI18next(['school'])(School)
