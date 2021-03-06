const ourClientsImages = {
  en: require.context(
    '../../../public/images/industry/information-technology/logos/en?csssr-images',
  ),
  ru: require.context(
    '../../../public/images/industry/information-technology/logos/ru?csssr-images',
  ),
}

export default {
  heading: (t) => t.industry.ourClients.title,
  images: ourClientsImages,
  altImg: (t) => t.industry.imgAlt.ourClients,
}
