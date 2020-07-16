import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { tablet, mobile, desktop } }) => css`

  .heading {
    text-align: center;
    margin-top: ${calcRem(64)};
  }

  ${desktop.all} {
    .heading {
      margin-top: ${calcRem(80)};
    }
  }

  ${tablet.all} {
    .heading {
      margin-top: ${calcRem(18)};
    }
  }

  ${mobile.all} {
    .heading {
      margin-top: ${calcRem(18)};
    }
  }
`

const ie11Styles = () => css`
  .heading{
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 3;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
