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

    .main-nav {
      padding-top: ${calcRem(24)};
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: ${colors.secondary.darken100};
    }

    .sub-nav {
      width: calc(100% - ${calcRem(80)});
      height: 100%;
      background-color: #101112;
    }

    .button_action {
      position: absolute;
      bottom: 0;
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

    .main-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:not(:first-of-type) {
        margin-top: ${calcRem(40)};
      }
    }

    .main-nav-item-button {
      display: block;
      width: 40px;
      height: 40px;
      background: none;
      background-color: #434343;
      transition: transform 75ms ease-in;
      border: none;
    }


    .main-nav-item.is_active {
      .main-nav-item-button {
        transform: scale(1.4);
        border: 3px solid #0054D7;
      }

      .main-nav-item-title {
        transform: translateY(${calcRem(4)});
      }
    }

    .main-nav-item-title {
      margin-top: ${calcRem(4)};
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(8)};
      line-height: ${calcRem(16)};
      text-align: center;
      letter-spacing: ${calcRem(1)};
      text-transform: uppercase;
      color: #9B9B9B;
      transition: transform 75ms ease-in;
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
