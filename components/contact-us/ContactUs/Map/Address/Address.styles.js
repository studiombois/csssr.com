import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop }, colors }) => css`
  & {
    position: fixed;
    z-index: 2;
    width: ${calcRem(328)};
    padding-top: ${calcRem(46)};
    padding-right: ${calcRem(10)};
    padding-bottom: ${calcRem(48)};
    padding-left: ${calcRem(28)};
    transition: width 100ms ease-in-out;
    background-color: #ffffff;
    color: ${colors.secondary.darkeen100};
  }

  .addresses {
    display: flex;
    justify-content: space-between;
  }

  .address {
    flex-shrink: 0;
    font-family: Roboto, sans-serif;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(16)};
    letter-spacing: ${calcRem(0.75)};
    text-transform: uppercase;
    width: ${calcRem(167)};
  }

  .address + .address {
    width: ${calcRem(172)};
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

  &._ru {
    width: ${calcRem(392)};

    .address {
      width: ${calcRem(156)};
    }

    .address + .address {
      width: ${calcRem(182)};
    }
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

  ${mobile.all} {
    & {
      position: absolute;
      top: ${calcRem(380)};
      bottom: auto;
      left: ${calcRem(16)};
      right: ${calcRem(16)};
    }

    .addresses {
      flex-direction: column;
    }

    .address {
      width: ${calcRem(167)};
    }

    .address + .address {
      margin-top: ${calcRem(20)};
    }

    &._ru {
      .address {
        width: ${calcRem(186)};
      }
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
