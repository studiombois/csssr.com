import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(76)};
    padding-bottom: ${calcRem(186)};
    background-repeat: no-repeat;
    background-color: transparent;
    background-size: 100%;
  }

  .heading {
    grid-column: 1 / span 6;
  }

  ${mobile.all} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/greeting/bg-mobile.svg').default});
      background-position: 50% ${calcRem(49)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(137)};
      padding-top: ${calcRem(11)};
      background-image: url(${require('../../../static/icons/way-of-work/greeting/bg-tablet.svg').default});
      background-position: 50% 0;
    }

    .heading {
      text-align: center;
      grid-column: 2 / span 10;
    }
  }

  ${desktop.all} {
    &{
      margin-top: ${calcRem(199)};
      padding-bottom: ${calcRem(300)};
    }

    .heading {
      text-align: center;
      grid-column: 2 / span 10;
    }
  }

  ${desktop.s} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/greeting/bg-desktop-s.svg').default});
      background-position: 50% ${calcRem(27)};
    }
  }

  ${desktop.m} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/greeting/bg-desktop-m.svg').default});
      background-position: 50% ${calcRem(67)};
    }
  }

  ${desktop.l} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/greeting/bg-desktop-l.svg').default});
      background-position: 50% ${calcRem(2)};
    }
  }
`

const ie11Styles = () => css`

  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(10)};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
