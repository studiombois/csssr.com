import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import styles, { faqImageStyles, vacancyImageStyles } from './VacancyImageAndLinks.styles'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import Vacancy from '../Vacancy'

import { faqSmallImages } from '../../../../data/jobs/images'
import images from '../../../../data/job/images'

const VacancyImageAndLinks = ({
  l10n: { translations, language, locale },
  className,
  vacancies,
  pictureName,
  pathName,
  name,
}) => {
  return (
    <div className={className}>
      {pictureName && (
        <PictureSmart
          // customResolutions={['360']}
          requireImages={images[pictureName]}
          alt={translations.job.imgsAlt[pathName] || name}
          css={vacancyImageStyles}
        />
      )}

      <ul>
        {vacancies.map((vacancy, index) => (
          <Vacancy
            key={vacancy.name}
            locale={locale}
            vacancy={vacancy}
            testid={`Jobs:list.item-${index}`}
          />
        ))}
      </ul>

      {language === 'ru' && (
        <Fragment>
          <p className="faq-text font_p16-regular">
            {translations.job.faq.title}

            <a href="/ru/jobs-faq" className="font_link-list_16" data-testid="Jobs:link.faq">
              {translations.job.faq.link}
            </a>
          </p>

          <PictureSmart
            className="hidden_on_mobile"
            requireImages={faqSmallImages}
            alt={translations.job.faq.alt}
            css={faqImageStyles}
            testid="Jobs:img.faq"
          />
        </Fragment>
      )}
    </div>
  )
}

export default L10nConsumer(
  MsBrowserConsumer(styled(VacancyImageAndLinks)`
    ${styles}
  `),
)
