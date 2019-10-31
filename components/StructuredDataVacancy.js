import React from 'react'

// https://developers.google.com/search/docs/guides/intro-structured-data
const StructuredDataVacancy = ({ vacancy }) => {
  const description = `<p>${vacancy.description}</p></br>${vacancy.sections.map(item => (
    item.type !== 'questBox' ?
      `<p>${item.title}</p></br><p>${item.text !== undefined ? `${item.text}` : null}</p></br>${item.list !== undefined ? `<ul>${item.list.map(itemList => (
        `<li>${itemList}</li>`
      ))}</ul>` : null}` : null
  ))}`

  const employment = vacancy.employment === 'part-time'
    ? 'PART_TIME'
    : 'FULL_TIME'

  const getCountry = () => {
    const loc = vacancy.locale
    if (loc === 'ru-ru') return 'Russia'
    if (loc === 'en-us') return 'USA'
    if (loc === 'en-sg') return 'Singapore'
    if (loc === 'ru-ee' || loc === 'en-ee') return 'Eesti Vabariik'
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: `
      {
        "@type": "JobPosting",
        "datePosted": "${vacancy.createDate}",
        "title": "${vacancy.name}",
        "description": "${description}",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "CSSSR",
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
          "name": "${getCountry()}"
        },
        "jobLocationType": "TELECOMMUTE",
        "employmentType": "${employment}",
        "workHours": "40 hours per week",
        "industry": "Computer Software" 
      }
    `,
      }}
    />
  )
}

export default StructuredDataVacancy
