import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import styles, { faqImageStyles, vacancyImageStyles } from './VacancyImageAndLinks.styles'
import translate from '../../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
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
      {vacancies.map((vacancy) => (
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

export default translate(
  MsBrowserConsumer(styled(VacancyImageAndLinks)`
    ${styles}
  `),
)
