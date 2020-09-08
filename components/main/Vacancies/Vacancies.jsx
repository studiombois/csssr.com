import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Vacancies.styles'

import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'
import Link from '../../ui-kit/core-design/Link'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'

import images from '../../../data/main/vacancies/images'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Vacancies = ({ className, vacancies, l10n: { translations, locale } }) => (
  <Grid as="article" className={cn('industries', className)} data-testid="Home:block.vacancies">
    <SubHeading
      className="title"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: translations.main.vacancies.title }}
    />

    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={translations.main.imgAlt.vacancies}
    />

    <ul className="list">
      {vacancies.map((vacancy) => {
        if (!vacancy.isHot) {
          return
        }

        return (
          <li key={vacancy.id} className="vacancy" data-testid={`Home:vacancy.${vacancy.pathName}`}>
            <Link
              href={{ pathname: `/${locale}/job`, query: { jobPathName: vacancy.pathName } }}
              as={`/${locale}/jobs/${vacancy.pathName}`}
              type="list"
              size="s"
              isNextLink
            >
              {vacancy.name}
            </Link>
          </li>
        )
      })}
    </ul>

    <ButtonLink
      className="link"
      href={`/${locale}/jobs`}
      kind="third"
      size="s"
      dangerouslySetInnerHTML={{ __html: translations.main.vacancies.link }}
      data-testid="Home:link.vacancies"
    />
  </Grid>
)

Vacancies.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Vacancies)`
    ${styles}
  `),
)
