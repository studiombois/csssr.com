import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import Link from 'next/link'
import Footer from './Footer'
import Picture from '../Picture'
import PictureForAllResolutions from '../PictureForAllResolutions'

const picture = css.resolve`
  picture {
    grid-column: 8 / span 2;
    margin-top: 5.5rem;
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

const pictureHunter = css.resolve`
  picture {
    grid-column: 8 / span 1;
    grid-row: 13;
    margin-top: 13.0625rem;
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 13.5625rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      position: relative;
      margin-top: 5.0625rem;
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
    grid-row: 14;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    footer {
      margin-top: 13.6875rem;
    }
  }

  @media (max-width: 767px) {
    footer {
      position: relative;
      margin-top: 5.5rem;
    }
  }
`

export default class Vacancies extends PureComponent {
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
  handleMediaMatch = ({ matches }) =>
    matches && !!this.articleRef.current && this.handleScroll()

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
    return (
      <Fragment>
        <div className='half-page-picture' />

        <div className='jobs-header-logo-container'>
          <div className='logo-wrapper'>
            <span>
              <img
                className='logo'
                src='/static/icons/csssr_logo.svg'
                alt='CSSSR jobs logo'
              />

              <sup className='font_roboto-slab-light'>
                .jobs
              </sup>
            </span>
          </div>
        </div>

        <article
          className='grid-container'
          ref={this.articleRef}
        >
          <header>
            <h1 className='font_h1-regular'>
              Работа в&nbsp;CSSSR
              <span className='font_subhead-regular'>
                CSSSR&nbsp;&mdash; островок здравого смысла в&nbsp;корпоративном океане зла.
              </span>
            </h1>
          </header>

          {this.props.vacancies.length > 0 &&
            <ul>
              {this.props.vacancies.map(vacancy =>
                <li key={vacancy.id}>
                  <Link
                    prefetch
                    href={{ pathname: '/ru/job', query: { jobPathName: vacancy.pathName } }}
                    as={`/ru/jobs/${vacancy.pathName}`}
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
              )}
            </ul>
          }

          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'jobs', key: 'how', alt: 'Работа мечты CSSSR' }}
            customResolutions={['360', '1024']}
          />

          <h2 className='font_h2-regular'>
            <span style={{ color: '#85d4b2' }}>
              Как
            </span>
            {' '}
            мы&nbsp;нанимаем?
          </h2>
          <p className='font_p16-regular'>
            Процесс найма в&nbsp;CSSSR состоит из&nbsp;нескольких этапов. Как правило, необходимо выполнить тестовое задание, пройти интервью c&nbsp;командой рекрутеров, поразить интервьюера на&nbsp;техническом собеседовании и&nbsp;подружиться с&nbsp;потенциальным начальником. Процесс занимает от&nbsp;одной до&nbsp;двух недель, но, как показывает практика, результат стоит того.
          </p>

          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'jobs', key: 'who', alt: 'Работа мечты CSSSR' }}
            customResolutions={['360', '1024']}
          />

          <h2 className='font_h2-regular'>
            <span style={{ color: '#fe535b' }}>
              Кого
            </span>
            {' '}
            мы&nbsp;нанимаем?
          </h2>
          <p className='font_p16-regular'>
            В&nbsp;CSSSR работают необыкновенные люди&nbsp;&mdash; нас всех объединяет стремление создавать безупречное. В&nbsp;компанию попадают только самые талантливые, амбициозные, стойкие, напористые, умные люди с&nbsp;хорошим чувством юмора. Мы&nbsp;не&nbsp;скрываем, что даём зеленый свет прежде всего тем, кто хочет работать именно с&nbsp;нами, тем, кому нравится наша концепция, кто проникся нашими ценностями.
          </p>

          <PictureForAllResolutions
            className={picture.className}
            image={{ namespace: 'jobs', key: 'distance', alt: 'Работа мечты CSSSR' }}
            customResolutions={['360', '1024']}
          />

          <h2 className='font_h2-regular'>
            О&nbsp;дистанционной работе
          </h2>
          <p className='font_p16-regular'>
            Быть успешной компанией в&nbsp;21&nbsp;веке&nbsp;&mdash; не&nbsp;значит сидеть друг напротив друга в&nbsp;офисе. Большинство сотрудников CSSSR работают там, где считают нужным: дома, в&nbsp;кафе, в&nbsp;пробке, в&nbsp;аэропорту, на&nbsp;берегу Индийского океана, за&nbsp;пределами Солнечной системы (если там есть интернет).
          </p>
          <p className='font_p16-regular'>
            Однако не&nbsp;стоит думать, что отсутствие необходимости ходить в&nbsp;офис предполагает меньше ответственности и&nbsp;больше свободного времени. Обязательными условиями удалённой работы являются способность самостоятельно организовывать свой рабочий процесс и&nbsp;возможность без всяких «но» трудиться полный рабочий день.
          </p>

          <Picture className={pictureHunter.className} image={{ namespace: 'jobs', key: 'jobs-hunter', alt: 'jobs-hunter' }}/>

          <p className='hunter-text font_p16-regular'>
            Также наши вакансии можно найти на&nbsp;<a href='https://moikrug.ru/companies/csssr' target='_blank' rel='noopener' className='font_link-list_16'>Моём Круге</a> и&nbsp;на&nbsp;<a href='https://spb.hh.ru/employer/1230690' target='_blank' rel='noopener' className='font_link-list_16'>Head Hunter</a>.
          </p>

          <Footer className={footer.className}/>
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
            background-image: url(/static/images/jobs/1920/cover@1x.jpg);
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
          }

          .logo-wrapper img {
            height: 100%;
          }

          .logo-wrapper span {
            position: relative;
            display: inline-block;
            height: 100%;
          }

          .logo-wrapper sup {
            position: absolute;
            top: -4px;
            left: calc(100% + 7px);
            margin: 0;
            padding: 0;
            height: 100%;
            line-height: 1;
          }

          .hunter-text {
            margin-top: 13rem;
            grid-column: 9 / span 3;
            grid-row: 13;
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

          @media
          only screen and (-webkit-min-device-pixel-ratio: 2),
          only screen and (min-resolution: 192dpi),
          only screen and (min-resolution: 2dppx) {
            .half-page-picture {
              background-image: url(/static/images/jobs/1920/cover@2x.jpg);
            }
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 3),
          only screen and (min-resolution: 288dpi),
          only screen and (min-resolution: 3dppx) {
            .half-page-picture {
              background-image: url(/static/images/jobs/1920/cover@3x.jpg);
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
              padding-top: 1.5rem;
            }

            .logo-wrapper {
              width: 9rem;
              height: 1rem;
            }

            .logo-wrapper sup {
              top: -4px;
              left: calc(100% + 2px);
              font-size: 0.625rem;
            }

            .hunter-text {
              grid-column: 9 / span 5;
              margin-top: 14rem;
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .font_link-list_16 {
              font-size: 1em;
              line-height: 1.5rem;
            }

            .font_link-list_16::after {
              bottom: 0.625rem;
              right: -0.375rem;
            }

            @media (max-width: 1023px) {
              article,
              .jobs-header-logo-container {
                width: 59rem;
              }

              .half-page-picture {
                width: calc(50vw - 0.5rem);
                background-image: url(/static/images/jobs/1024/cover@1x.jpg);
              }

              @media
              only screen and (-webkit-min-device-pixel-ratio: 2),
              only screen and (min-resolution: 192dpi),
              only screen and (min-resolution: 2dppx) {
                .half-page-picture {
                  background-image: url(/static/images/jobs/1024/cover@2x.jpg);
                }
              }

              @media
              only screen and (-webkit-min-device-pixel-ratio: 3),
              only screen and (min-resolution: 288dpi),
              only screen and (min-resolution: 3dppx) {
                .half-page-picture {
                  background-image: url(/static/images/jobs/1024/cover@3x.jpg);
                }
              }
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

            .hunter-text {
              margin-top: 5rem;
              grid-column: 2 / span 5;
            }

            .jobs-header-logo-container {
              display: none;
            }

            .half-page-picture {
              z-index: -1;
              width: 100vw;
              height: 15.5rem;
              background-image: url(/static/images/jobs/360/cover@1x.jpg);
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 2),
            only screen and (min-resolution: 192dpi),
            only screen and (min-resolution: 2dppx) {
              .half-page-picture {
                background-image: url(/static/images/jobs/360/cover@2x.jpg);
              }
            }

            @media
            only screen and (-webkit-min-device-pixel-ratio: 3),
            only screen and (min-resolution: 288dpi),
            only screen and (min-resolution: 3dppx) {
              .half-page-picture {
                background-image: url(/static/images/jobs/360/cover@3x.jpg);
              }
            }
          }
        `}</style>
        {footer.styles}
        {picture.styles}
        {pictureHunter.styles}
      </Fragment>
    )
  }
}
