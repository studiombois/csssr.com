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
      margin-right: 32px;
      width: 520px;
      height: 296px;
    }
  }

  ${desktop.s} {
    .picture {
      position: absolute;
      right: 32px;
      z-index: -1;
    }
  }

  ${tablet.all} {
    & {
      height: ${calcRem(304)};
    }

    .picture {
      position: absolute;
      right: ${calcRem(11)};
      margin-top: ${calcRem(-5)};
      width: ${calcRem(450)};
      height: ${calcRem(256)};
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
      margin-left: ${calcRem(-16)};
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
