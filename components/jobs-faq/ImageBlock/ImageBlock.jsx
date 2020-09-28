import React, { Fragment } from 'react'
import { func, string } from 'prop-types'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles, { backgroundImagesStyles } from './ImageBlock.styles'

const OriginImageBlock = ({ className, blockName, images }) => (
  <Fragment>
    <div className={cn(className, blockName)} />
    <Global styles={backgroundImagesStyles(images, `.${blockName}`)} />
  </Fragment>
)

OriginImageBlock.propTypes = {
  className: string,
  blockName: string,
  images: func,
}

const ImageBlock = styled(OriginImageBlock)`
  ${styles.base}
`

export { ImageBlock }
export default ImageBlock
