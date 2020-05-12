import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  & {
    background-color: #ffffff;
  }

  ${desktop.l} {
    .form {
      padding-top: 263px;
    }
  }

  ${desktop.m} {
    .form {
      padding-top: 186px;
    }
  }

  ${desktop.s} {
    .form {
      padding-top: 226px;
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(298)};
    }
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(164)};
    }

    .form .button {
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
