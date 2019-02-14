import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'

const pictureOfNumberOne = css.resolve`
  picture {
    grid-column: 5 / span 3;
    margin-top: 7rem;
    display: block;
    height: 664px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 504px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 456px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 3rem;
      height: 344px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 21.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 3 / span 2;
      grid-row: 2;
      margin-top: 1.5rem;
      height: 10rem;
    }
  }
`

const pictureOfNumberTwo = css.resolve`
  picture {
    grid-column: 2 / span 4;
    margin-top: 8rem;
    display: block;
    height: 728px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 544px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 528px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 5rem;
      height: 392px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 24.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 3 / span 2;
      grid-row: 4;
      margin-top: 3rem;
      height: 8.5rem;
    }
  }
`

const pictureOfNumberThee = css.resolve`
  picture {
    grid-column: 6 / span 7;
    grid-row: 4;
    z-index: -1;
    margin-top: 7rem;
    display: block;
    height: 784px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 584px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 504px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 4.5rem;
      height: 416px;
    }

    @media (max-width: 1023px) {
      picture {
        height: 26rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      grid-column: 2 / span 4;
      grid-row: 6;
      margin-top: 3rem;
      height: 10.5rem;
    }
  }
`

const WorkingProcess = ({ t }) =>
  <Fragment>
    <article className='grid-container'>
      <h2
        className='font_h1-slab'
        dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.title') }} />

      <PictureForAllResolutions
        className={pictureOfNumberOne.className}
        image={{
          namespace: 'sborka',
          key: 'one',
          alt: t('sborka:imgAlt.workingProcess.one'),
        }}
      />
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.one.title') }} />
        <p
          className='font_subhead-regular'
          dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.one.text') }}
        />
      </div>


      <PictureForAllResolutions
        className={pictureOfNumberTwo.className}
        image={{
          namespace: 'sborka',
          key: 'two',
          alt: t('sborka:imgAlt.workingProcess.two'),
        }}
      />
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.two.title') }} />
        <p
          className='font_subhead-regular'
          dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.two.text') }}
        />
      </div>

      <PictureForAllResolutions
        className={pictureOfNumberThee.className}
        image={{
          namespace: 'sborka',
          key: 'three',
          alt: t('sborka:imgAlt.workingProcess.three'),
        }}
      />
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.three.title') }} />
        <p
          className='font_subhead-regular'
          dangerouslySetInnerHTML={{ __html: t('sborka:workingProcess.items.three.text') }}
        />
      </div>

    </article><style jsx>{`
      article {
        margin-top: 7rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      h2 {
        grid-column: 4 / span 6;
      }

      h3 {
        font-family: Roboto Slab;
        font-size: 3rem;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 4rem;
        letter-spacing: normal;
        color: #000000;
      }

      p {
        margin-top: 0.9375rem;
      }

      div:nth-of-type(1) {
        grid-column: 8 / span 5;
        margin-top: 13.9375rem;
      }

      div:nth-of-type(2) {
        grid-column: 6 / span 5;
        margin-top: 15.4375rem;
      }

      div:nth-of-type(3) {
        grid-column: 4 / span 4;
        grid-row: 4;
        margin-top: 13.4375rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          margin-top: 7rem;
          width: 1328px;
        }

        div:nth-of-type(1) {
          margin-top: 9.9375rem;
        }

        div:nth-of-type(2) {
          margin-top: 14.4375rem;
        }

        div:nth-of-type(3) {
          margin-top: 7.9375rem;
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          margin-top: 7rem;
          width: 1232px;
        }

        div:nth-of-type(1) {
          margin-top: 7.4375rem;
        }

        div:nth-of-type(2) {
          margin-top: 14.9375rem;
        }

        div:nth-of-type(3) {
          margin-top: 9.4375rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        article {
          margin-top: 5rem;
          width: 944px;
        }

        h3 {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        p {
          margin-top: 1.625rem;
        }

        div:nth-of-type(1) {
          margin-top: 5.5rem;
        }

        div:nth-of-type(2) {
          margin-top: 7.5rem;
        }

        div:nth-of-type(3) {
          margin-top: 7.5rem;
        }

        @media (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }
      }

      @media (max-width: 767px) {
        article {
          grid-column: 1 / span 6;
          margin-top: 5rem;
          width: 20.5rem;
        }

        h2, div:nth-of-type(n) {
          grid-column: 1 / span 6;
          text-align: center;
        }

        h3 {
          font-size: 1.5rem;
          line-height: 2rem;
        }

        p {
          margin-top: 0.625rem;
        }

        div:nth-of-type(n) {
          margin-top: 2rem;
        }

        div:nth-of-type(1) {
          grid-row: 3;
        }

        div:nth-of-type(2) {
          grid-row: 5;
          // margin-top: 7.5rem;
        }

        div:nth-of-type(3) {
          grid-row: 7;
          // margin-top: 7.5rem;
        }
      }
    `}</style>
    {pictureOfNumberOne.styles}
    {pictureOfNumberTwo.styles}
    {pictureOfNumberThee.styles}
  </Fragment>

export default translate()(WorkingProcess)
