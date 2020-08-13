import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'

import Head from '../Head'
import ContactUs from './ContactUs'

const ContactUsPage = ({ l10n: { translations } }) => {
  const pageName = 'contactUs'

  return (
    <Layout pageName={pageName} withFooter={false}>
      <Head
        title={translations.contactUs.meta.title}
        description={translations.contactUs.meta.description}
      >
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        />
      </Head>
      <ContactUs />
    </Layout>
  )
}

export default L10nConsumer(ContactUsPage)
