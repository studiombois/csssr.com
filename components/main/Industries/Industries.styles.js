import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .title,
  .subtitle {
    grid-column: 4 / span 6;
    text-align: center;
  }

  .title {
    margin-top: 200px;
  }

  .subtitle {
    margin-top: 53px;
    color: ${colors.secondary.darken100};
  }

  ${desktop.s} {
    .subtitle {
      grid-column: 3 / span 8;
    }
  }

  ${tablet.all} {
    .title {
      margin-top: ${calcRem(160)};
    }

    .subtitle {
      margin-top: ${calcRem(34)};
    }
  }

  ${mobile.all} {
    .title,
    .subtitle {
      grid-column: 1 / span 6;
    }

    .title {
      margin-top: ${calcRem(103)};
    }

    .subtitle {
      margin-top: ${calcRem(10)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, mobile }}) => css`
  .title,
  .subtitle {
    -ms-grid-column: ${getGridValueForMs(4)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  ${desktop.s} {
    .subtitle {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${mobile.all} {
    .title,
    .subtitle {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
