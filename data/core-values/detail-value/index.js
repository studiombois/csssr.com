const cleanCode = require.context('../../../public/images/core-values/cleanCode?csssr-images')
const reliability = require.context('../../../public/images/core-values/reliability?csssr-images')
const accessibility = require.context(
  '../../../public/images/core-values/accessibility?csssr-images',
)
const ux = require.context('../../../public/images/core-values/ux?csssr-images')
const webSecurity = require.context('../../../public/images/core-values/webSecurity?csssr-images')

import { ReactComponent as Accessibility_1 } from '../../../static/icons/core-values/accessibility_1.svg'
import { ReactComponent as Accessibility_2 } from '../../../static/icons/core-values/accessibility_2.svg'
import { ReactComponent as Code } from '../../../static/icons/core-values/code.svg'
import { ReactComponent as Keys } from '../../../static/icons/core-values/keys.svg'
import { ReactComponent as Line_code } from '../../../static/icons/core-values/line_code.svg'
import { ReactComponent as Perfectionism } from '../../../static/icons/core-values/perfectionism.svg'
import { ReactComponent as Reliability } from '../../../static/icons/core-values/reliability.svg'

export default [
  {
    id: 'code',
    images: cleanCode,
    imgAlt: (t) => t.coreValues.imgAlt.cleanCode,
    title: (t) => t.coreValues.detailValue.cleanCode.title,
    subTitle: (t) => t.coreValues.detailValue.cleanCode.subTitle,
    description: [
      {
        icon: Code,
        text: (t) => t.coreValues.detailValue.cleanCode.text,
      },
      {
        icon: Line_code,
        text: (t) => t.coreValues.detailValue.cleanCode.text_2,
      },
    ],
  },
  {
    id: 'reliability',
    images: reliability,
    imgAlt: (t) => t.coreValues.imgAlt.reliability,
    title: (t) => t.coreValues.detailValue.reliability.title,
    subTitle: (t) => t.coreValues.detailValue.reliability.subTitle,
    description: [
      {
        icon: Reliability,
        text: (t) => t.coreValues.detailValue.reliability.text,
      },
    ],
  },
  {
    id: 'accessibility',
    images: accessibility,
    imgAlt: (t) => t.coreValues.imgAlt.accessibility,
    title: (t) => t.coreValues.detailValue.accessibility.title,
    subTitle: (t) => t.coreValues.detailValue.accessibility.subTitle,
    description: [
      {
        icon: Accessibility_1,
        text: (t) => t.coreValues.detailValue.accessibility.text,
      },
      {
        icon: Accessibility_2,
        text: (t) => t.coreValues.detailValue.accessibility.text_2,
      },
    ],
  },
  {
    id: 'ux',
    images: ux,
    imgAlt: (t) => t.coreValues.imgAlt.ux,
    title: (t) => t.coreValues.detailValue.ux.title,
    subTitle: (t) => t.coreValues.detailValue.ux.subTitle,
    description: [
      {
        icon: Perfectionism,
        text: (t) => t.coreValues.detailValue.ux.text,
      },
    ],
  },
  {
    id: 'security',
    images: webSecurity,
    imgAlt: (t) => t.coreValues.imgAlt.webSecurity,
    title: (t) => t.coreValues.detailValue.webSecurity.title,
    subTitle: (t) => t.coreValues.detailValue.webSecurity.subTitle,
    description: [
      {
        icon: Keys,
        text: (t) => t.coreValues.detailValue.webSecurity.text,
      },
    ],
  },
]
