import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors}) => css`
  & {
    background-repeat: repeat-x;
    background-position-x: center;
  }

  .title {
    grid-column: 2 / span 10;
    grid-row: 1;
  }

  .description {
    grid-column: 3 / span 8;
    grid-row: 2;
  }

  .title,
  .description {
    text-align: center;
  }

  .picture_javascript {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  .javascript {
    grid-column: 2 / span 3;
    grid-row: 4;
  }

  .picture_typescript {
    grid-column: 6 / span 5;
    grid-row: 3 / span 2;
    object-fit: contain;
    width:
  }

  .typescript {
    grid-column: 7 / span 5;
    grid-row: 5;
  }

  .title,
  .description,
  .javascript,
  .typescript {
    color: ${colors.secondary.darken100};
  }

  ${desktop.all} {
    .title {
      margin-top: 200px;
    }

    .description {
      margin-top: 77px;
    }

    .javascript {
      margin-top: 37px;
    }

    .typescript {
      margin-top: 66px;
    }
  }

  ${desktop.l} {
    & {
      background-image: url(${require('../../../static/icons/technologies/hero/lines_desktop_l.svg').default});
      background-position-y: 535px;
      background-position-x: calc(50% - 50px);
    }

    .grid {
      grid-template-rows: max-content max-content 466px max-content max-content;
    }

    .picture_javascript {
      margin-top: 146px;
      height: 320px;
    }

    .picture_typescript {
      margin-top: 261px;
      width: 728px;
      height: 472px;
    }
  }

  ${desktop.m} {
    & {
      background-image: url(${require('../../../static/icons/technologies/hero/lines_desktop_m.svg').default});
      background-position-y: 500px;
      background-position-x: calc(50% - 11px);
    }

    .grid {
      grid-template-rows: max-content max-content 402px max-content max-content;
    }

    .picture_javascript {
      margin-top: 156px;
      height: 248px;
    }

    .picture_typescript {
      margin-top: 340px;
      width: 544px;
      height: 352px;
    }
  }

  ${desktop.s} {
    & {
      background-image: url(${require('../../../static/icons/technologies/hero/lines_desktop_s.svg').default});
      background-position-y: 660px;
    }

    .grid {
      grid-template-rows: max-content max-content 402px max-content max-content;
    }

    .picture_javascript {
      margin-top: 178px;
      height: 224px;
    }

    .picture_typescript {
      margin-top: 364px;
      width: 504px;
      height: 328px;
    }
  }

  ${tablet.all} {
    & {
      background-image: url(${require('../../../static/icons/technologies/hero/lines_tablet_all.svg').default});
      background-position-y: ${calcRem(242)};
    }

    .grid {
      grid-template-rows: max-content max-content ${calcRem(273)} max-content max-content;
    }

    .title {
      margin-top: ${calcRem(148)};
    }

    .description {
      margin-top: ${calcRem(35)};
    }

    .picture_javascript {
      margin-top: ${calcRem(110)};
      height: ${calcRem(168)};
    }

    .javascript {
      margin-top: ${calcRem(31)};
    }

    .picture_typescript {
      margin-top: ${calcRem(217)};
      width: ${calcRem(384)};
      height: ${calcRem(248)};
    }

    .typescript {
      margin-top: ${calcRem(41)};
    }
  }

  ${tablet.s} {
    & {
      background-size: ${calcRem(1280)};
    }
  }

  ${mobile.all} {
    & {
      background-image: url(${require('../../../static/icons/technologies/hero/lines_mobile_all.svg').default});
      background-position-y: ${calcRem(381)};
      background-repeat: no-repeat;
      background-size: 100%;
    }

    .grid {
      grid-template-rows: repeat(5, auto);
    }

    .title {
      margin-top: ${calcRem(76)};
      grid-row: 1;
    }

    .description {
      margin-top: ${calcRem(35)};
      grid-row: 2;
    }

    .title,
    .description {
      grid-column: 1 / span 6;
      text-align: left;
    }

    .picture_javascript {
      margin-top: ${calcRem(105)};
      grid-column: 1 / span 3;
      width: ${calcRem(144)};
      grid-row: 3;
    }

    .javascript {
      margin-top: ${calcRem(31)};
      grid-column: 1 / span 5;
      grid-row: 4;
    }

    .picture_typescript {
      margin-top: ${calcRem(120)};
      grid-column: 2 / span 5;
      grid-row: 5;
    }

    .typescript {
      margin-top: ${calcRem(24)};
      grid-column: 3 / span 4;
      grid-row: 6;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(10)};
    -ms-grid-row: 1;
  }

  .description {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(8)};
    -ms-grid-row: 2;
  }

  .picture_javascript {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(2)};
    -ms-grid-row: 3;
  }

  .javascript {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 4;
  }

  .picture_typescript {
    -ms-grid-column: ${getGridValueForMs(6)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 3;
    -ms-grid-row-span: 2;
  }

  .typescript {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 5;
  }

  ${desktop.l} {
    .grid {
      -ms-grid-rows: max-content max-content 466px max-content max-content;
    }
  }


  ${desktop.m} {
    .grid {
      -ms-grid-rows: max-content max-content 402px max-content max-content;
    }
  }

  ${desktop.s} {
    .grid {
      -ms-grid-rows: max-content max-content 402px max-content max-content;
    }
  }

  ${tablet.all} {
    .grid {
      -ms-grid-rows: max-content max-content ${calcRem(273)} max-content max-content;
    }
  }

  ${mobile.all} {
    .grid {
      -ms-grid-rows: auto auto auto auto auto;
    }

    .title {
      -ms-grid-row: 1;
    }

    .description {
      -ms-grid-row: 2;
    }

    .title,
    .description {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture_javascript {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 3;
    }

    .javascript {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 4;
    }

    .picture_typescript {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 5;
    }

    .typescript {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 6;
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
