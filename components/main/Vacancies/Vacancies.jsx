import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Vacancies.styles'

import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import Grid from '../../ui-kit/core-design/Grid'
import Link from '../../ui-kit/core-design/Link'

import images from '../../../data/main/vacancies/images'

import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Vacancies = ({ className, vacancies, t, locale }) => (
  <Grid as="article" className={cn('industries', className)}>
    <SubHeading
      className="title"
      as="p"
      type="slab"
      dangerouslySetInnerHTML={{ __html: t('main:vacancies.title') }}
    />

    <PictureForAllResolutions
      className="picture"
      images={images}
      fallback={images['desktop.l'].png}
      alt={t('main:imageAlt.vacancies')}
    />

    <ul className="list">
      {vacancies.map(vacancy => {
        if (!vacancy.isHot) {
          return
        }

        return (
          <li key={vacancy.id} className="vacancy">
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

    <Link
      className="link"
      href={`/${locale}/jobs`}
      type="list"
      size="s"
      dangerouslySetInnerHTML={{ __html: t(`main:vacancies.link`) }}
    />
  </Grid>
)

Vacancies.propTypes = {
  className: string,
  t: func,
}

export default translate()(
  MsBrowserConsumer(styled(Vacancies)`
    ${styles}
  `),
)
