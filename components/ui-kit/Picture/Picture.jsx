import React from 'react'
import styled from '@emotion/styled'
import { object, string } from 'prop-types'
import styles from './Picture.styles'
import PictureForAllResolutions from '../PictureForAllResolutions'

const Picture = ({ images, ...props }) => {
  return (
    <PictureForAllResolutions
      images={{
        'desktop.all': images,
        'desktop.m': images,
        'desktop.s': images,
        'tablet.all': images,
        'mobile.all': images,
      }}
      {...props}
    />
  )
}

Picture.propTypes = {
  className: string,
  testId: string,
  images: object.isRequired,
  fallback: object.isRequired,
  alt: string.isRequired,
  theme: object,
}

export default styled(Picture)`
  ${styles.base}
`
