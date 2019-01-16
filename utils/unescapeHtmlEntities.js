const htmlEntitiesMap = {
  '&nbsp;': ' ',
  '&mdash;': '—',
  '&ndash;': '–',
  '&amp;': '&',
  '&quot;': '"',
  '&laquo;': '«',
  '&raquo;': '»',
}

module.exports = value =>
  Object.keys(htmlEntitiesMap).reduce((acc, htmlEntity) => {
    return acc.replace(new RegExp(htmlEntity, 'g'), htmlEntitiesMap[htmlEntity])
  }, value)
