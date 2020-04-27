import * as React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Workflow.styles'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import workflowImages from '../../../data/express/workflow'

import translate from '../../../utils/translate-wrapper'

const workflowSteps = [1, 2, 3, 4, 5]
const Workflow = ({ className, t }) => (
  <Wrapper className={className} id="workflow">
    <Heading
      as="h2"
      className="heading"
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: t('express:workflow.title') }}
    />

    {workflowSteps.map((stepNumber) => (
      <div className="wrapper" key={stepNumber}>
        <div className="img-wrapper">
          <PictureForAllResolutions
            className={`picture picture_${stepNumber}`}
            images={workflowImages[stepNumber]}
            fallback={workflowImages[stepNumber]['desktop.l']}
            alt={t(`express:imageAlt.workflow${stepNumber}`)}
          />
        </div>

        <Text
          className={`text text_${stepNumber}`}
          type="strong"
          size="m"
          dangerouslySetInnerHTML={{ __html: t(`express:workflow.text${stepNumber}`) }}
        />
      </div>
    ))}
  </Wrapper>
)

Workflow.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(Workflow)`
  ${styles.base}
`)
