import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .listItem::before {
    opacity: 1;
    z-index: 1;
  }

  .listItem::after {
    opacity: 0;
    z-index: 2;
    transition: opacity 700ms ease-out;
  }

  .listItem::before,
  .listItem::after {
    content: '';
    position: absolute;
    top: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .squareItem::before {
    background-image: url('../../../static/icons/way-of-work/transparency/square.svg');
  }

  .circleItem::before {
    background-image: url('../../../static/icons/way-of-work/transparency/circle.svg');
  }

  .arcItem::before {
    background-image: url('../../../static/icons/way-of-work/transparency/arc.svg');
  }

  .triangleItem::before {
    background-image: url('../../../static/icons/way-of-work/transparency/triangle.svg');
  }

  .squareItem::after {
    background-image: url('../../../static/icons/way-of-work/transparency/square-fill.svg');
  }

  .circleItem::after {
    background-image: url('../../../static/icons/way-of-work/transparency/circle-fill.svg');
  }

  .arcItem::after {
    background-image: url('../../../static/icons/way-of-work/transparency/arc-fill.svg');
  }

  .triangleItem::after {
    background-image: url('../../../static/icons/way-of-work/transparency/triangle-fill.svg');
  }

  .listItem.active::after {
    opacity: 1;
  }

  ${mobile.all} {
    .heading {
      grid-column: 1 / span 4;
      grid-row: 1;
      margin-bottom: ${calcRem(40)};
    }

    .list {
      grid-column: 1 / span 5;
      grid-row: 2;
    }

    .listItem:not(:last-child) {
      margin-bottom: ${calcRem(87)};
    }

    .figures {
      grid-column: 6;
      grid-row: 2;
    }
  }

  ${tablet.all} {
    .heading {
      grid-column: 3 / span 5;
      grid-row: 1;
      margin-bottom: ${calcRem(40)};
    }

    .list {
      grid-column: 3 / span 4;
      grid-row: 2;
    }

    .listItem:not(:last-child) {
      margin-bottom: ${calcRem(56)};
    }

    .listItem {
      position: relative;
    }

    .listItem::before,
    .listItem::after {
      content: '';
      top: 0;
      left: ${calcRem(-48)};
      width: ${calcRem(32)};
      height: ${calcRem(32)};
    }

    .figures {
      grid-column: 8 / span 4;
      grid-row: 1 / span 2;
    }
  }

  ${desktop.all} {
    .heading {
      grid-column: 3 / span 6;
      grid-row: 1;
      margin-bottom: ${calcRem(120)};
    }

    .list {
      grid-column: 3 / span 4;
      grid-row: 2;
    }

    .listItem:not(:last-child) {
      margin-bottom: ${calcRem(104)};
    }

    .listItem {
      position: relative;
    }

    .listItem::before,
    .listItem::after {
      top: ${calcRem(4)};
      left: ${calcRem(-76)};
      width: ${calcRem(42)};
      height: ${calcRem(42)};
    }

    .figures {
      grid-column: 8 / span 4;
      grid-row: 1 / span 2;
      margin-top: ${calcRem(51)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${mobile.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .list {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 2;
    }

    .figures {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 1;
    }

    .list {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
    }

    .figures {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
    }
  }

  ${desktop.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 1;
    }

    .list {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 2;
    }

    .figures {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
