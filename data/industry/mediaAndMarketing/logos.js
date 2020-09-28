const ourClientsImages = {
  en: require.context('../../../public/images/industry/media-and-marketing/logos?csssr-images'),
  ru: require.context('../../../public/images/industry/media-and-marketing/logos?csssr-images'),
}

export default {
  heading: (t) => t.industry.ourClients.title,
  images: ourClientsImages,
  altImg: (t) => t.industry.imgAlt.ourClients,
}
