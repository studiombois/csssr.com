import React from 'react'

// https://developers.google.com/search/docs/guides/intro-structured-data
const StructuredData = () =>
  <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: `
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
      "https://vk.com/csssr",
      "https://www.youtube.com/c/CSSSR_dev",
      "https://soundcloud.com/csssr"
    ]
  }
` }} />

export default StructuredData
