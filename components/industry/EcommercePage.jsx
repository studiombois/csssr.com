import React from 'react'
import { func } from 'prop-types'
import Layout from '../Layout'
import withI18next from '../../utils/withI18next'
import translate from '../../utils/translate-wrapper'

import Greeting from './Greeting'
import OurClients from './OurClients'
import Facts from './Facts'
import CoreValues from './CoreValues'

import { greetingImages } from '../../data/industry/ecommerce/images/greeting'
import { ourClientsImages } from '../../data/industry/ecommerce/images/logos'
import { factsImages } from '../../data/industry/ecommerce/images/facts'
import {
  coreValuesAccessibilityImages,
  coreValuesSecurityImages,
  coreValuesUXImages,
} from '../../data/industry/ecommerce/images/coreValues'

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

      <OurClients
        id="ourClients"
        content={{
          heading: t('ecommerce:ourClients.title'),
          images: ourClientsImages,
          altImg: t('ecommerce:imgAlt.ourClients'),
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

      <CoreValues
        id="core-values"
        content={{
          heading: t('ecommerce:coreValues.heading'),
          subHeading: t('ecommerce:coreValues.subHeading'),
          coreValuesItems: [
            {
              images: coreValuesAccessibilityImages,
              imgAlt: t('ecommerce:imgAlt.coreValuesAccessibility'),
              link: t('ecommerce:coreValues.firstItem.link'),
              text: t('ecommerce:coreValues.firstItem.text'),
              className: 'first-item',
            },
            {
              images: coreValuesSecurityImages,
              imgAlt: t('ecommerce:imgAlt.coreValuesSecurity'),
              link: t('ecommerce:coreValues.secondItem.link'),
              text: t('ecommerce:coreValues.secondItem.text'),
              className: 'second-item',
            },
            {
              images: coreValuesUXImages,
              imgAlt: t('ecommerce:imgAlt.coreValuesUX'),
              link: t('ecommerce:coreValues.thirdItem.link'),
              text: t('ecommerce:coreValues.thirdItem.text'),
              className: 'third-item',
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
