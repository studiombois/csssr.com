import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: fixed;
    z-index: -999;
    bottom: 0;
    left: 0;
    padding: ${calcRem(32)};
    display: flex;
    width: 100%;
    height: ${calcRem(344)};
    background-color: white;
  }

  ${desktop.all} {
    .picture {
      margin-top: -8px;
      margin-left: auto;
      width: 492px;
      height: 280px;
    }
  }

  ${desktop.l} {
    & {
      padding-right: ${calcRem(42)};
    }
  }

  ${desktop.m} {
    & {
      padding-right: ${calcRem(48)};
    }
  }

  ${desktop.s} {
    & {
      padding-right: ${calcRem(52)};
    }

    .picture {
      position: absolute;
      right: 32px;
      z-index: -1;
    }
  }

  ${tablet.all} {
    & {
      height: ${calcRem(304)};
      padding-top: ${calcRem(40)};
      padding-right: ${calcRem(21)};
      padding-bottom: ${calcRem(28)};
      padding-left: ${calcRem(30)};
    }

    .picture {
      position: absolute;
      right: ${calcRem(11)};
      margin-top: ${calcRem(-5)};
      width: ${calcRem(386)};
      height: ${calcRem(225)};
      z-index: -1;
    }
  }

  ${mobile.all} {
    & {
      position: static;
      z-index: 1;
      margin-top: ${calcRem(42)};
      padding: 0;
      height: auto;
      flex-direction: column;
    }

    .picture {
      margin-top: ${calcRem(22)};
      width: ${calcRem(328)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
