import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Figures.styles'
import Picture from '../../../ui-kit/Picture'
import figures from '../../../../data/main/figures'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'



const Figures = ({ className, t, hoveredService, lng }) => (
  <aside className={cn('picture-wrapper', className)}>
    {lng === 'ru' ?
      <img
        className={cn('picture', 'picture_figures')}
        src={require('../../../../static/icons/main/figures_ru.svg').default}
        alt={t('main:imageAlt.figures')}
      />
      :
      <img
        className={cn('picture', 'picture_figures')}
        src={require('../../../../static/icons/main/figures.svg').default}
        alt={t('main:imageAlt.figures')}
    />
    }

    {(lng === 'ru' ? figures.figures_ru : figures.figures_en).map(({ name, images, fallback, lng }) => (
      <Picture
        key={name}
        className={cn('picture', `picture_${name}`, `picture_${name}_${lng}` , {
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
