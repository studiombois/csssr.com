const teamImagesEn = require.context(
  '../../../public/images/project/gazprom-neft/team_en?csssr-images',
)
const teamImagesRu = require.context(
  '../../../public/images/project/gazprom-neft/team_ru?csssr-images',
)

export default {
  imagesEn: teamImagesEn,
  imagesRu: teamImagesRu,
  heading: (t) => t.project.gazpromNeft.team.title,
  description: (t) => t.project.gazpromNeft.team.description,
  imgAlt: (t) => t.project.gazpromNeft.team.imgAlt,
  accountManagementTitle: (t) => t.project.gazpromNeft.team.accountManagement.title,
  projectManagementTitle: (t) => t.project.gazpromNeft.team.projectManagement.title,
}
