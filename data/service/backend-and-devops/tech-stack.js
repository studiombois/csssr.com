const javaImages = require.context(
  '../../../public/images/service/backend-and-devops/tech-stack/java?csssr-images',
)

const mongoDbImages = require.context(
  '../../../public/images/service/backend-and-devops/tech-stack/mongodb?csssr-images',
)

export default {
  javaImages: javaImages,
  mongoDbImages: mongoDbImages,
  heading: (t) => t.backEndAndDevops.techStack.title,
  description: (t) => t.backEndAndDevops.techStack.description,
  mongoDb: (t) => t.backEndAndDevops.techStack.mongoDb,
  java: (t) => t.backEndAndDevops.techStack.java,
  experts: (t) => t.backEndAndDevops.techStack.experts,
  link: (t) => t.backEndAndDevops.techStack.link,
  javaImgAlt: (t) => t.backEndAndDevops.techStack.javaImgAlt,
  mongoDbImgAlt: (t) => t.backEndAndDevops.techStack.mongoDbImgAlt,
}
