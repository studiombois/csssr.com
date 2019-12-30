import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import translate from '../../utils/translate-wrapper'
import PictureForAllResolutions from '../PictureForAllResolutions'
import { getMsColumn } from '../../utils/style/getGridValueForMs'

const howWeWorkItems = ['complexApproach', 'productionPotential', 'frontendIsOurSpecialty']

const pictureNameByHowWeWorkItemName = {
  complexApproach: 'trio',
  productionPotential: 'matreshka',
  frontendIsOurSpecialty: 'planeta',
}

const picture = css.resolve`
  picture {
    display: block;
    height: 416px;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    picture {
      height: 320px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    picture {
      height: 296px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      height: 224px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    picture {
      height: 14rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      margin-left: auto;
      margin-right: auto;
      width: 6.625rem;
      height: 10rem;
    }
  }
`

const OurPrinciples = ({ t }) => {
  const renderHowWeWorkItems = (itemName, index) => (
    <section key={itemName}>
      <PictureForAllResolutions
        className={picture.className}
        image={{
          namespace: 'sborka',
          key: pictureNameByHowWeWorkItemName[itemName],
          alt: t(`sborka:imgAlt.howWeWork.${itemName}`),
        }}
      />

      <h3
        className="font_h2-regular"
        dangerouslySetInnerHTML={{ __html: t(`sborka:howWeWork.items.${itemName}.title`) }}
      />
      <p
        className="font_p16-regular"
        dangerouslySetInnerHTML={{ __html: t(`sborka:howWeWork.items.${itemName}.text`) }}
      />
      <style jsx>{`
        section {
          margin-top: ${3.125 + (1 - index) * 9 + 9}rem;
          grid-row: 2;
          z-index: -1;
          grid-column: ${index * 3 + 3} / span 2;
        }

        h3 {
          margin-top: 2.5rem;
        }

        p {
          margin-top: 0.5rem;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          section {
            margin-top: ${2.125 + (2 - index) * 7.5 + 7.5}rem;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          section {
            margin-top: ${3.125 + (2 - index) * 7.5 + 7.5}rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          section {
            margin-top: ${3.5625 + (2 - index) * 6 + 6}rem;
          }

          h3 {
            margin-top: 2.875rem;
          }

          p {
            margin-top: 0.9375rem;
            font-size: 0.875rem;
            line-height: 1.5rem;
          }
        }

        @media (max-width: 767px) {
          section {
            margin-top: 3rem;
            grid-column: 1 / span 6;
            grid-row: ${5 - index};
          }

          h3,
          p {
            text-align: center;
          }

          h3 {
            margin-top: 1.4375rem;
            padding-bottom: 0;
          }

          p {
            margin-top: 1.0625rem;
            font-size: 0.875rem;
            line-height: 1.5rem;
          }

          section:nth-of-type(1) {
            margin-top: 0.3125rem;
          }

          section:nth-of-type(2) {
            margin-top: 0.8125rem;
          }
        }
      `}</style>
      <style jsx>{`
        :global(.ie11) section {
          -ms-grid-row: 2;
          -ms-grid-column: ${getMsColumn(index * 3 + 3)};
          -ms-grid-column-span: 3;
        }
      `}</style>
      {picture.styles}
    </section>
  )

  return (
    <Fragment>
      <article id="how-we-work" className="grid-container">
        <h2 dangerouslySetInnerHTML={{ __html: t('sborka:howWeWork.title') }} />
        <p
          className="font_subhead-regular"
          dangerouslySetInnerHTML={{ __html: t('sborka:howWeWork.text') }}
        />

        {howWeWorkItems.map(renderHowWeWorkItems)}
      </article>
      <style jsx>{`
        article {
          margin-top: 8.4375rem;
          margin-right: auto;
          margin-left: auto;
          width: 1792px;
        }

        h2,
        p {
          grid-column: 4 / span 5;
        }

        h2 {
          font-family: 'Roboto Slab', 'Georgia', serif;
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
          grid-row: 2;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          article {
            margin-top: 8.4375rem;
            width: 1328px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          article {
            margin-top: 8.4375rem;
            width: 1232px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          article {
            margin-top: 5.8125rem;
            width: 944px;
          }

          h2 {
            font-size: 1.5rem;
            line-height: 2rem;
          }

          p {
            margin-top: 2.125rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          article {
            width: 59rem;
          }
        }

        @media (max-width: 767px) {
          article {
            grid-column: 1 / span 6;
            margin-top: 5.8125rem;
            width: 20.5rem;
          }

          h2,
          p {
            grid-column: 1 / span 6;
            text-align: center;
          }

          h2 {
            font-size: 1.5rem;
            line-height: 2rem;
          }

          p {
            margin-top: 0.625rem;
          }
        }
      `}</style>
      <style jsx>{`
        h2,
        p {
          -ms-grid-column: ${getMsColumn(4)};
          -ms-grid-column-span: ${getMsColumn(5)};
        }

        p {
          -ms-grid-row: 2;
        }
      `}</style>
    </Fragment>
  )
}

export default translate()(OurPrinciples)
