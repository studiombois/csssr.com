import React, { Fragment } from 'react'
import LogoWithText from './LogoWithText'
import toolsForCompetence from '../../data/dev/toolsForCompetence'

const LogosSheet = () =>
  <Fragment>
    {toolsForCompetence.map(tool =>
      <figure key={tool.iconName} className={tool.iconName}>
        <LogoWithText
          iconName={tool.iconName}
          logoCaption={tool.logoCaption}
          altText={`${tool.logoCaption} logo`}
        />
      </figure>
    )}

    <span className='express'>
      Express
    </span>

    <style jsx>{`
      figure,
      .express {
        position: absolute;
        text-align: center;
      }

      .webpack {
        left: 49.5rem;
        width: 12.75rem;
      }

      .mongoDB {
        top: 7.25rem;
        left: 66.6875rem;
        width: 6.75rem;
      }

      .jUnit {
        top: 15rem;
        left: 76.75rem;
        width: 4rem;
      }

      .typeScript {
        top: 19.875rem;
        left: 56rem;
        width: 8.625rem;
      }

      .postCSS {
        top: 27.875rem;
        left: 67.25rem;
        width: 8.25rem;
      }

      .jest {
        top: 27.375rem;
        left: 45.5rem;
        width: 7.75rem;
      }

      .spring {
        top: 34.375rem;
        left: 56rem;
        width: 7.25rem;
      }

      .springBoot {
        top: 46.5rem;
        left: 58.5635rem;
        width: 8.5rem;
      }

      .mocha {
        top: 39.875rem;
        left: 44.5rem;
        width: 5rem;
      }

      .babel {
        top: 46.375rem;
        left: 51rem;
        width: 6rem;
      }

      .chai {
        top: 51rem;
        left: 46.125rem;
        width: 5rem;
      }

      .flow {
        top: 32.875rem;
        left: 35.125rem;
        width: 5.375rem;
      }

      .stylus {
        top: 46.75rem;
        left: 34.875rem;
        width: 6rem;
      }

      .bem {
        top: 55.25rem;
        left: 34.125rem;
        width: 6.5rem;
      }

      .gulp {
        top: 30.0625rem;
        left: 26.5rem;
        width: 3.75rem;
      }

      .oracle {
        top: 43.75rem;
        left: 25rem;
        width: 8rem;
      }

      .pug {
        top: 49.875rem;
        left: 25.6875rem;
        width: 4.375rem;
      }

      .rispa {
        top: 44.5rem;
        left: 16.4375rem;
        width: 4.5rem;
      }

      .karma {
        top: 56.5625rem;
        left: 18.5rem;
        width: 5.125rem;
      }

      .jasmine {
        top: 62.0625rem;
        left: 8.375rem;
        width: 5rem;
      }

      .express {
        top: 40.875rem;
        left: 65.5625rem;
        font-family: Roboto;
        font-size: 2.5rem;
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: -0.06875rem;
        color: #000000;
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        .mongoDB {
          top: 9.25rem;
        }

        .jUnit {
          top: 16.5rem;
        }

        .postCSS {
          top: 29.875rem;
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        .webpack {
          left: 49.5rem;
          width: 8.75rem;
        }

        .mongoDB {
          top: 6rem;
          left: 60.375rem;
          width: 5.875rem;
          height: 8.375rem;
        }

        .jUnit {
          top: 10.8125rem;
          left: 67.625rem;
          width: 2.75rem;
        }

        .typeScript {
          top: 12.9375rem;
          left: 53.75rem;
          width: 6rem;
        }

        .postCSS {
          top: 19.625rem;
          left: 61.375rem;
          width: 5.5rem;
        }

        .jest {
          top: 18rem;
          left: 46.75rem;
          width: 5.125rem;
        }

        .spring {
          top: 22.75rem;
          left: 54rem;
          width: 4.75rem;
        }

        .springBoot {
          top: 31rem;
          left: 54.375rem;
          width: 8.25rem;
          height: 4rem;
        }

        .mocha {
          top: 26.75rem;
          left: 46.25rem;
          width: 3.25rem;
        }

        .babel {
          top: 31.125rem;
          left: 50.75rem;
          width: 4rem;
        }

        .chai {
          top: 33.875rem;
          left: 47.25rem;
          width: 3.375rem;
        }

        .flow {
          top: 22.125rem;
          left: 40.0625rem;
          width: 3.5rem;
        }

        .stylus {
          top: 31.0625rem;
          left: 39.75rem;
          width: 4rem;
        }

        .bem {
          top: 36.75rem;
          left: 39.25rem;
          width: 4.25rem;
        }

        .gulp {
          top: 19.8125rem;
          left: 34.0625rem;
          width: 2.5rem;
        }

        .oracle {
          top: 28.875rem;
          left: 33.125rem;
          width: 5.375rem;
        }

        .pug {
          top: 33.0625rem;
          left: 33.625rem;
          width: 3rem;
        }

        .rispa {
          top: 29.4375rem;
          left: 27.25rem;
          width: 3rem;
        }

        .karma {
          top: 37.375rem;
          left: 28.875rem;
          width: 3.375rem;
        }

        .jasmine {
          top: 41.125rem;
          left: 21.9375rem;
          width: 3.375rem;
        }

        .express {
          top: 27.875rem;
          left: 61.75rem;
          font-size: 1.875rem;
          letter-spacing: -0.05rem;
        }
      }

      @media (max-width: 767px) {
        .webpack {
          left: 7.125rem;
          width: 6.875rem;
        }

        .mongoDB {
          top: 4.625rem;
          left: 15.1875rem;
          width: 4.375rem;
          height: 6.75rem;
        }

        .typeScript {
          top: 13.75rem;
          left: 15.125rem;
          width: 4.875rem;
        }

        .jUnit {
          top: 20.5625rem;
          left: 18.125rem;
          width: 2.25rem;
        }

        .postCSS {
          top: 24.625rem;
          left: 14rem;
          width: 4.5rem;
        }

        .jest {
          top: 26.125rem;
          left: 7.5rem;
          width: 4.125rem;
        }

        .spring {
          top: 32.125rem;
          left: 12.75rem;
          width: 3.875rem;
        }

        .springBoot {
          top: 38rem;
          left: 14.5rem;
          width: 6.5rem;
          height: 3.25rem;
        }

        .mocha {
          top: 33.625rem;
          left: 7rem;
          width: 2.625rem;
        }

        .babel {
          top: 38.625rem;
          left: 11.5rem;
          width: 3.25rem;
        }

        .chai {
          top: 39.1875rem;
          left: 7.5rem;
          width: 2.75rem;
        }

        .flow {
          top: 27.9375rem;
          left: 3.375rem;
          width: 2.875rem;
        }

        .stylus {
          top: 37.125rem;
          left: 2rem;
          width: 3.25rem;
        }

        .bem {
          top: 43.9375rem;
          left: 4.625rem;
          width: 3.5rem;
        }

        .gulp {
          top: 30.9375rem;
          left: 0.125rem;
          width: 2rem;
        }

        .oracle {
          top: 41.375rem;
          left: 0;
          width: 4.25rem;
        }

        .pug {
          top: 49.1875rem;
          left: 7.75rem;
          width: 2.375rem;
        }

        .rispa {
          top: 46.625rem;
          left: 0.625rem;
          width: 2.375rem;
        }

        .karma {
          top: 43.9375rem;
          left: 10rem;
          width: 2.75rem;
        }

        .jasmine {
          top: 51.25rem;
          left: 3rem;
          width: 3.75rem;
          height: 2.75rem;
        }

        .express {
          top: 30.75rem;
          left: 16.0625rem;
          font-size: 1.25rem;
          letter-spacing: -0.03125rem;
        }
      }
    `}</style>
  </Fragment>

export default LogosSheet
