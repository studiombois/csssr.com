// https://developers.google.com/search/docs/guides/intro-structured-data
const structuredDataVacancy = (vacancy) => {
  const getDescriptionLayout = () => {
    return vacancy.sections
      .map((item) => {
        if (item.type === 'titleAndText') {
          return `<p>${item.title}</p><p>${item.text}</p>`
        } else if (item.type === 'titleAndList') {
          return `<p>${item.title}</p><ul>${item.list.map((li) => `<li>${li}</li>`).join('')}</ul>`
        } else if (item.type === 'text' || item.type === 'boldText') {
          return `<p>${item.text}</p>`
        }
      })
      .join('')
  }

  const employment = vacancy.employment === 'part-time' ? 'PART_TIME' : 'FULL_TIME'

  const getCountry = () => {
    const loc = vacancy.locale
    if (loc === 'ru-ru') return 'Russia'
    if (loc === 'en-us') return 'USA'
    if (loc === 'en-sg') return 'Singapore'
    if (loc === 'ru-ee' || loc === 'en-ee') return 'Eesti Vabariik'
  }

  return `
      {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "datePosted": "${vacancy.createDate}",
        "title": "${vacancy.name}",
        "description": "${vacancy.description}${getDescriptionLayout()}",
        "hiringOrganization": {
          "@context": "https://schema.org/",
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
          "@context": "https://schema.org/",
          "@type": "Country",
          "name": "${getCountry()}"
        },
        "jobLocationType": "TELECOMMUTE",
        "employmentType": "${employment}"
      }
    `
}

export default structuredDataVacancy
