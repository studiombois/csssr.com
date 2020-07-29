import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above }}) => css`
  & {
    background-color: #ffffff;
    z-index: 2;
    color: #18191B;
  }

  .addresses {
      display: flex;
    }

  .address {
    font-family: Roboto, sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(1.25)};
    text-transform: uppercase;
  }

  .text {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(21)};
    margin-top: ${calcRem(23)};
  }

  .pin {
    position: absolute;
  }

  ${desktop.all} {
    & {
      padding-top: 48px;
      padding-right: 26px;
      padding-bottom: 48px;
      padding-left: 48px;
      bottom: 80px;
    }

    .address {
      width: 144px;
    }

    .address + .address {
      margin-left: 24px;
      margin-right: 21px;
    }

    .text {
      width: 166px;
    }

    .pin {
      top: -28px;
      left: 14px;
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
      padding-top: ${calcRem(48)};
      padding-right: ${calcRem(48)};
      padding-bottom: ${calcRem(48)};
      padding-left: ${calcRem(48)};
      bottom: ${calcRem(36)};
      left: ${calcRem(16)};
    }

    .address,
    .text {
      width: ${calcRem(144)};
    }

    .pin {
      top: ${calcRem(-28)};
      left: ${calcRem(14)};
    }
  }

  ${above.mobile} {
    position: fixed;
  }

  ${mobile.all} {
    & {
      position: absolute;
      padding-top: ${calcRem(56)};
      padding-right: ${calcRem(24)};
      padding-bottom: ${calcRem(24)};
      padding-left: ${calcRem(24)};
      bottom: ${calcRem(50)};
      left: ${calcRem(16)};
      right: ${calcRem(16)};
    }

    .address {
      width: ${calcRem(144)};
    }

    .text {
      width: ${calcRem(175)};
    }

    .pin {
      top: ${calcRem(-15)};
      right: ${calcRem(18)};
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
