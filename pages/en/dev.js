import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Form from '../../components/dev/Form'
import Hire from '../../components/dev/Hire'
import Feature1 from '../../components/dev/Feature1'
// import Competences from '../../components/dev/Competences'
import Feature2 from '../../components/dev/Feature2'
import Partners from '../../components/dev/Partners'
import PartnersMobile from '../../components/dev/PartnersMobile'
// import Clients from '../../components/dev/Clients'
// import Portfolio from '../../components/dev/Portfolio'
import Layout from '../../components/Layout'
// import ButtonSelect from '../../components/ui-kit/ButtonSelect/ButtonSelect'
import withI18next from '../../utils/withI18next'
// import shuffleArray from '../../utils/shuffleArray'
// import portfolio from '../../data/dev/portfolio'

class Dev extends PureComponent {
  // static async getInitialProps() {
  //   const portfolioWithShuffledProjects = portfolio.map(projectGroup =>
  //     ({
  //       ...projectGroup,
  //       projects: shuffleArray(projectGroup.projects),
  //     })
  //   )
  //
  //   const shuffledPortfolio = shuffleArray(portfolioWithShuffledProjects)
  //
  //   return { shuffledPortfolio }
  // }

  render() {
    const { t /* , shuffledPortfolio*/, isMobile } = this.props

    return (
      <Layout>
        <Head
          title={t('dev:meta.title')}
          description={t('dev:meta.description')}
          ogImage={{
            url: require('../../static/images/dev/1920/dev@2x.png'),
            width: 3840,
            height: 1280,
          }}
        />
        <Hire />
        <Feature1 image={{ namespace: 'dev', key: 'geometry', alt: t('dev:imgAlt.geometry') }} />
        {/* <Competences />*/}
        <Feature2
          title={t('dev:time.title')}
          text={t('dev:time.text')}
          image={{ namespace: 'dev', key: 'time', alt: t('dev:imgAlt.time') }}
        />
        {isMobile ? <PartnersMobile /> : <Partners />}
        {/* <Clients isMobile={isMobile} />*/}
        {/* <Portfolio portfolio={shuffledPortfolio} isMobile={isMobile}/>*/}
        <Feature2
          title={t('dev:perfect.title')}
          text={t('dev:perfect.text')}
          image={{ namespace: 'dev', key: 'perfect', alt: t('dev:imgAlt.perfect') }}
        />
        <Form />
        {/* <ButtonSelect
          isMobile={isMobile}
          showButtonOnNode="feature1"
          hideButtonOnNode="hire-us"
          buttonText={t('dev:hire.buttonText')}
          pageName="dev"
        /> */}
      </Layout>
    )
  }
}

export default withI18next(['dev'])(Dev)
