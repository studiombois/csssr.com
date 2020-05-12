import cleanCode from './cleanCode'
import reliability from './reliability'
import accessibility from './accessibility'
import ux from './ux'
import webSecurity from './webSecurity'

import Accessibility_1 from '../../../static/icons/core-values/accessibility_1.svg'
import Accessibility_2 from '../../../static/icons/core-values/accessibility_2.svg'
import Code from '../../../static/icons/core-values/code.svg'
import Keys from '../../../static/icons/core-values/keys.svg'
import Line_code from '../../../static/icons/core-values/line_code.svg'
import Perfectionism from '../../../static/icons/core-values/perfectionism.svg'
import Reliability from '../../../static/icons/core-values/reliability.svg'

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
