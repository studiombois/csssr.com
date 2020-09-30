const anastasiaIgnatenko = require.context(
  '../../public/images/contact-us/book-a-call/anastasia_ignatenko?csssr-images',
)

const olgaShevchenko = require.context(
  '../../public/images/contact-us/book-a-call/olga_shevchenko?csssr-images',
)

const sonyaKiseleva = require.context(
  '../../public/images/contact-us/book-a-call/sonya_kiseleva?csssr-images',
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
  sonya_kiseleva: {
    images: sonyaKiseleva,
    email: 'launch@csssr.com',
    calendlyLink: 'https://calendly.com/sonya-kiseleva/csssr',
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
