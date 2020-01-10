import React, { Fragment } from 'react'
import { string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import styles from './TitleAndText.styles'
import formatText from '../../../../utils/formatText'

const TitleAndList = ({ className, text, title }) => (
  <Fragment>
    <h2 className={cn('font_h2-regular', className)} dangerouslySetInnerHTML={{ __html: title }} />
    <p
      className={cn('font_p16-regular', className)}
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
    />
  </Fragment>
)

TitleAndList.propTypes = {
  text: string,
  title: string,
}

export default styled(TitleAndList)`
  ${styles}
`
