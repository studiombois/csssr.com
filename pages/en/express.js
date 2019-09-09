import React from 'react'
import Head from '../../components/Head'
import Hire from '../../components/sborka/Hire'
import Budget from '../../components/sborka/Budget'
import Projects from '../../components/sborka/Projects'
import Portfolio from '../../components/sborka/Portfolio'
import OurPrinciples from '../../components/sborka/OurPrinciples'
import WorkingProcess from '../../components/sborka/WorkingProcess'
import Form from '../../components/sborka/Form'
import PostScriptum from '../../components/sborka/PostScriptum'
import Layout from '../../components/Layout'
import ButtonSelect from '../../components/ui-kit/ButtonSelect/ButtonSelect'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import withI18next from '../../utils/withI18next'

const Sborka = ({ t, isMobile, isMsBrowser }) =>
  <Layout
    headerProps={{ isLogoLink: true, isBurgerVisible: true }}
    footerProps={{ socialLinks: devSocialLinks }}
  >
    <Head title={t('sborka:meta.title')} description={t('sborka:meta.description')} />
    <Hire isMsBrowser={isMsBrowser} />
    <Budget />
    <Projects />
    <WorkingProcess />
    <Portfolio isMobile={isMobile} />
    <OurPrinciples />
    <Form />
    <PostScriptum />
    <ButtonSelect
      isMobile={isMobile}
      showButtonOnNode='budget'
      hideButtonOnNode='hire-us'
      buttonText={t('sborka:hire.buttonText')}
      pageName='sborka'
    />
  </Layout>

export default withI18next(['sborka'])(Sborka)
