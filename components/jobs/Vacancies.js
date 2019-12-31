import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import Link from 'next/link'
import translate from '../../utils/translate-wrapper'
import Picture from '../Picture'
import PictureForAllResolutions from '../PictureForAllResolutions'
import getGridValueForMs from '../../utils/style/getGridValueForMs'

const picture = css.resolve`
  picture {
    grid-column: 8 / span 2;
    margin-top: 5.5rem;
  }

  :global(.ie11) picture {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
  }

  :global(.ie11) picture:nth-child(3) {
    -ms-grid-row: 3;
  }

  :global(.ie11) picture:nth-child(6) {
    -ms-grid-row: 6;
  }

  :global(.ie11) picture:nth-child(9) {
    -ms-grid-row: 9;
  }

  picture:first-of-type {
    margin-top: 6rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 3.5rem;
    }

    picture:first-of-type {
      margin-top: 6.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      position: relative;
      grid-column: 1 / span 3;
      margin-top: 3.5625rem;
    }

    picture:first-of-type {
      margin-top: 3.5625rem;
    }
  }
`

const pictureFaq = css.resolve`
  picture {
    grid-column: 8 / span 5;
    grid-row: 13;
    margin-top: 3.5rem;
  }

  :global(.ie11) picture {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 13;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 33%;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    img {
      object-position: calc(100% + 6.5rem);
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    img {
      width: 125%;
      max-width: none;
      height: auto;
      object-position: unset;
    }
  }

  @media (max-width: 767px) {
    picture {
      position: relative;
      grid-column: 1 / span 6;
      margin-top: 1.5rem;
      height: 100%;
      max-height: 8.75rem;
    }

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 40%;
    }
  }
`

const pictureHunter = css.resolve`
  picture {
    grid-column: 8 / span 1;
    grid-row: 14;
    margin-top: 10.75rem;
  }

  :global(.ie11) picture {
    display: block;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(1)};
    -ms-grid-row: 14;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 11.375rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      position: relative;
      margin-top: 4.8125rem;
      grid-column: 1 / span 1;
    }

    img {
      width: 3rem;
    }
  }
`

const footer = css.resolve`
  footer {
    margin-top: 12.5rem;
    grid-row: 15;
    -ms-grid-row: 15;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    footer {
      margin-top: 13.6875rem;
    }
  }

  @media (max-width: 767px) {
    footer {
      position: relative;
      margin-top: 6rem;
    }
  }
`

class Vacancies extends PureComponent {
  articleRef = React.createRef()

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  // Выполняем handleScroll при переходе на мобильное разрешение
  // что бы спрятать header-background за картинку
  handleMediaMatch = ({ matches }) => matches && !!this.articleRef.current && this.handleScroll()

  // При скролле изменяем z-index header-background что бы он был, когда мы
  // скролим описание вакансии и что бы его не было, когда попадаем на картикну
  handleScroll = () => {
    const articleNode = this.articleRef.current
    const headerBackgroundNode = document.getElementById('header-background')

    if (articleNode.offsetTop - window.scrollY < 0) {
      if (headerBackgroundNode.style.zIndex !== '1') {
        headerBackgroundNode.style.zIndex = '1'
        articleNode.classList.add('hide-fixed-image')
      }
    } else if (articleNode.offsetTop - window.scrollY > 0) {
      if (headerBackgroundNode.style.zIndex === '1') {
        headerBackgroundNode.style.zIndex = '-3'
        articleNode.classList.remove('hide-fixed-image')
      }
    }
  }

  render() {
    const { lng, locale, t } = this.props
    const rootUrl = `/${lng}`
    return (
      <Fragment>
        <div className="half-page-picture" />

        <div className="jobs-header-logo-container">
          <div className="logo-wrapper">
            <a href={rootUrl}>
              <img
                className="logo"
                src={require('../../static/icons/csssr_logo.svg')}
                alt={t('jobs:logoAlt')}
              />
            </a>
          </div>
        </div>

        <article className="grid-container" ref={this.articleRef}>
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
            className={picture.className}
            image={{ namespace: 'jobs', key: 'how', alt: t('jobs:how.alt') }}
            customResolutions={['360', '1024']}
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
            className={picture.className}
            image={{ namespace: 'jobs', key: 'who', alt: t('jobs:who.alt') }}
            customResolutions={['360', '1024']}
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
            className={picture.className}
            image={{ namespace: 'jobs', key: 'distance', alt: t('jobs:about.alt') }}
            customResolutions={['360', '1024']}
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
              <Picture
                className={pictureFaq.className}
                image={{ namespace: 'jobs', key: 'faq', alt: t('jobs:faq.alt') }}
              />
              <p className="faq-text font_p16-regular">
                {t('jobs:faq.title')}

                <a href="/ru/jobs-faq" className="font_link-list_16">
                  {t('jobs:faq.link')}
                </a>
              </p>
            </Fragment>
          )}

          <Picture
            className={pictureHunter.className}
            image={{ namespace: 'jobs', key: 'jobs-hunter', alt: t('jobs:hunter.alt') }}
          />
          <p className="hunter-text font_p16-regular">
            {t('jobs:hunter.description')}&nbsp;
            <a
              href={t('jobs:hunter.firstLink')}
              target="_blank"
              rel="noopener"
              className="font_link-list_16"
            >
              {t('jobs:hunter.firstLinkText')}
            </a>{' '}
            <span className="hunter-text-inner">
              {t('jobs:hunter.and')}{' '}
              <a
                href={t('jobs:hunter.secondLink')}
                target="_blank"
                rel="noopener"
                className="font_link-list_16"
              >
                {t('jobs:hunter.secondLinkText')}
              </a>
            </span>
            .
          </p>
        </article>
        <style jsx>{`
          article {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            padding-top: 13.5rem;
            width: 1792px;
          }

          header,
          h2,
          p {
            grid-column: 8 / span 5;
          }

          h1 {
            width: 100%;
          }

          h1 span {
            padding-top: 1rem;
            display: block;
          }

          h2 {
            margin-top: 1.5625rem;
          }

          h2 + p {
            margin-top: 1rem;
          }

          p + p {
            margin-top: 1rem;
          }

          ul {
            margin-top: 2rem;
            grid-column: 8 / span 5;
          }

          li {
            margin-bottom: 1rem;
          }

          .half-page-picture {
            position: fixed;
            z-index: 10000;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: calc(50vw - 1rem);
            background-image: url('${require('../../static/images/jobs/1920/cover@1x.jpg')}');
            background-position: 50%;
            background-size: auto 100%;
            overflow: hidden;
          }

          .jobs-header-logo-container {
            position: fixed;
            left: 50%;
            z-index: 10001;
            padding-top: 1.25rem;
            transform: translateX(-50%);
            width: 1792px;
            pointer-events: none;
          }

          .logo-wrapper {
            position: relative;
            width: 17rem;
            height: 1.5rem;
            text-align: center;
            pointer-events: auto;
          }

          .logo-wrapper img {
            height: 100%;
          }

          .logo-wrapper a {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
          }

          .hunter-text {
            margin-top: 10.75rem;
            grid-column: 9 / span 3;
            grid-row: 14;
          }

          .faq-text {
            margin-top: 6.5rem;
            grid-column: 8 / span 2;
            grid-row: 13;
            font-weight: 900;
          }

          .faq-text a {
            margin-top: 0.5rem;
            text-decoration: underline;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: normal;
          }

          .hunter-text-inner {
            white-space: nowrap;
          }

          :global(#main) {
            position: relative;
          }

          .font_link-list_16 {
            display: inline-block;
            text-decoration: none;
          }

          .hot-vacancy {
            position: relative;
          }

          .hot-vacancy::before {
            content: '🔥';
            position: absolute;
            top: 0.125rem;
            left: -2rem;
            display: inline-block;
            text-decoration: none;
          }

          @media (min-width: 1920px) {
            .font_subhead-regular {
              max-width: 37.5rem;
            }
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 2),
          only screen and (min-resolution: 192dpi),
          only screen and (min-resolution: 2dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/1920/cover@2x.jpg')}');
            }
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 3),
          only screen and (min-resolution: 288dpi),
          only screen and (min-resolution: 3dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/1920/cover@3x.jpg')}');
            }
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            article,
            .jobs-header-logo-container {
              width: 1328px;
            }

            .logo-wrapper {
              width: 13rem;
            }

            .half-page-picture {
              width: calc(50vw - 0.5rem);
            }

            .hunter-text {
              grid-column: 9 / span 4;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            article,
            .jobs-header-logo-container {
              width: 1232px;
            }

            .logo-wrapper {
              width: 12rem;
            }

            .half-page-picture {
              width: calc(50vw - 0.5rem);
            }

            .hunter-text {
              grid-column: 9 / span 4;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            article {
              padding-top: 9.875rem;
            }

            h1 {
              font-size: 2.5rem;
              line-height: 3.5rem;
            }

            h1 span {
              padding-top: 2rem;
            }

            ul {
              margin-top: 1.625rem;
            }

            h2 {
              margin-top: 1.4375rem;
              padding-bottom: 0;
            }

            h2 + p,
            p + p {
              padding-bottom: 0rem;
              font-size: 0.875rem;
              line-height: 1.5rem;
            }

            h2 + p {
              margin-top: 0.5625rem;
            }

            p + p {
              margin-top: 0.5rem;
            }

            article,
            .jobs-header-logo-container {
              width: 944px;
            }

            .font_link-list_24 {
              margin-top: 0rem;
              padding-bottom: 0rem;
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .hot-vacancy::before {
              top: 0;
              left: -1.5rem;
            }

            .jobs-header-logo-container {
              padding-top: 1.5625rem;
            }

            .logo-wrapper {
              width: 9rem;
              height: 1rem;
            }

            .faq-text,
            .hunter-text {
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .faq-text {
              grid-column: 8 / span 3;
            }

            .hunter-text {
              grid-column: 9 / span 5;
              margin-top: 11.8125rem;
            }

            .font_link-list_16 {
              font-size: 1em;
              line-height: 1.5rem;
            }

            .font_link-list_16::after {
              bottom: 0.625rem;
              right: -0.375rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1023px) {
            article,
            .jobs-header-logo-container {
              width: 59rem;
            }

            .half-page-picture {
              width: calc(50vw - 0.5rem);
              background-image: url('${require('../../static/images/jobs/1024/cover@1x.jpg')}');
            }
          }

          @media
          screen and (min-width: 768px) and (max-width: 1023px),
          only screen and (-webkit-min-device-pixel-ratio: 2),
          only screen and (min-resolution: 192dpi),
          only screen and (min-resolution: 2dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/1024/cover@2x.jpg')}');
            }
          }

          @media
          screen and (min-width: 768px) and (max-width: 1023px),
          only screen and (-webkit-min-device-pixel-ratio: 3),
          only screen and (min-resolution: 288dpi),
          only screen and (min-resolution: 3dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/1024/cover@3x.jpg')}');
            }
          }

          @media (max-width: 767px) {
            article {
              position: relative;
              margin-top: 15.5rem;
              padding-top: 5.5rem;
              width: 20.5rem;
            }

            article::before {
              content: '';
              position: absolute;
              z-index: 0;
              top: 0;
              left: -1rem;
              display: block;
              width: 100vw;
              height: 100%;
              background-color: white;
            }

            article::after {
              position: fixed;
              left: 0;
              right: 0;
              z-index: -2;
              bottom: 0;
              content: '';
              display: block;
              height: 80vh;
              background-color: white;
            }

            article.hide-fixed-image::after {
              z-index: -1;
            }

            h1 span {
              padding-top: 2.375rem;
              display: block;
            }

            header,
            h2,
            p,
            ul {
              position: relative;
              grid-column: 1 / span 6;
            }

            header {
              position: relative;
            }

            h2 {
              margin-top: 1.375rem;
              padding-bottom: 0;
            }

            h2 + p {
              margin-top: 1.0625rem;
              padding-bottom: 0;
            }

            p + p {
              margin-top: 0.5rem;
            }

            ul {
              margin-top: 1.625rem;
              padding-left: 1.5rem;
            }

            .font_p16-regular,
            .font_link-list_16 {
              margin-top: 0;
              padding-bottom: 0;
              font-size: 0.875rem;
              line-height: 1.5rem;
            }

            .font_link-list_24 {
              margin-top: 0rem;
              padding-bottom: 0rem;
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .hot-vacancy::before {
              top: 0;
              left: -1.25rem;
            }

            .faq-text  {
              margin-top: 4.5rem;
              grid-column: 1 / span 4;
            }

            .hunter-text {
              margin-top: 4.8125rem;
              grid-column: 2 / span 5;
            }

            .jobs-header-logo-container {
              display: none;
            }

            .half-page-picture {
              z-index: -1;
              width: 100vw;
              height: 15.5rem;
              background-image: url('${require('../../static/images/jobs/360/cover@1x.jpg')}');
            }
          }

          @media
          screen and (max-width: 767px),
          only screen and (-webkit-min-device-pixel-ratio: 2),
          only screen and (min-resolution: 192dpi),
          only screen and (min-resolution: 2dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/360/cover@2x.jpg')}');
            }
          }

          @media
          screen and (max-width: 767px),
          only screen and (-webkit-min-device-pixel-ratio: 3),
          only screen and (min-resolution: 288dpi),
          only screen and (min-resolution: 3dppx) {
            .half-page-picture {
              background-image: url('${require('../../static/images/jobs/360/cover@3x.jpg')}');
            }
          }
        `}</style>

        <style jsx>{`
          :global(.ie11) article *:nth-child(1) {
            -ms-grid-row: 1;
          }

          :global(.ie11) article *:nth-child(2) {
            -ms-grid-row: 2;
          }

          :global(.ie11) article *:nth-child(4) {
            -ms-grid-row: 4;
          }

          :global(.ie11) article *:nth-child(5) {
            -ms-grid-row: 5;
          }

          :global(.ie11) article *:nth-child(7) {
            -ms-grid-row: 7;
          }

          :global(.ie11) article *:nth-child(8) {
            -ms-grid-row: 8;
          }

          :global(.ie11) article *:nth-child(10) {
            -ms-grid-row: 10;
          }

          :global(.ie11) article *:nth-child(11) {
            -ms-grid-row: 11;
          }

          :global(.ie11) article *:nth-child(12) {
            -ms-grid-row: 12;
          }

          :global(.ie11) header,
          :global(.ie11) h2,
          :global(.ie11) p {
            -ms-grid-column: ${getGridValueForMs(8)};
            -ms-grid-column-span: ${getGridValueForMs(5)};
          }

          :global(.ie11) .hot-vacancy::before {
            content: '🔥';
            color: orange;
            height: 28px;
            overflow: hidden;
          }

          :global(.ie11) ul {
            -ms-grid-column: ${getGridValueForMs(8)};
            -ms-grid-column-span: ${getGridValueForMs(5)};
          }

          :global(.ie11) .hunter-text {
            -ms-grid-column: ${getGridValueForMs(9)};
            -ms-grid-column-span: ${getGridValueForMs(3)};
            -ms-grid-row: 14;
          }

          :global(.ie11) .faq-text {
            -ms-grid-column: ${getGridValueForMs(8)};
            -ms-grid-column-span: ${getGridValueForMs(2)};
            -ms-grid-row: 13;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            :global(.ie11) .hunter-text {
              -ms-grid-column: ${getGridValueForMs(9)};
              -ms-grid-column-span: ${getGridValueForMs(4)};
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            :global(.ie11) .hunter-text {
              -ms-grid-column: ${getGridValueForMs(9)};
              -ms-grid-column-span: ${getGridValueForMs(4)};
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            :global(.ie11) .faq-text {
              -ms-grid-column: ${getGridValueForMs(8)};
              -ms-grid-column-span: ${getGridValueForMs(3)};
            }

            :global(.ie11) .hunter-text {
              -ms-grid-column: ${getGridValueForMs(9)};
              -ms-grid-column-span: ${getGridValueForMs(5)};
            }
          }
        `}</style>
        {footer.styles}
        {picture.styles}
        {pictureHunter.styles}
        {pictureFaq.styles}
      </Fragment>
    )
  }
}

export default translate()(Vacancies)
