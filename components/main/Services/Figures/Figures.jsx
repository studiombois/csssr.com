import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Figures.styles'
import Picture from '../../../ui-kit/Picture'
import figures from '../../../../data/main/figures'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const Figures = ({ className, t, hoveredService }) => {
  return (
    <aside className={cn('picture-wrapper', className)}>
      <img
        className={cn('picture', 'picture_figures')}
        src={require('../../../../static/icons/main/figures.svg').default}
        alt={t('main:imageAlt.figures')}
      />

      {figures.map(({ name, images, fallback }) => (
        <Picture
          key={name}
          className={cn('picture', `picture_${name}`, {
            picture_is_visible: name === hoveredService,
          })}
          images={images}
          fallback={fallback}
          alt={t(`main:imageAlt.${name}`)}
        />
      ))}
    </aside>
  )
}

Figures.propTypes = {
  className: string,
  t: func,
  hoveredService: string,
}

export default styled(translate()(MsBrowserConsumer(Figures)))`
  ${styles}
`
