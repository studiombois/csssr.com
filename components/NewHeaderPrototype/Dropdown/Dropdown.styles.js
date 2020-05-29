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
      height: calc(100% - ${calcRem(64)});
      background-color: ${colors.secondary.darken100};
    }

    .sub-nav {
      padding-left: ${calcRem(32)};
      width: calc(100% - ${calcRem(80)});
      height: 100%;
      background-color: #101112;
      overflow: auto;
    }

    .title {
      position: sticky;
      z-index: 1;
      margin-top: ${calcRem(100)};
      padding-top: ${calcRem(16)};
      padding-bottom: ${calcRem(16)};
      top: ${calcRem(-1)};
      display: flex;
      flex-direction: column;;
      background-color: #101112;
      transition: font-size 75ms ease-in;

      a {
        display: flex;
        align-items: center;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(20)};
        line-height: ${calcRem(16)};
        letter-spacing: ${calcRem(1)};
        text-transform: uppercase;
        color: white
      }
    }

    .title.stuck {
      a {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(20)};
      }
    }

    .arrow {
      margin-left: ${calcRem(9)};
    }

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
    }

    .sub-nav-sections {
      padding-bottom: ${calcRem(40)};
    }

    .sub-nav-sections-item {
      margin-top: ${calcRem(40)};
    }

    .sub-nav-section-title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 16px;
      letter-spacing: 1.25px;
      text-transform: uppercase;
      color: #9B9B9B;
    }

    .sub-nav-section-list {
      margin-top: ${calcRem(16)};
    }

    .sub-nav-section-list-item:not(:first-of-type) {
      margin-top: ${calcRem(12)};
    }

    .sub-nav-section-list-item-link {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      color: #FFFFFF;

      &.is_active {
        color: #9B9B9B;
        pointer-events: none;
        text-decoration: underline;
        text-decoration-color: ${colors.primary.origin};
      }
    }

    .button_action {
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
