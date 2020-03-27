import * as React from 'react'
import styled from '@emotion/styled'
import styles, { backgroundImagesStyles } from './Footer.styles'
import cn from 'classnames'
import { string, bool } from 'prop-types'
import { Global } from '@emotion/core'
import Grid from '../../ui-kit/core-design/Grid'
import Picture from '../../ui-kit/Picture'

import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import superman from '../../../static/images/jobs-faq/superman.png?responsive'
import superman_webp from '../../../static/images/jobs-faq/superman.png?responsive_and_webp'

const OriginFooter = ({ className }) => (
  <div className={cn(className, 'image-wrapper')}>
    <Grid>
      <Picture
        className="image"
        images={{ png: superman, webp: superman_webp }}
        fallback={superman}
        alt="Cупермен фронтендер"
      />
    </Grid>

    <Global styles={backgroundImagesStyles()} />
  </div>
)

OriginFooter.propTypes = {
  className: string,
  isIe11: bool,
}

const Footer = MsBrowserConsumer(styled(OriginFooter)`
  ${styles.base}
  ${styles.ie11}
`)

export { Footer }
export default Footer
