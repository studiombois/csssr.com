const scrumbanImages = require.context(
  '../../public/images/way-of-work/development/scrumban?csssr-images',
)

const reviewImages = require.context(
  '../../public/images/way-of-work/development/review?csssr-images',
)

const scrumban = {
  img: scrumbanImages,
  imgAlt: (t) => t.wayOfWork.development.scrumban.imgAlt,
  title: (t) => t.wayOfWork.development.scrumban.title,
  description: (t) => t.wayOfWork.development.scrumban.description,
  text: (t) => t.wayOfWork.development.scrumban.text,
  textTwo: (t) => t.wayOfWork.development.scrumban.text_2,
}

const review = {
  img: reviewImages,
  imgAlt: (t) => t.wayOfWork.development.review.imgAlt,
  title: (t) => t.wayOfWork.development.review.title,
  description: (t) => t.wayOfWork.development.review.description,
  text: (t) => t.wayOfWork.development.review.text,
}

export { scrumban, review }
