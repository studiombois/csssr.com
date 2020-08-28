import * as React from 'react'
import { string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './Workflow.styles'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'

import workflowImages from '../../../data/express/workflow'

import { L10nConsumer } from '../../../utils/l10nProvider'

const workflowSteps = [1, 2, 3, 4, 5]
const Workflow = ({ className, l10n: { translations } }) => (
  <Wrapper className={className} id="workflow">
    <Heading
      as="h2"
      className="heading"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: translations.express.workflow.title }}
    />

    {workflowSteps.map((stepNumber) => (
      <div className="wrapper" key={stepNumber}>
        <div className="img-wrapper">
          <PictureSmart
            className={`picture picture_${stepNumber}`}
            requireImages={workflowImages[stepNumber]}
            alt={translations.express.imgAlt[`workflow${stepNumber}`]}
          />
        </div>

        <Text
          className={`text text_${stepNumber}`}
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: translations.express.workflow[`text${stepNumber}`] }}
        />
      </div>
    ))}
  </Wrapper>
)

Workflow.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Workflow)`
  ${styles.base}
`)
