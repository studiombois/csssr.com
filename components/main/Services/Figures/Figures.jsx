import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styles from './Figures.styles'

import figures from '../../../../data/main/figures'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'

const figuresByLanguage = {
  en: require('../../../../static/icons/main/figures_en.svg').default,
  ru: require('../../../../static/icons/main/figures_ru.svg').default,
}

const figureByLanguage = {
  en: figures.figures_en,
  ru: figures.figures_ru,
}

const Figures = ({ className, hoveredService, l10n: { translations, language } }) => (
  <aside className={cn('picture-wrapper', className)}>
    <img
      className={cn('picture', 'picture_figures')}
      src={figuresByLanguage[language]}
      alt={translations.main.imgAlt.figures}
      loading="lazy"
    />

    {figureByLanguage[language].map(({ name, images, language }) => (
      <PictureSmart
        key={name}
        className={cn('picture', `picture_${name}`, `picture_${name}_${language}`, {
          picture_is_visible: name === hoveredService,
        })}
        requireImages={images}
        alt={translations.main.imgAlt[name]}
        testId={`Home:img.${name}`}
        loading="lazy"
      />
    ))}
  </aside>
)

Figures.propTypes = {
  className: string,
  hoveredService: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Figures)`
    ${styles}
  `),
)
