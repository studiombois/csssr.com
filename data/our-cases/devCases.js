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

export default [
  {
    images: gazpromImages,
    heading: (t) => t.ourCases.devCases.gazprom.heading,
    text: (t) => t.ourCases.devCases.gazprom.text,
    tag: (t) => t.ourCases.devCases.gazprom.tag,
    team: (t) => t.ourCases.devCases.gazprom.team,
    duration: (t) => t.ourCases.devCases.gazprom.duration,
  },
  {
    images: s7Images,
    imgAlt: (t) => t.ourCases.devCases.s7.imgAlt,
    heading: (t) => t.ourCases.devCases.s7.heading,
    text: (t) => t.ourCases.devCases.s7.text,
    tag: (t) => t.ourCases.devCases.s7.tag,
    team: (t) => t.ourCases.devCases.s7.team,
    duration: (t) => t.ourCases.devCases.s7.duration,
  },
  {
    images: qacademyImages,
    heading: (t) => t.ourCases.devCases.qacademy.heading,
    text: (t) => t.ourCases.devCases.qacademy.text,
    tag: (t) => t.ourCases.devCases.qacademy.tag,
    team: (t) => t.ourCases.devCases.qacademy.team,
    duration: (t) => t.ourCases.devCases.qacademy.duration,
  },
  {
    images: brusnikaImages,
    heading: (t) => t.ourCases.devCases.brusnika.heading,
    text: (t) => t.ourCases.devCases.brusnika.text,
    tag: (t) => t.ourCases.devCases.brusnika.tag,
    team: (t) => t.ourCases.devCases.brusnika.team,
    duration: (t) => t.ourCases.devCases.brusnika.duration,
  },
  {
    images: mindboxImages,

    heading: (t) => t.ourCases.devCases.mindbox.heading,
    text: (t) => t.ourCases.devCases.mindbox.text,
    tag: (t) => t.ourCases.devCases.mindbox.tag,
    team: (t) => t.ourCases.devCases.mindbox.team,
    duration: (t) => t.ourCases.devCases.mindbox.duration,
  },
  {
    images: flantImages,
    heading: (t) => t.ourCases.devCases.flant.heading,
    text: (t) => t.ourCases.devCases.flant.text,
    tag: (t) => t.ourCases.devCases.flant.tag,
    team: (t) => t.ourCases.devCases.flant.team,
    duration: (t) => t.ourCases.devCases.flant.duration,
  },
  {
    images: mosoblgazImages,
    heading: (t) => t.ourCases.devCases.mosoblgaz.heading,
    text: (t) => t.ourCases.devCases.mosoblgaz.text,
    tag: (t) => t.ourCases.devCases.mosoblgaz.tag,
    team: (t) => t.ourCases.devCases.mosoblgaz.team,
    duration: (t) => t.ourCases.devCases.mosoblgaz.duration,
  },
]
