import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import styles, { vacancyImageStyles, faqImageStyles } from './VacancyImageAndLinks.styles'
import withI18next from '../../../../utils/withI18next'
import PictureForAllResolutions from '../../../PictureForAllResolutions'
import Picture from '../../../Picture'
import Vacancy from '../Vacancy'

const VacancyImageAndLinks = ({ lng, t, locale, className, vacancies, pictureName, name }) => (
  <div className={className}>
    {pictureName && (
      <PictureForAllResolutions
        customResolutions={['360']}
        image={{ namespace: 'job', key: `${pictureName}`, alt: name }}
        css={vacancyImageStyles}
      />
    )}

    <ul>
      {vacancies.map(vacancy => (
        <Vacancy key={vacancy.name} locale={locale} vacancy={vacancy} />
      ))}
    </ul>

    {lng === 'ru' && (
      <Fragment>
        <p className="faq-text font_p16-regular">
          {t('job:faq.title')}

          <a href="/ru/jobs-faq" className="font_link-list_16">
            {t('job:faq.link')}
          </a>
        </p>

        <Picture
          className="hidden_on_mobile"
          image={{ namespace: 'jobs', key: 'faq', alt: t('job:faq.alt') }}
          css={faqImageStyles}
        />
      </Fragment>
    )}
  </div>
)

export default styled(withI18next(['job'])(VacancyImageAndLinks))`
  ${styles}
`
