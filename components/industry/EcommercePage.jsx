import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import Greeting from './Greeting'
import Facts from './Facts'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'
import { greetingImages } from '../../data/industry/ecommerce/images/greeting'
import { factsImages } from '../../data/industry/ecommerce/images/facts'

const IndustryPage = ({ t }) => {
  return (
    <Layout>
      <Greeting
        id="greeting"
        content={{
          heading: t('ecommerce:greeting.title'),
          text: t('ecommerce:greeting.paragraph'),
          button: t('ecommerce:greeting.button'),
          images: greetingImages,
          imgAlt: t('ecommerce:imgAlt.greeting'),
        }}
      />

      <Facts
        id="facts"
        content={{
          heading: t('ecommerce:facts.heading'),
          subHeading: t('ecommerce:facts.subHeading'),
          images: factsImages,
          imgAlt: t('ecommerce:imgAlt.facts'),
          factItems: [
            {
              number: t('ecommerce:facts.firstItem.number'),
              text: t('ecommerce:facts.firstItem.text'),
              className: 'first-item',
            },
            {
              number: t('ecommerce:facts.secondItem.number'),
              text: t('ecommerce:facts.secondItem.text'),
              className: 'second-item',
            },
            {
              number: t('ecommerce:facts.thirdItem.number'),
              text: t('ecommerce:facts.thirdItem.text'),
              className: 'third-item',
            },
            {
              number: t('ecommerce:facts.fourthItem.number'),
              text: t('ecommerce:facts.fourthItem.text'),
              className: 'fourth-item',
            },
          ],
        }}
      />
    </Layout>
  )
}

IndustryPage.propTypes = {
  t: func,
}

export default withI18next(['ecommerce'])(translate()(IndustryPage))
