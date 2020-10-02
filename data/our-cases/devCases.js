const gazpromImages = require.context(
  '../../public/images/our-cases/dev-cases/gazprom?csssr-images',
)
const s7Images = require.context('../../public/images/our-cases/dev-cases/s7?csssr-images')
const qacademyImages = require.context(
  '../../public/images/our-cases/dev-cases/qacademy?csssr-images',
)
const brusnikaImages = require.context(
  '../../public/images/our-cases/dev-cases/brusnika?csssr-images',
)
const mindboxImages = require.context(
  '../../public/images/our-cases/dev-cases/mindbox?csssr-images',
)
const flantImages = require.context('../../public/images/our-cases/dev-cases/flant?csssr-images')
const mosoblgazImages = require.context(
  '../../public/images/our-cases/dev-cases/mosoblgaz?csssr-images',
)

export default {
  heading: (t) => t.ourCases.devCases.heading,
  cases: [
    {
      linkClass: 'gazprom',
      images: gazpromImages,
      imgAlt: (t) => t.ourCases.devCases.gazprom.imgAlt,
      link: 'project/gazprom-neft-professionals-4-0',
      heading: (t) => t.ourCases.devCases.gazprom.heading,
      text: (t) => t.ourCases.devCases.gazprom.text,
      tag: (t) => t.ourCases.devCases.gazprom.tag,
      tagId: 'IT',
      tagLink: 'industry/information-technology',
      team: (t) => t.ourCases.devCases.gazprom.team,
      duration: (t) => t.ourCases.devCases.gazprom.duration,
    },
    {
      linkClass: 's7',
      images: s7Images,
      imgAlt: (t) => t.ourCases.devCases.s7.imgAlt,
      link: 'project/s7-personal-account',
      heading: (t) => t.ourCases.devCases.s7.heading,
      text: (t) => t.ourCases.devCases.s7.text,
      tag: (t) => t.ourCases.devCases.s7.tag,
      tagId: 'IT',
      tagLink: 'industry/information-technology',
      team: (t) => t.ourCases.devCases.s7.team,
      duration: (t) => t.ourCases.devCases.s7.duration,
    },
    {
      linkClass: 'qacademy',
      images: qacademyImages,
      imgAlt: (t) => t.ourCases.devCases.qacademy.imgAlt,
      link: 'project/qmarketing',
      heading: (t) => t.ourCases.devCases.qacademy.heading,
      text: (t) => t.ourCases.devCases.qacademy.text,
      tag: (t) => t.ourCases.devCases.qacademy.tag,
      tagId: 'mediaAndMarketing',
      tagLink: 'industry/media-and-marketing',
      team: (t) => t.ourCases.devCases.qacademy.team,
      duration: (t) => t.ourCases.devCases.qacademy.duration,
    },
    {
      linkClass: 'brusnika',
      images: brusnikaImages,
      imgAlt: (t) => t.ourCases.devCases.brusnika.imgAlt,
      link: 'project/brusnika',
      heading: (t) => t.ourCases.devCases.brusnika.heading,
      text: (t) => t.ourCases.devCases.brusnika.text,
      tag: (t) => t.ourCases.devCases.brusnika.tag,
      tagId: 'ecommerce',
      tagLink: 'industry/ecommerce',
      team: (t) => t.ourCases.devCases.brusnika.team,
      duration: (t) => t.ourCases.devCases.brusnika.duration,
    },
    {
      linkClass: 'mindbox',
      images: mindboxImages,
      imgAlt: (t) => t.ourCases.devCases.mindbox.imgAlt,
      link: 'project/mindbox',
      heading: (t) => t.ourCases.devCases.mindbox.heading,
      text: (t) => t.ourCases.devCases.mindbox.text,
      tag: (t) => t.ourCases.devCases.mindbox.tag,
      tagId: 'mediaAndMarketing',
      tagLink: 'industry/media-and-marketing',
      team: (t) => t.ourCases.devCases.mindbox.team,
      duration: (t) => t.ourCases.devCases.mindbox.duration,
    },
    {
      linkClass: 'flant',
      images: flantImages,
      imgAlt: (t) => t.ourCases.devCases.flant.imgAlt,
      link: 'project/flant',
      heading: (t) => t.ourCases.devCases.flant.heading,
      text: (t) => t.ourCases.devCases.flant.text,
      tag: (t) => t.ourCases.devCases.flant.tag,
      tagId: 'IT',
      tagLink: 'industry/information-technology',
      team: (t) => t.ourCases.devCases.flant.team,
      duration: (t) => t.ourCases.devCases.flant.duration,
    },
    {
      linkClass: 'mosoblgaz',
      images: mosoblgazImages,
      imgAlt: (t) => t.ourCases.devCases.mosoblgaz.imgAlt,
      link: 'project/mosoblgaz',
      heading: (t) => t.ourCases.devCases.mosoblgaz.heading,
      text: (t) => t.ourCases.devCases.mosoblgaz.text,
      tag: (t) => t.ourCases.devCases.mosoblgaz.tag,
      tagId: 'ecommerce',
      tagLink: 'industry/ecommerce',
      team: (t) => t.ourCases.devCases.mosoblgaz.team,
      duration: (t) => t.ourCases.devCases.mosoblgaz.duration,
    },
  ],
}
