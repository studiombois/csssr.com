import React, { Fragment } from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './LogoWithText.styles'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const LogoWithText = ({ className, iconName, altText, logoCaption }) => (
  <Fragment>
    <img
      className={className}
      src={require(`../../../../static/icons/dev/${iconName}.svg`).default}
      alt={altText}
    />
    <figcaption>{logoCaption}</figcaption>
  </Fragment>
)

LogoWithText.propTypes = {
  iconName: string,
  altText: string,
  logoCaption: string,
}

export default MsBrowserConsumer(styled(LogoWithText)`
  ${styles}
`)
