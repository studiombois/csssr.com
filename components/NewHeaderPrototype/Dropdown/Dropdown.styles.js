import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors}) => css`
  ${mobile.all} {
    & {
      position: absolute;
      top: 0;
      z-index: -1;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
      transform: translateY(-100%);
      transition: transform 125ms ease-out;
      pointer-events: none;
      overflow: hidden;
    }

    &.is_opened {
      z-index: 0;
      transform: translateY(0);
      overflow: hidden;
    }

    &.is_on_top {
      z-index: 1;

      .side-bar {
        padding-bottom: 0;
      }
    }

    .side-bar,
    .sub-nav {
      padding-bottom: ${calcRem(72)};
      pointer-events: auto;
    }

    .side-bar {
      position: relative;
      margin-top: ${calcRem(64)};
      display: flex;
      flex-direction: column;
      width: ${calcRem(80)};
      height: 100%;
      background-color: ${colors.secondary.darken100};

      &.is_blured::before {
        content: '';
        position: absolute;
        top: ${calcRem(-64)};
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        background-color: rgba(25, 29, 32, 0.95);
        z-index: 4
      }
    }

    .sub-nav {
      padding-left: ${calcRem(32)};
      padding-right: ${calcRem(32)};
      width: calc(100% - ${calcRem(80)});
      height: 100%;
      background-color: #191D20;
      overflow: auto;
    }

    .title {
      position: sticky;
      z-index: 1;
      top: ${calcRem(-2)};
      padding-top: ${calcRem(21)};
      padding-bottom: ${calcRem(23)};
      width: ${calcRem(280)};
      margin-left: ${calcRem(-32)};
      padding-left: ${calcRem(32)};
      padding-right: ${calcRem(68)};
      display: flex;
      flex-direction: column;
      background-color: #191D20;
      transition: font-size 75ms ease-in;

      a {
        display: flex;
        align-items: center;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(20)};
        letter-spacing: ${calcRem(1)};
        text-transform: uppercase;
        color: white
      }
    }

    .title.stuck {
      padding-top: ${calcRem(23)};
      border-bottom: ${calcRem(1)} solid #2A2E31;
    }

    .arrow {
      margin-left: ${calcRem(9)};
      flex-shrink: 0;
    }

    /* dev-nav-start */
    .active-section {
      margin-top: ${calcRem(5)};
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(8)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1)};
      text-transform: uppercase;
      color: #9B9B9B;
      display: none;
    }

    .sub-nav-dev-sections {
      padding-bottom: ${calcRem(40)};
    }

    .sub-nav-dev-sections-item {
      margin-top: ${calcRem(40)};

      &:first-of-type {
        margin-top: ${calcRem(24)};
      }
    }

    .sub-nav-dev-section-title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1.25)};
      text-transform: uppercase;
      color: #9B9B9B;
    }

    .sub-nav-dev-section-list {
      margin-top: ${calcRem(16)};
    }

    .sub-nav-dev-section-list-item:not(:first-of-type) {
      margin-top: ${calcRem(20)};
    }

    .sub-nav-dev-section-list-item-link {
      font-family: Roboto;
      font-style: normal;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(20)};
      font-weight: normal;
      color: #FFFFFF;

      &.is_active {
        position: relative;
        color: #9B9B9B;
        pointer-events: none;

        &::after {
          content: '';
          position: absolute;
          left: ${calcRem(-32)};
          top: ${calcRem(-6)};
          height: ${calcRem(32)};
          width: ${calcRem(280)};
          background-color: rgba(155, 155, 155, 0.5);
        }
      }
    }
     /* dev-nav-end */

      /* store-nav-start */
    .sub-nav-store-sections {
      padding-bottom: ${calcRem(40)};

      &:first-of-type {
        margin-top: ${calcRem(24)};
      }
    }

    .sub-nav-store-sections-item {
      margin-top: ${calcRem(40)};

      &:first-of-type {
        margin-top: ${calcRem(24)};
      }
    }

    .sub-nav-store-section-list-item {
      padding: ${calcRem(28)} ${calcRem(35)};
      border: ${calcRem(1)} solid #7E8FA4;
      box-sizing: border-box;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      color: #FFFFFF;
      background-color: #323C48;
      display: block;
    }
    /* store-nav-end */

    /* blog-nav-start */
    .sub-nav-blog-section-title {
      margin-top: ${calcRem(24)};
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1.25)};
      text-transform: uppercase;
      color: #9B9B9B;

      &.big-margin {
        margin-top: ${calcRem(40)};
      }
    }

    .sub-nav-blog-sections {
      margin-top: ${calcRem(16)};

      &:last-of-type {
        padding-bottom: ${calcRem(40)};
      }

      &:not(.socials) {
        .sub-nav-blog-section-item {
          &.is_ru {
            position: relative;
            padding-left: ${calcRem(42)};
          }

          &:not(:first-of-type) {
            margin-top: ${calcRem(20)};
          }
        }

        .sub-nav-blog-section-list-item-icon {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .sub-nav-blog-section-list-item-link {
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: ${calcRem(14)};
          line-height: ${calcRem(20)};
          color: #FFFFFF;
        }
      }
    }

    .sub-nav-blog-sections.socials {
      margin-top: 0;
      display: flex;
      flex-wrap: wrap;
      width: ${calcRem(160)};

      .sub-nav-blog-section-item {
        margin-top: ${calcRem(16)};
        margin-right: ${calcRem(16)};
        font-size: 0;
      }

      .sub-nav-blog-section-list-item-link {
        font-size: 0;
      }
    }
    /* blog-nav-end */

    /* jobs-nav-start */
    .sub-nav-jobs-section-title {
      margin-top: ${calcRem(24)};
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1.25)};
      text-transform: uppercase;
      color: #9B9B9B;

      &.big-margin {
        margin-top: ${calcRem(40)};
      }
    }

    .sub-nav-jobs-sections {
      margin-top: ${calcRem(16)};

      &:last-of-type {
        padding-bottom: ${calcRem(40)};
      }
    }

    .sub-nav-jobs-section-item:not(:first-of-type) {
      margin-top: ${calcRem(20)};
    }

    .sub-nav-jobs-section-list-item-link {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(20)};
      color: #FFFFFF;
    }
    /* jobs-nav-end */

    /* school-nav-start */
    .sub-nav-school-section-item {
      padding-bottom: ${calcRem(40)};
      margin-top: ${calcRem(24)};

      img {
        width: ${calcRem(216)};
      }
    }
    /* school-nav-end */

    /* podcasts-nav-start */
    .sub-nav-podcasts-section-item {
      margin-top: ${calcRem(40)};

      &:first-of-type {
        margin-top: ${calcRem(24)};
      }

      &:last-of-type {
        padding-bottom: ${calcRem(40)};
      }

      img {
        width: ${calcRem(216)};
      }
    }
    /* podcasts-nav-end */

    .button_action {
      background-color: ${colors.primary.fade};
      position: absolute;
      bottom: 0;
      z-index: 4;
      padding-left: ${calcRem(27)};
      padding-right: ${calcRem(27)};
      width: 100%;
      height: ${calcRem(72)};
      flex-shrink: 0;
      font-size: 0.75rem;
      letter-spacing: 0;
      transition: opacity 75ms ease-out;
      opacity: 0;
      /* pointer-events: all; */
      pointer-events: none;
    }

    &.is_opened .button_action {
      opacity: 1;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
