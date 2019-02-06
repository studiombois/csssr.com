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

class School extends PureComponent {
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
    const { t } = this.props
    const { isTablet, chosenCourse } = this.state

    return (
      <Layout
        headerProps={{
          logoHref: '/ru/school',
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
