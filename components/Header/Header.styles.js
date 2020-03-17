import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
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

  .logo-wrapper {
    font-size: 0;
  }

  &.invisible,
  &.visible  {
    position: fixed;
  }

  &.invisible {
    top: -4rem;
  }

  &.visible {
    position: fixed;
    top: 0;
  }

  .logo {
    margin-left: ${calcRem(32)};
    order: 1;
    color: white;
  }

  .button_action {
    padding-left: ${calcRem(25)};
    padding-right: ${calcRem(25)};
    width: auto;
    height: 100%;
    order: 4;
    font-size: 0.75rem;
    letter-spacing: 0;
  }

  ${mobile.all} {
    & {
      height: ${calcRem(56)};
    }

    .logo {
      width: ${calcRem(64)};
      height: ${calcRem(16)};
      order: 1;
    }

    .burger {
      margin-left: auto;
      margin-right: ${calcRem(16)};
      padding: ${calcRem(16)};
      order: 2;
      height: 100%;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    .dropdown {
      position: absolute;
      top: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: calc(100vh - 100%);
      height: calc(var(--vh, 1vh) * 100 - 100%);
      background-color: ${colors.secondary.darken100};
      transition: height 125ms ease-out;
      overflow: auto;
    }

    .dropdown_closed {
      height: 0;
      overflow: hidden;
    }

    .button_action {
      margin-top: auto;
      width: 100%;
      height: ${calcRem(64)};
      flex-shrink: 0;
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
