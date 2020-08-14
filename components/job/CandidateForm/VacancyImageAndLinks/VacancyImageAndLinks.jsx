import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import styles, { faqImageStyles, vacancyImageStyles } from './VacancyImageAndLinks.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import PictureForAllResolutions from '../../../PictureForAllResolutions'
import Picture from '../../../Picture'
import Vacancy from '../Vacancy'

const VacancyImageAndLinks = ({
  l10n: { translations, language, locale },
  className,
  vacancies,
  pictureName,
  pathName,
  name,
}) => (
  <div className={className}>
    {pictureName && (
      <PictureForAllResolutions
        customResolutions={['360']}
        image={{
          namespace: 'job',
          key: `${pictureName}`,
          alt: translations.job.imgsAlt[pathName] || name,
        }}
        css={vacancyImageStyles}
      />
    )}

    <ul>
      {vacancies.map((vacancy) => (
        <Vacancy key={vacancy.name} locale={locale} vacancy={vacancy} />
      ))}
    </ul>

    {language === 'ru' && (
      <Fragment>
        <p className="faq-text font_p16-regular">
          {translations.job.faq.title}

          <a href="/ru/jobs-faq" className="font_link-list_16">
            {translations.job.faq.link}
          </a>
        </p>

        <Picture
          className="hidden_on_mobile"
          image={{ namespace: 'jobs', key: 'faq', alt: translations.job.faq.alt }}
          css={faqImageStyles}
        />
      </Fragment>
    )}
  </div>
)

export default L10nConsumer(
  MsBrowserConsumer(styled(VacancyImageAndLinks)`
    ${styles}
  `),
)
