import React from 'react'
import { func, string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Figures.styles'
import Picture from '../../../ui-kit/Picture'
import figures from '../../../../data/main/figures'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const figuresByLng = {
  en: require('../../../../static/icons/main/figures_en.svg').default,
  ru: require('../../../../static/icons/main/figures_ru.svg').default,
}

const figureByLng = {
  en: figures.figures_en,
  ru: figures.figures_ru,
}

const Figures = ({ className, t, hoveredService, lng }) => (
  <aside className={cn('picture-wrapper', className)}>
    <img
      className={cn('picture', 'picture_figures')}
      src={figuresByLng[lng]}
      alt={t('main:imageAlt.figures')}
    />

    {figureByLng[lng].map(({ name, images, fallback, lng }) => (
      <Picture
        key={name}
        className={cn('picture', `picture_${name}`, `picture_${name}_${lng}`, {
          picture_is_visible: name === hoveredService,
        })}
        images={images}
        fallback={fallback}
        alt={t(`main:imageAlt.${name}`)}
      />
    ))}
  </aside>
)

Figures.propTypes = {
  className: string,
  t: func,
  hoveredService: string,
}

export default translate(
  MsBrowserConsumer(styled(Figures)`
    ${styles}
  `),
)
