import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  .title,
  .text {
    color: ${colors.secondary.darken100};
  }

  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .picture_react,
    .title_react {
      grid-column: 2 / span 4;
    }

    .text_react {
      grid-column: 2 / span 5;
    }

    .picture_vue {
      grid-column: 9;
    }

    .title_vue,
    .text_vue {
      grid-column: 9 / span 3;
    }

    .picture_angular {
      grid-column: 4 / span 2;
      grid-row: 4 / span 2;
    }

    .title_angular {
      grid-row: 4;
    }

    .text_angular {
      grid-row: 5;
    }

    .title_angular,
    .text_angular {
      grid-column: 7 / span 5;
    }

    .picture_react,
    .picture_vue {
      grid-row: 1;
    }

    .title_react,
    .title_vue {
      grid-row: 2;
    }

    .text_react,
    .text_vue {
      grid-row: 3;
    }
  }

  ${desktop.l} {
    & {
      grid-template-rows: max-content max-content max-content 340px max-content;
    }

    .picture_react {
      margin-top: 249px;
      width: 507px;
      height: 507px;
    }

    .title_react {
      margin-top: 53px;
    }

    .text_react {
      margin-top: 31px;
    }

    .picture_vue {
      margin-top: 660px;
    }

    .title_vue {
      margin-top: 72px;
    }

    .text_vue {
      margin-top: 7px;
    }

    .picture_angular {
      margin-top: 285px;
    }

    .title_angular {
      margin-top: 308px;
    }

    .text_angular {
      margin-top: 20px;
    }
  }

  ${desktop.m} {
    & {
      grid-template-rows: max-content max-content max-content 244px max-content;
    }

    .picture_react {
      margin-top: 152px;
      width: 380px;
      height: 380px;
    }

    .title_react {
      margin-top: 45px;
    }

    .text_react {
      margin-top: 31px;
    }

    .picture_vue {
      margin-top: 467px;
    }

    .title_vue {
      margin-top: 72px;
    }

    .text_vue {
      margin-top: 15px;
    }

    .picture_angular {
      margin-top: 236px;
      height: 216px;
    }

    .title_angular {
      margin-top: 212px;
    }

    .text_angular {
      margin-top: 20px;
    }
  }

  ${desktop.s} {
    & {
      grid-template-rows: max-content max-content max-content 196px max-content;
    }

    .picture_react {
      margin-top: 108px;
      width: 352px;
      height: 352px;
    }

    .title_react {
      margin-top: 45px;
    }

    .text_react {
      margin-top: 31px;
    }

    .picture_vue {
      margin-top: 404px;
    }

    .title_vue {
      margin-top: 72px;
    }

    .text_vue {
      margin-top: 15px;
    }

    .picture_angular {
      margin-top: 209px;
      height: 200px;
    }

    .title_angular {
      margin-top: 164px;
    }

    .text_angular {
      margin-top: 20px;
    }
  }

  ${tablet.all} {
    & {
      grid-template-rows: max-content max-content max-content ${calcRem(125)} max-content;
    }

    .picture_react {
      margin-top: ${calcRem(143)};
      width: ${calcRem(272)};
      height: ${calcRem(272)};
    }

    .title_react {
      margin-top: ${calcRem(39)};
    }

    .text_react {
      margin-top: ${calcRem(18)};
    }

    .picture_vue {
      margin-top: ${calcRem(351)};
    }

    .title_vue {
      margin-top: ${calcRem(46)};
    }

    .text_vue {
      margin-top: ${calcRem(25)};
    }

    .picture_angular {
      margin-top: ${calcRem(119)};
      height: ${calcRem(152)};
    }

    .title_angular {
      margin-top: ${calcRem(101)};
    }

    .text_angular {
      margin-top: ${calcRem(25)};
    }
  }

  ${mobile.all} {
    .picture_react {
      margin-top: ${calcRem(151)};
      width: ${calcRem(272)};
      height: ${calcRem(272)};
    }

    .title_react {
      margin-top: ${calcRem(39)};
    }

    .text_react {
      margin-top: ${calcRem(18)};
    }

    .picture_react,
    .title_react,
    .text_react {
      grid-column: 1 / span 5;
    }

    .picture_vue {
      grid-column: 3 / span 2;
    }

    .title_vue,
    .text_vue {
      grid-column: 3 / span 4;
    }

    .picture_angular {
      grid-column: 1 / span 2;
    }

    .title_angular,
    .text_angular {
      grid-column: 1 / span 4;
    }

    .picture_vue,
    .picture_angular {
      margin-top: ${calcRem(88)};
    }

    .title_vue {
      margin-top: ${calcRem(46)};
    }

    
    .title_angular {
      margin-top: ${calcRem(33)};
    }

    .text_vue,
    .text_angular {
      margin-top: ${calcRem(25)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all},
  ${tablet.all.replace('@media ', '')} {
    .picture_react,
    .title_react {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .text_react {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .picture_vue {
      -ms-grid-column: ${getGridValueForMs(9)};
    }

    .title_vue,
    .text_vue {
      -ms-grid-column: ${getGridValueForMs(9)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .picture_angular {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
      -ms-grid-row: 4;
      -ms-grid-row-span: 2;
    }

    .title_angular {
      -ms-grid-row: 4;
    }

    .text_angular {
      -ms-grid-row: 5;
    }

    .title_angular,
    .text_angular {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .picture_react,
    .picture_vue {
      -ms-grid-row: 1;
    }

    .title_react,
    .title_vue {
      -ms-grid-row: 2;
    }

    .text_react,
    .text_vue {
      -ms-grid-row: 3;
    }
  }

  ${desktop.l} {
    & {
      -ms-grid-rows: max-content max-content max-content 340px max-content;
    }
  }

  ${desktop.m} {
    & {
      -ms-grid-rows: max-content max-content max-content 244px max-content;
    }
  }

  ${desktop.s} {
    & {
      -ms-grid-rows: max-content max-content max-content 196px max-content;
    }
  }

  ${tablet.all} {
    & {
      -ms-grid-rows: max-content max-content max-content ${calcRem(125)} max-content;
    }
  }

  ${mobile.all} {
    .picture_react,
    .title_react,
    .text_react {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .picture_vue {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .title_vue,
    .text_vue {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .picture_angular {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .title_angular,
    .text_angular {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
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
