import { css } from '@emotion/react'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    background-repeat: repeat-x;
    background-position-x: center;
    box-sizing: content-box;
  }

  .title,
  .text {
    color: ${colors.secondary.darken100};
  }

  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .title {
      grid-row: 1;
    }

    .picture {
      grid-row: 2;
    }

    .title,
    .picture {
      grid-column: 2 / span 3;
    }

    .text {
      grid-column: 5 / span 7;
      grid-row: 1 / span 2;
    }
  }

  ${desktop.all} {
    .picture {
      padding-bottom: 70px;
      margin-top: 67px;
    }
  }

  ${desktop.l} {
    & {
      padding-top: 175px;
      min-height: 703px;
      background-image: url(${require('../../../static/icons/technologies/autotests/lines_desktop_l.svg').default});
      background-position-y: 248px;
      background-position-x: calc(50% - 228px);
    }

    .title {
      margin-top: 230px
    }

    .picture {
      width: 272px
    }

    .text {
      margin-top: 245px;
      grid-column: 5 / span 6;
    }
  }

  ${desktop.m} {
    & {
      padding-top: 119px;
      min-height: 716px;
      background-image: url(${require('../../../static/icons/technologies/autotests/lines_desktop_m.svg').default});
      background-position-y: 84px;
    }

    .title {
      margin-top: 202px
    }

    .picture {
      width: 240px
    }

    .text {
      margin-top: 217px
    }
  }

  ${desktop.s} {
    & {
      padding-top: 132px;
      min-height: 710px;
      background-image: url(${require('../../../static/icons/technologies/autotests/lines_desktop_s.svg').default});
      background-position-y: 120px;
    }

    .title {
      margin-top: 182px
    }

    .picture {
      width: 240px
    }

    .text {
      margin-top: 197px
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(129)};
      padding-bottom: ${calcRem(80)};
      min-height: ${calcRem(517)};
      background-image: url(${require('../../../static/icons/technologies/autotests/lines_tablet_all.svg').default});
      background-size: ${calcRem(1280)};
      background-position-y: ${calcRem(24)};
    }

    .title {
      margin-top: ${calcRem(183)};
    }

    .text {
      margin-top: ${calcRem(185)};
    }

    .picture {
      margin-top: ${calcRem(41)};
      width: ${calcRem(144)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(98)};
      background-image: url(${require('../../../static/icons/technologies/autotests/lines_mobile_all_top.svg').default});
      background-size: 100%;
    }

    .title {
      margin-top: ${calcRem(85)};
    }

    .picture {
      display: none;
    }

    .text {
      position: relative;
      margin-top: ${calcRem(18)};

      &::after {
        content: '';
        position: absolute;
        bottom:${calcRem(-78)};
        left: ${calcRem(112)};
        display: block;
        width: ${calcRem(161)};
        height: ${calcRem(72)};
        background-image: url(${require('../../../static/icons/technologies/autotests/lines_mobile_all_bottom.svg').default});
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }

    .title,
    .text {
      grid-column: 1 / span 6;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .title {
      -ms-grid-row: 1;
    }

    .picture {
      -ms-grid-row: 2;
    }

    .title,
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(5)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
      -ms-grid-row: 1;
      -ms-grid-row-span: 2;
    }
  }

  ${desktop.l} {
    .text {
      -ms-grid-column: ${getGridValueForMs(5)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${mobile.all} {
    .title,
    .text {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`
const StyledAutotests = props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledAutotests
