import React from 'react'

// https://developers.google.com/search/docs/guides/intro-structured-data
const StructuredDataVacancy = ({ vacancy }) => {

  const getDescriptionLayout = () => {
    let resultDescription = ''

    const getListLayout = arr => {
      let resultList = ''

      arr.forEach((item, i) => {
        resultList += `<li>${arr[i]}</li>`
      })

      return resultList
    }

    vacancy.sections.forEach(item => {
      if (item.type === 'titleAndText') {
        resultDescription += `<p>${item.title}</p></br><p>${item.text}</p>`
      } else if (item.type === 'titleAndList') {
        resultDescription += `<p>${item.title}</p></br><ul>${getListLayout(item.list)}</ul>`
      }
    })

    // todo  в массиве присутсвует призыв к действию, который помечен тем же типом что и скилы "titleAndText" нужно поменять тип
    return resultDescription
  }

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
        "description": "${vacancy.description}</br>${getDescriptionLayout()}",
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
