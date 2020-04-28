import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import styles, { pictureHunterStyles } from './Vacancies.styles'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import PictureOld from '../../Picture'
import Grid from '../../ui-kit/core-design/Grid'
import PictureForAllResolutions from '../../ui-kit/PictureForAllResolutions'

import { howImages, whoImages, distanceImages, faqImages  } from '../../../data/jobs/images'

class Vacancies extends PureComponent {
  render() {
    const { className, lng, locale, t } = this.props
    return (
      <Fragment>
        <Global
          styles={
            lng === 'en' &&
            css`
              @media (max-width: 767px) {
                #main {
                  padding-top: 0;
                }
              }
            `
          }
        />
        <Grid as="article" className={className}>
          <header>
            <h1 className="font_h1-regular">
              <div dangerouslySetInnerHTML={{ __html: t('jobs:title') }} />
              <span
                className="font_subhead-regular"
                dangerouslySetInnerHTML={{ __html: t('jobs:subTitle') }}
              />
            </h1>
          </header>

          {this.props.vacancies.length > 0 && (
            <ul>
              {this.props.vacancies.map(vacancy => (
                <li key={vacancy.id}>
                  <Link
                    href={{ pathname: `/${locale}/job`, query: { jobPathName: vacancy.pathName } }}
                    as={`/${locale}/jobs/${vacancy.pathName}`}
                  >
                    <a
                      className={cn({
                        'font_link-list_24': true,
                        'hot-vacancy': vacancy.isHot,
                      })}
                    >
                      {vacancy.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <PictureForAllResolutions
            className="picture"
            images={howImages}
            fallback={howImages['desktop.l']}
            alt={t('jobs:faq.alt')}
          />

          <h2 className="font_h2-regular">
            <span style={{ color: '#85d4b2' }}>{t('jobs:how.word')}</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: t('jobs:how.title') }} />
          </h2>
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('jobs:how.description') }}
          />

          <PictureForAllResolutions
            className="picture"
            images={whoImages}
            fallback={whoImages['desktop.l']}
            alt={t('jobs:faq.alt')}
          />

          <h2 className="font_h2-regular">
            <span style={{ color: '#fe535b' }}>{t('jobs:who.word')}</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: t('jobs:who.title') }} />
          </h2>
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('jobs:who.description') }}
          />

          <PictureForAllResolutions
            className="picture"
            images={distanceImages}
            fallback={distanceImages['desktop.l']}
            alt={t('jobs:faq.alt')}
          />

          <h2
            className="font_h2-regular"
            dangerouslySetInnerHTML={{ __html: t('jobs:about.title') }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('jobs:about.descriptionFirst') }}
          />
          <p
            className="font_p16-regular"
            dangerouslySetInnerHTML={{ __html: t('jobs:about.descriptionSecond') }}
          />

          {lng === 'ru' && (
            <Fragment>
              <PictureForAllResolutions
                className="picture-faq"
                images={faqImages}
                fallback={faqImages['desktop.l']}
                alt={t('jobs:faq.alt')}
              />
              <p className="faq-text font_p16-regular">
                {t('jobs:faq.title')}

                <a href="/ru/jobs-faq" className="font_link-list_16">
                  {t('jobs:faq.link')}
                </a>
              </p>
            </Fragment>
          )}

          <PictureOld
            css={pictureHunterStyles}
            image={{ namespace: 'jobs', key: 'jobs-hunter', alt: t('jobs:hunter.alt') }}
          />
          <p className="hunter-text font_p16-regular">
            {t('jobs:hunter.description')}&nbsp;
            <a
              href={t('jobs:hunter.firstLink')}
              target="_blank"
              rel="noopener nofollow"
              className="font_link-list_16"
            >
              {t('jobs:hunter.firstLinkText')}
            </a>{' '}
            <span className="hunter-text-inner">
              {t('jobs:hunter.and')}{' '}
              <a
                href={t('jobs:hunter.secondLink')}
                target="_blank"
                rel="noopener nofollow"
                className="font_link-list_16"
              >
                {t('jobs:hunter.secondLinkText')}
              </a>
            </span>
            .
          </p>

          <div className="half-page-picture" />
        </Grid>
      </Fragment>
    )
  }
}

export default translate(
  MsBrowserConsumer(styled(Vacancies)`
    ${styles}
  `),
)
