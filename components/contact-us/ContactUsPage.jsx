import React from 'react'
import Layout from '../Layout'
import { L10nConsumer } from '../../utils/l10nProvider'
import BookACall from './BookACall'

import Head from '../Head'
import ContactUs from './ContactUs'

const ContactUsPage = ({ l10n: { translations } }) => {
  const pageName = 'coreValues'

  return (
    <Layout pageName={pageName}>
      <Head
        title={translations.contactUs.meta.title}
        description={translations.contactUs.meta.description}
      />
      <ContactUs />

      <BookACall
        profileId="anastasia_ignatenko"
        reservationTime="13:30 - 14:00, Thursday, May 21, 2020"
        canBookACall
        wasCallReservationSuccessful
      />
      <BookACall
        profileId="anastasia_vnuchenko"
        reservationTime="13:30 - 14:00, Thursday, May 21, 2020"
        canBookACall
        wasCallReservationSuccessful
      />
      <BookACall profileId="olga_shevchenko" />
      <BookACall profileId="victoria_zubareva" />
    </Layout>
  )
}

export default L10nConsumer(ContactUsPage)
