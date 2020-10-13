// https://developers.google.com/search/docs/guides/intro-structured-data
const structuredData = () => `
  {
    "@context" : "http://schema.org",
    "@type" : "Organization",
    "name" : "CSSSR",
    "url" : "https://csssr.com",
    "logo": "https://csssr.com/static/csssr_logo.png",
    "sameAs" : [
      "https://www.facebook.com/csssr/",
      "https://www.linkedin.com/company/csssr/",
      "https://www.instagram.com/csssr_com/",
      "https://twitter.com/csssr_dev",
      "https://vk.com/csssr_dev",
      "https://www.youtube.com/c/CSSSR_dev",
      "https://soundcloud.com/csssr"
    ]
  }
`

export default structuredData
