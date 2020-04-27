import React, { Fragment } from 'react'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './LogosSheet.styles'
import LogoWithText from './LogoWithText'
import toolsForCompetence from '../../../data/dev/toolsForCompetence'

const LogosSheet = ({ className }) => (
  <Fragment>
    {toolsForCompetence.map((tool) => (
      <figure key={tool.iconName} className={cn(className, tool.iconName)}>
        <LogoWithText
          iconName={tool.iconName}
          logoCaption={tool.logoCaption}
          altText={`${tool.logoCaption} logo`}
        />
      </figure>
    ))}

    <span className={cn(className, 'express')}>Express</span>
  </Fragment>
)

export default styled(LogosSheet)`
  ${styles}
`
