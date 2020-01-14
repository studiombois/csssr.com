import React from 'react'
import cn from 'classnames'
import { arrayOf, oneOf, string, number } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Project.styles'
import Slider from '../../Slider'

const Project = ({ className, type, id, slides, title, href }) => (
  <li
    className={cn(className, {
      'smaller-margin-top': title,
    })}
  >
    {title && <h3 className="font_h3-regular" dangerouslySetInnerHTML={{ __html: title }} />}
    {type === 'slider' && <Slider id={id} slides={slides} href={href} />}
  </li>
)

Project.propTypes = {
  id: string,
  slides: arrayOf(number),
  title: string,
  type: oneOf(['slider', 'video']),
  href: string,
  className: string,
}

export default styled(Project)`
  ${styles}
`
