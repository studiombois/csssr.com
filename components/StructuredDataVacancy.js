import React from 'react'

// https://developers.google.com/search/docs/guides/intro-structured-data
const StructuredDataVacancy = ({ vacancy }) => {
  const description = `${vacancy.description}${vacancy.sections.map(item => (
    item.type !== 'questBox' ?
      `${item.title}${item.list.map(itemList => (
        `•${itemList}`
      ))}` : null
  ))}`

  const employment = vacancy.employment === 'part-time'
    ? 'PART_TIME'
    : 'FULL_TIME'

  console.log(description)

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: `
      {
        "datePosted": ${vacancy.createDate},
        "title": ${vacancy.name},
        "description": ${description},
        "hiringOrganization": {
          "@type": "Organization",
          "name": "CSSSR"",
          "logo": "https://csssr.com/static/csssr_logo.png",
          "sameAs": [
            "https://www.facebook.com/csssr/",
            "https://www.linkedin.com/company/csssr/",
            "https://www.instagram.com/csssr_com/",
            "https://twitter.com/csssr_dev",
            "https://vk.com/csssr_dev",
            "https://www.youtube.com/c/CSSSR_dev",
            "https://soundcloud.com/csssr"
          ]
        },
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "Russia"
        },
        "jobLocationType": "TELECOMMUTE",
        "employmentType": ${employment}
      }
    `,
      }}
    />
  )
}

export default StructuredDataVacancy
