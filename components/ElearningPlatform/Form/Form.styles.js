import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  & {
    padding-top: ${calcRem(200)};
    padding-bottom: ${calcRem(160)};
  }

  ${desktop.l} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.m} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.s} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(120)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(80)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
