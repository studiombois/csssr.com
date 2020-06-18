export default (translations) => (accept) => {
  switch (accept) {
    case 'zip':
      return `(${translations.job.zipPacked})`
    case 'docx':
      return `(${translations.job.docxFormat})`
    case 'xlsx':
      return `(${translations.job.xlsxFormat})`
    case 'sketch':
      return `(${translations.job.sketchFormat})`
    case 'jpg':
      return `(${translations.job.jpgFormat})`
    case 'pdf':
      return `(${translations.job.pdfFormat})`
    case 'psd':
      return `(${translations.job.psdFormat})`
    default:
      return ''
  }
}
