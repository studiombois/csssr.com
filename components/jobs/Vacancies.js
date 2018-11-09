import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import Link from 'next/link'
import Footer from './Footer'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    grid-column: 8 / span 2;
    margin-top: 7.5625rem;
  }

  picture:first-of-type {
    margin-top: 10.5rem;
  }

  img {
    max-width: 100%;
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
`

const footer = css.resolve`
  footer {
    margin-top: 12.5rem;
    grid-row: 14;
  }
`

const Vacancies = props =>
  <Fragment>
    <div className='half-page-picture'>
      <span>Работай где хочешь!</span>
    </div>

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

    <article className='grid-container'>
      <header>
        <h1 className='font_h1-regular'>
          Работа в&nbsp;CSSSR
          <span className='font_subhead-regular'>
            CSSSR&nbsp;&mdash; островок здравого смысла в&nbsp;корпоративном океане зла.
          </span>
        </h1>
      </header>

      {props.vacancies.length > 0 &&
        <ul>
          {props.vacancies.map(vacancy =>
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

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'how', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        <span style={{ color: '#0054d8' }}>
          Как
        </span>
        {' '}
        мы&nbsp;нанимаем?
      </h2>
      <p className='font_p16-regular'>
        Процесс найма в&nbsp;CSSSR состоит из&nbsp;нескольких этапов. Как правило, необходимо выполнить тестовое задание, пройти интервью c&nbsp;командой рекрутеров, поразить интервьюера на&nbsp;техническом собеседовании и&nbsp;подружиться с&nbsp;потенциальным начальником. Процесс занимает от&nbsp;одной до&nbsp;двух недель, но, как показывает практика, результат стоит того.
      </p>

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'who', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        <span style={{ color: '#f8585c' }}>
          Кого
        </span>
        {' '}
        мы&nbsp;нанимаем?
      </h2>
      <p className='font_p16-regular'>
        В&nbsp;CSSSR работают необыкновенные люди&nbsp;&mdash; нас всех объединяет стремление создавать безупречное. В&nbsp;команию попадают только самые талантливые, амбициозные, стойкие, напористые, умные люди с&nbsp;хорошим чувством юмора. Мы&nbsp;не&nbsp;скрываем, что даём зеленый свет прежде всего тем, кто хочет работать именно с&nbsp;нами, тем, кому нравится наша концепция, кто проникся нашими ценностями.
      </p>

      <Picture className={picture.className} image={{ namespace: 'jobs', key: 'distance', alt: 'Работа мечты CSSSR' }}/>

      <h2 className='font_h2-regular'>
        О&nbsp;дистанционной работе
      </h2>
      <p className='font_p16-regular'>
        Быть успешной компанией в&nbsp;21&nbsp;веке&nbsp;&mdash; не&nbsp;значит сидеть друг напротив друга в&nbsp;офисе. Большинство сотрудников CSSSR работают там, где считают нужным: дома, в&nbsp;кафе, в&nbsp;пробке, в&nbsp;аэропорту, на&nbsp;берегу Индийского океана, за&nbsp;пределами Солнечной системы (если там есть интернет).
      </p>
      <p className='font_p16-regular'>
        Однако не&nbsp;стоит думать, что отсутствие необходимости ходить в&nbsp;офис предполагает меньше ответственности и&nbsp;больше свободного времени. Обязательными условиями удалённой работы являются способность самостоятельно организовывать свой рабочий процесс и&nbsp;возможность без всяких &ldquo;но&rdquo; трудиться полный рабочий день.
      </p>

      <Picture className={pictureHunter.className} image={{ namespace: 'jobs', key: 'jobs-hunter', alt: 'jobs-hunter' }}/>

      <p className='hunter-text font_p16-regular'>
        Также наши вакансии можно найти на&nbsp;<a href='' className='font_link-list_16'>Моём Круге</a> и&nbsp;на&nbsp;<a href='' className='font_link-list_16'>Head Hunter</a>.
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

      header {
        margin-bottom: 0.5rem;
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
        margin-top: 2.5rem;
      }

      h2 + p {
        margin-top: 2rem;
      }

      p + p {
        margin-top: 1rem;
      }

      ul {
        margin-top: 1.0625rem;
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
        width: 50vw;
        background-image: url(/static/images/jobs/cover@1x.jpg);
        background-position: 50%;
        background-size: auto 100%;
        overflow: hidden;
      }

      :global(html.webp) .half-page-picture {
        background-image: url(/static/images/jobs/cover@1x.webp);
      }

      .half-page-picture span {
        margin-bottom: 4.8vh;
        height: 8.8vh;
        width: 100%;
        text-align: center;
        font-size: 3.6vh;
        font-family: Roboto Slab;
        line-height: 8.8vh;
        border-top: 1px solid #979797;
        border-bottom: 1px solid #979797;
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
        margin-top: 14.5rem;
        grid-column: 9 / span 4;
        grid-row: 13;
      }

      :global(#main) {
        position: relative;
      }

      .font_link-list_16 {
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
      }

      @media
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        .half-page-picture {
          background-image: url(/static/images/jobs/cover@2x.jpg);
        }

        :global(html.webp) .half-page-picture {
          background-image: url(/static/images/jobs/cover@2x.webp);
        }
      }

      @media
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 2dppx) {
        .half-page-picture {
          background-image: url(/static/images/jobs/cover@3x.jpg);
        }

        :global(html.webp) .half-page-picture {
          background-image: url(/static/images/jobs/cover@3x.webp);
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
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article,
        .jobs-header-logo-container {
          width: 1232px;
        }

        .logo-wrapper {
          width: 12rem;
        }
      }

      @media (min-width: 368px) and (max-width: 1279px) {
        article,
        .jobs-header-logo-container {
          width: 944px;
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
          font-size: 0.625rem
        }

        @media (max-width: 1023px) {
          article,
          .jobs-header-logo-container {
            width: 59rem;
          }

          .half-page-picture span { // Убрать после начала верстки мобильных вариантов страницы
            font-size: 1.8vh;
          }
        }
      }
    `}</style>
    {footer.styles}
    {picture.styles}
    {pictureHunter.styles}
  </Fragment>

export default Vacancies
