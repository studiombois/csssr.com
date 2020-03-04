import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

export default {
  base: props => {
    const breakpoint = props.theme.breakpoints

    return css`
      overflow: visible;

      a {
        color: #fff;
      }

      .heading {
        position: relative;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 0.8125rem;
        width: ${calcRem(880)};

        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: calc(100% - 26px);
          left: 240px;
          display: block;
          width: 180px;
          height: 86px;
          background-color: #ffee1f;
        }

        ${breakpoint.desktop.m} {
          width: ${calcRem(656)};

          &::after {
            left: 120px;
          }
        }

        ${breakpoint.desktop.s} {
          width: ${calcRem(816)};

          &::after {
            left: 210px;
            width: 192px;
            height: 80px;
          }
        }

        ${breakpoint.tablet.all} {
          margin-bottom: 1.6875rem;
          width: ${calcRem(464)};

          &::after {
            left: ${calcRem(80)};
            width: ${calcRem(144)};
            height: ${calcRem(64)};
          }
        }

        ${breakpoint.mobile.all} {
          margin-bottom: 0.375rem;
          width: ${calcRem(328)};

          &::after {
            left: 5.625rem;
            width: 8rem;
            height: 3.5rem;
          }
        }
      }

      .subheading {
        margin: 0 auto;
        margin-bottom: 1.875rem;
        width: ${calcRem(1488)};

        ${breakpoint.desktop.m} {
          width: ${calcRem(1104)};
        }

        ${breakpoint.desktop.s} {
          width: ${calcRem(1024)};
        }

        ${breakpoint.tablet.all} {
          width: ${calcRem(764)};
        }

        ${breakpoint.mobile.all} {
          width: ${calcRem(328)};
        }
      }

      .heading,
      .subheading {
        text-align: center;
      }

      .button {
        position: relative;
        z-index: 1;
        max-width: 12.5rem;
        margin-top: 2.75rem;
        margin: 0 auto;
      }

      .svg-animation-wrapper {
        position: relative;
        background-image: url(${require('../../../static/images/express/planet-animation/hire-orbits.svg').default});
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;

        ${breakpoint.mobile.all} {
          background-position: 50% center;
          background-position-y: 0px;
        }
      }

      .ms-style {
        overflow: hidden !important;
        ${breakpoint.desktop.all} {
          height: ${calcRem(568)};
        }
        ${breakpoint.tablet.all} {
          height: ${calcRem(392)};
        }
        ${breakpoint.mobile.all} {
          height: ${calcRem(336)};
        }
        .rocket {
          top: 25% !important;
        }
      }

      .svg-animation {
        overflow: visible;
        &_visible {
          display: block;
        }
        &_invisible {
          display: none;
        }
      }



      .button {
        margin-bottom: 2.5rem;
      }

      .rocket {
        position: absolute;
        left: 50%;
        top: 29%;
        display: block;
        width: 85%;
        transform: translateX(-50%) translateY(-50%);
        ${breakpoint.mobile.all} {
          width: ${calcRem(272)};
        }
      }

      .rocket img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }

      ${breakpoint.mobile.all} {
        padding-top: 4.75rem;
        margin-bottom: 2rem;
      }

      ${breakpoint.tablet.all} {
        padding-top: 9.75rem;
        margin-bottom: 2rem;
      }

      ${breakpoint.desktop.all} {
        padding-top: 12rem;
        margin-bottom: 4rem;
      }
    `
  },
}