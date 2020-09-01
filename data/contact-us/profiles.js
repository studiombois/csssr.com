const anastasiaIgnatenko = require.context(
  '../../public/images/contact-us/book-a-call/anastasia_ignatenko?csssr-images',
)
const anastasiaVnuchenko = require.context(
  '../../public/images/contact-us/book-a-call/anastasia_vnuchenko?csssr-images',
)

const olgaShevchenko = require.context(
  '../../public/images/contact-us/book-a-call/olga_shevchenko?csssr-images',
)

const victoriaZubareva = require.context(
  '../../public/images/contact-us/book-a-call/victoria_zubareva?csssr-images',
)

export default {
  anastasia_ignatenko: {
    images: anastasiaIgnatenko,
    email: 'launch@csssr.com',
    calendlyLink: 'https://calendly.com/anastasia-ign/csssr',
  },
  anastasia_vnuchenko: {
    images: anastasiaVnuchenko,
    email: 'launch@csssr.com',
    calendlyLink: 'https://calendly.com/anastasia-vnuchenko/csssr',
  },
  olga_shevchenko: {
    images: olgaShevchenko,
    email: 'launch@csssr.com',
  },
  victoria_zubareva: {
    images: victoriaZubareva,
    email: 'join@csssr.com',
  },
}
