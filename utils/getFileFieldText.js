export default t => accept => {
  switch (accept) {
  case 'zip':
    return `(${t('job:zipPacked')})`
  case 'docx':
    return `(${t('job:docxFormat')})`
  case 'xlsx':
    return `(${t('job:xlsxFormat')})`
  case 'sketch':
    return `(${t('job:sketchFormat')})`
  case 'jpg':
    return `(${t('job:jpgFormat')})`
  case 'pdf':
    return `(${t('job:pdfFormat')})`
  default:
    return ''
  }
}
