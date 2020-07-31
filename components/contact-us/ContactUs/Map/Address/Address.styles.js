import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above }}) => css`
  & {
    background-color: #ffffff;
    z-index: 2;
    color: #18191B;
    width: ${calcRem(328)};
    height: ${calcRem(194)};
    transition: width 100ms ease-in-out;
    padding-top: ${calcRem(46)};
    padding-right: ${calcRem(26)};
    padding-bottom: ${calcRem(48)};
    padding-left: ${calcRem(28)};
  }

  .addresses {
    display: flex;
  }

  .address {
    flex-shrink: 0;
    font-family: Roboto, sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
    width: ${calcRem(158)};
  }

  .text {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
    margin-top: ${calcRem(20)};
    width: ${calcRem(208)};
  }

  .pin {
    position: absolute;
    top: ${calcRem(-28)};
    left: ${calcRem(14)};
    width: ${calcRem(49)};
    height: ${calcRem(62)};
  }

  ${desktop.all} {
    & {
      bottom: 80px;
    }
  }

  ${desktop.s} {
    & {
      left: 42px;
    }
  }

  ${desktop.m} {
    & {
      left: 58px;
    }
  }

  ${desktop.l} {
    & {
      left: calc(20.625% - 222px);
    }
  }

  ${tablet.all} {
    & {
      bottom: ${calcRem(36)};
      left: ${calcRem(16)};
    }
  }

  ${above.mobile} {
    & {
      position: fixed;
    }

    &._ru {
      width: ${calcRem(392)};
    }

    .address + .address {
      margin-left: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      position: absolute;
      bottom: ${calcRem(50)};
      left: ${calcRem(16)};
      right: ${calcRem(16)};
      padding-top: ${calcRem(36)};
    }

    .address {
      width: ${calcRem(144)};
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
