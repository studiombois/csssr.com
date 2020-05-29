import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors}) => css`
  ${mobile.all} {
    & {
      position: absolute;
      z-index: 9999;
      left: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: ${calcRem(64)};
      width: 100%;
      box-sizing: border-box;
      transition: top 300ms ease 0s;
      background-color: ${colors.secondary.darken100};
    }

    &.invisible,
    &.visible {
      position: fixed;
    }

    &.invisible {
      top: -4rem;
    }

    &.visible {
      position: fixed;
      top: 0;
    }

    .logo-wrapper {
      margin-left: auto;
      margin-right: ${calcRem(24)};
      font-size: 0;
    }

    .logo {
      width: ${calcRem(64)};
      height: ${calcRem(16)};
      color: white;
    }

    .burger {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      width: ${calcRem(80)};
      height: ${calcRem(64)};
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    &.is_dropdown_opened .burger {
      background-color: #18191B;
    }

    .dropdown {
      position: absolute;
      z-index: -1;
      top: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: calc(100vh - 100%);
      height: calc(var(--vh, 1vh) * 100 - 100%);
      background-color: ${colors.secondary.darken100};
      transform: translateY(0);
      transition: transform 125ms ease-out;
      overflow: auto;
    }

    .dropdown_closed {
      transform: translateY(-100%);
      overflow: hidden;
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
