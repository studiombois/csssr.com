const laptopImages = require.context(
  '../../../public/images/project/common-pics/challenge/laptop?csssr-images',
)
const profileImagesEn = require.context(
  '../../../public/images/project/common-pics/challenge/profileEn?csssr-images',
)
const profileImagesRu = require.context(
  '../../../public/images/project/common-pics/challenge/profileRu?csssr-images',
)

export default {
  images: {
    laptop: laptopImages,
    laptopAlt: (t) => t.project.gazpromNeft.challenge.laptopImgAlt,
    profileEn: profileImagesEn,
    profileRu: profileImagesRu,
    profileAlt: (t) => t.project.gazpromNeft.challenge.profileImgAlt,
  },
  text: {
    challenge: {
      heading: (t) => t.project.gazpromNeft.challenge.challenge.heading,
      text: (t) => t.project.gazpromNeft.challenge.challenge.text,
    },
    task: {
      heading: (t) => t.project.gazpromNeft.challenge.task.heading,
      text: (t) => t.project.gazpromNeft.challenge.task.text,
    },
    result: {
      heading: (t) => t.project.gazpromNeft.challenge.result.heading,
      months: {
        number: (t) => t.project.gazpromNeft.challenge.result.months.number,
        description: (t) => t.project.gazpromNeft.challenge.result.months.description,
      },
      releases: {
        number: (t) => t.project.gazpromNeft.challenge.result.releases.number,
        description: (t) => t.project.gazpromNeft.challenge.result.releases.description,
      },
    },
    quote: {
      text: (t) => t.project.gazpromNeft.challenge.quote.text,
      author: (t) => t.project.gazpromNeft.challenge.quote.author,
      role: (t) => t.project.gazpromNeft.challenge.quote.role,
    },
  },
}
