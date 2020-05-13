import cleanCode from './cleanCode'
import reliability from './reliability'
import accessibility from './accessibility'
import ux from './ux'
import webSecurity from './webSecurity'

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
    imgAlt: 'coreValues:imgAlt.cleanCode',
    title: 'coreValues:detailValue.cleanCode.title',
    subTitle: 'coreValues:detailValue.cleanCode.subTitle',
    description: [
      {
        icon: Code,
        text: 'coreValues:detailValue.cleanCode.text',
      },
      {
        icon: Line_code,
        text: 'coreValues:detailValue.cleanCode.text_2',
      },
    ],
  },
  {
    id: 'reliability',
    images: reliability,
    imgAlt: 'coreValues:imgAlt.reliability',
    title: 'coreValues:detailValue.reliability.title',
    subTitle: 'coreValues:detailValue.reliability.subTitle',
    description: [
      {
        icon: Reliability,
        text: 'coreValues:detailValue.reliability.text',
      },
    ],
  },
  {
    id: 'accessibility',
    images: accessibility,
    imgAlt: 'coreValues:imgAlt.accessibility',
    title: 'coreValues:detailValue.accessibility.title',
    subTitle: 'coreValues:detailValue.accessibility.subTitle',
    description: [
      {
        icon: Accessibility_1,
        text: 'coreValues:detailValue.accessibility.text',
      },
      {
        icon: Accessibility_2,
        text: 'coreValues:detailValue.accessibility.text_2',
      },
    ],
  },
  {
    id: 'ux',
    images: ux,
    imgAlt: 'coreValues:imgAlt.ux',
    title: 'coreValues:detailValue.ux.title',
    subTitle: 'coreValues:detailValue.ux.subTitle',
    description: [
      {
        icon: Perfectionism,
        text: 'coreValues:detailValue.ux.text',
      },
    ],
  },
  {
    id: 'security',
    images: webSecurity,
    imgAlt: 'coreValues:imgAlt.webSecurity',
    title: 'coreValues:detailValue.webSecurity.title',
    subTitle: 'coreValues:detailValue.webSecurity.subTitle',
    description: [
      {
        icon: Keys,
        text: 'coreValues:detailValue.webSecurity.text',
      },
    ],
  },
]
