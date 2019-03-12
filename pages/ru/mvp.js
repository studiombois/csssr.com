import React, { PureComponent } from 'react'
import Head from '../../components/Head'
import Layout from '../../components/Layout'
import Begin from '../../components/mvp/Begin'
import RiskMinimization from '../../components/mvp/RiskMinimization'
import Money from '../../components/mvp/Money'
import Process from '../../components/mvp/Process'
import HireUs from '../../components/mvp/HireUs'
import withI18next from '../../utils/withI18next'
import { devSocialLinks } from '../../data/jobs/footerLinks'
import Rocket from '../../components/mvp/Rocket'

class MVP extends PureComponent {
  render() {
    const { t } = this.props

    return (
      <Layout
        headerProps={{ logoHref: '/ru', isLogoLink: true, isBurgerVisible: true }}
        footerProps={{ socialLinks: devSocialLinks }}
      >
        <Head title={t('mvp:meta.title')} description={t('mvp:meta.description')} />
        <Begin
          imageAlt={t('mvp:begin.imageAlt.title')}
          title={t('mvp:begin.title')}
          text={t('mvp:begin.text')}
          rocketText={t('mvp:begin.rocketText')}
        >
          <Rocket
            rocketBodyAlt={t('mvp:begin.imageAlt.rocketBody')}
            rocketDressAlt={t('mvp:begin.imageAlt.rocketDress')}
            rocketJetAlt={t('mvp:begin.imageAlt.rocketJet')}
            rocketDeviderAlt={t('mvp:begin.imageAlt.rocketDevider')}
            rocketArrowAlt={t('mvp:begin.imageAlt.rocketArrow')}
          />
        </Begin>
        <RiskMinimization
          toggleItems={[
            t('mvp:riskMinimization.togglerOn'),
            t('mvp:riskMinimization.togglerOff'),
          ]}
          imageAltOn={t('mvp:riskMinimization.imageAltOn')}
          imageAltOff={t('mvp:riskMinimization.imageAltOff')}
          imageAltVawes={t('mvp:riskMinimization.imageAltVawes')}
          title={t('mvp:riskMinimization.title')}
          textOn={t('mvp:riskMinimization.textOn')}
          textOff={t('mvp:riskMinimization.textOff')}
        />
        <Money
          imageAlt={t('mvp:money.imageAlt')}
          title={t('mvp:money.title')}
          text={t('mvp:money.text')}
        />
        <Process title={t('mvp:process.title')} />
        <HireUs
          imageAlt={t('mvp:hireUs.imageAlt')}
          buttonText={t('mvp:hireUs.buttonText')}
          link={t('mvp:hireUs.link')}
        />
      </Layout>
    )
  }
}

export default withI18next(['mvp'])(MVP)
