import React from 'react'
import styled from '@emotion/styled'
import styles from './Feature2.styles'
import Grid from '../../ui-kit/core-design/Grid'
import PictureForAllResolutions from '../../PictureForAllResolutions'

const Feature2 = ({ className, title, text, image }) => (
  <Grid as="section" className={className}>
    <h2 className="font_subhead-slab" dangerouslySetInnerHTML={{ __html: title }} />
    <p className="font_p16-regular" dangerouslySetInnerHTML={{ __html: text }} />

    <PictureForAllResolutions image={image} />
  </Grid>
)

export default styled(Feature2)`
  ${styles}
`
