const devOpsImages = require.context(
  '../../../public/images/service/backend-and-devops/devops-services?csssr-images',
)

export default {
  images: devOpsImages,
  heading: (t) => t.backEndAndDevops.devOpsServices.title,
  subtitle: (t) => t.backEndAndDevops.devOpsServices.subtitle,
  description: (t) => t.backEndAndDevops.devOpsServices.description,
  imgAlt: (t) => t.backEndAndDevops.devOpsServices.imgAlt,
  solutions: {
    heading: (t) => t.backEndAndDevops.devOpsServices.solutions.title,
    cases: [
      {
        id: 'continuous',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.continuous.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.continuous.description,
      },
      {
        id: 'automatic',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.automatic.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.automatic.description,
      },
      {
        id: 'cluster',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.cluster.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.cluster.description,
      },
      {
        id: 'maintenance',
        title: (t) => t.backEndAndDevops.devOpsServices.solutions.maintenance.title,
        description: (t) => t.backEndAndDevops.devOpsServices.solutions.maintenance.description,
      },
    ],
  },
}
