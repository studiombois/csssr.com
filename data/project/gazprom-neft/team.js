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
  acountManagmentTitle: (t) => t.project.gazpromNeft.team.acountManagment.title,
  projectManagmentTitle: (t) => t.project.gazpromNeft.team.projectManagment.title,
}
