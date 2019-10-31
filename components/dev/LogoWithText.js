import React, { Fragment } from 'react'
import { string } from 'prop-types'

const LogoWithText = ({ iconName, altText, logoCaption }) =>
  <Fragment>
    <img src={require(`../../static/icons/dev/${iconName}.svg`)} alt={altText} />
    <figcaption>{logoCaption}</figcaption>

    <style jsx>{`
      figcaption {
        margin-top: 0.375rem;
        font-family: 'Roboto', 'Arial', sans-serif;
        font-size: 1rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        text-align: center;
        color: #9b9b9b;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        max-width: 100%;
        height: auto;
      }

      @media (max-width: 1279px) {
        img {
          max-width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        figcaption {
          margin-top: 0rem;
          font-size: 0.75rem;
          line-height: 1.25;
          letter-spacing: 0.15rem;
        }
      }


      @media (max-width: 767px) {
        figcaption {
          margin-top: 0.0625rem;
          font-size: 0.625rem;
          letter-spacing: 0.125rem;
        }
      }
    `}</style>
  </Fragment>

LogoWithText.propTypes = {
  iconName: string,
  altText: string,
  logoCaption: string,
}

export default LogoWithText
