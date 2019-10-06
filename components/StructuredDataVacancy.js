import React from 'react'

// https://developers.google.com/search/docs/guides/intro-structured-data
const StructuredDataVacancy = ({ vacancy }) => {
  const description = `${vacancy.sections.map(item => (
    item.type !== 'questBox' ?
      `<h2>${item.title}</h2><ul>${item.list.map(itemList => (
        `<li>${itemList}</li>`
      ))}</ul>` : null
  ))}`

  console.log('11!!!!!111', description)
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
      }
    `,
      }}
    />
  )
}

export default StructuredDataVacancy
