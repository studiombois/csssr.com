const aboutUsImages = require.context('../../public/images/service/express/about_us?csssr-images')

export default {
  images: aboutUsImages,
  imgAlt: 'express:imgAlt.aboutUs',
}
