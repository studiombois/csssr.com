import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop }, colors }) => css`
  & {
    position: absolute;
    display: flex;
    background-color: #ffffff;
    z-index: 2;
  }

  .item {
    font-family: Roboto, sans-serif;
    font-weight: 900;
    text-align: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 24px;
    background-color: transparent;
    cursor: pointer;
    color: #18191b;
    border: none;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    flex-grow: 1;
    width: ${100/3}%;

    &:first-of-type {
      border-left: 1px solid #000000;
    }

    &:last-of-type {
      border-right: 1px solid #000000;
    }

    &._active {
      background-color: ${colors.primary.origin};
      border-color: ${colors.primary.origin};
      color: #ffffff;
    }
  }

  ${desktop.all} {
    & {
      top: 32px;
    }

    .item {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-right: 30px;
      padding-left: 30px;
    }
  }

  ${desktop.s} {
    & {
      left: 42px;
      right: 42px;
    }
  }

  ${desktop.m} {
    & {
      left: 58px;
      right: 58px;
    }
  }

  ${desktop.l} {
    & {
      left: 170px;
      right: 170px;
    }
  }

  ${tablet.all} {
    & {
      top: ${calcRem(32)};
      left: ${calcRem(16)};
      right: ${calcRem(16)};
    }

    .item {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      padding-top: ${calcRem(8)};
      padding-bottom: ${calcRem(8)};
    }
  }

  ${mobile.all} {
    & {
      top: ${calcRem(48)};
      left: ${calcRem(16)};
      right: ${calcRem(16)};
    }

    .item {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(24)};
      padding-top: ${calcRem(8)};
      padding-bottom: ${calcRem(8)};
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
