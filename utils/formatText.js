const linkRegExp = /\[(.*?)\]\((.*?)(\s+"(.*?)")?\)/ig
const strikeRegExp = /~/g

const mdToHtmlLink = str =>
  str.replace(linkRegExp, (match, text, href, _, title) =>
    `<a class="font_link-list_16" href="${href}" target="_blank"${title ? ' title="' + title + '"' : ''}>${text}</a>`
  )


const mdToHtmlStrike = str => {
  const strikes = str.match(strikeRegExp) || []

  if (strikes.length > 1) {
    str = str.split('~')
    const strLength = str.length
    return str.map((item, i) =>
      i !== 0 && i !== (strLength - 1) && i % 2 ? '<s>' + item + '</s>' : item
    ).join('')
  }

  return str
}

export default str => mdToHtmlStrike(mdToHtmlLink(str))
