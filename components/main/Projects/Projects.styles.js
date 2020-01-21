import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .title {
    margin-top: 197px;
    grid-column: 3 / span 8;
    text-align: center;
  }

  .card .description {
    width: 66%;
  }

  .card_tracker {
    grid-column: 2 / span 6;
    order: 1;
  }

  .card_school {
    grid-column: 9 / span 3;
    order: 2;
  }
  .card_tracker,
  .card_school {
    margin-top: 91px;
  }

  .card_blog {
    margin-top: 99px;
    grid-column: 2 / span 3;
    order: 3;
  }

  .card_radio {
    position: relative;
    margin-top: 90px;
    grid-column: 2 / span 10;
    order: 5;
  }

  .card_radio .card-picture {
    z-index: 1;
    pointer-events: none;
  }

  .player-wrapper {
    position: absolute;
    z-index: 0;
    left: 4px;
    width: 70.5%;
    background-color: #f5f5f5;
    overflow: hidden;

    &::after,
    &::before {
      position: absolute;
      z-index: 2;
      content: '';
      display: block;
      width: 100%;
      pointer-events: none;
    }

    &::after,
    &::before {
      height: 20%;
      background-color: #f5f5f5;
    }

    &::before {
      top: 79%;
    }

    &::after {
      top: 0;
    }
  }

  .player {
    position: absolute;
    z-index: 1;
    left: -2px;
    width: calc(100% + 4px);
    height: 100%;
  }

  .posts {
    margin-top: 113px;
    grid-column-start: 6;
    grid-column-end: span 6;
    order: 4;
  }

  ${desktop.l} {
    .card_tracker {
      grid-column: 3 / span 5;
    }

    .card_school {
      width: 362px;
    }

    .card_blog {
      margin-top: 99px;
    }

    .posts {
      margin-top: 113px;
      grid-column-end: span 5;
    }

    .card_radio {
      grid-column: 3 / span 8;
    }

    .player-wrapper {
      top: 52px;
      height: 267px;
    }

    .player {
      top: 48px;
    }
  }

  ${desktop.m} {
    .player-wrapper {
      top: 48px;
      height: 252px;
    }

    .player {
      top: 44px;
    }
  }

  ${desktop.s} {
    .card_radio {
      margin-top: 96px;
    }

    .player-wrapper {
      top: 42px;
      height: 236px;

      &::before {
        top: 85%;
      }
    }

    .player {
      top: 40px;
    }
  }

  ${tablet.all} {
    .title {
      margin-top: ${calcRem(160)};
    }

    .card .description {
      width: 75%;
    }

    .card_tracker,
    .card_school {
      margin-top: ${calcRem(58)};
    }

    .card_blog {
      margin-top: ${calcRem(65)};
    }

    .card_radio {
      margin-top: ${calcRem(56)};
    }

    .player-wrapper {
      position: absolute;
      top: ${calcRem(36)};
      left: ${calcRem(4)};
      height: ${calcRem(179)};

      &::after {
        height: ${calcRem(8)};
      }

      &::before {
        height: ${calcRem(16)};
        top: calc(100% - ${calcRem(16)});
      }
    }

    .player {
      position: absolute;
      z-index: 1;
      left: ${calcRem(-2)};
      width: calc(100% + ${calcRem(4)});
      height: 100%;
    }

    .posts {
      margin-top: ${calcRem(98)}
    }
  }

  ${mobile.all} {
    .title,
    .card,
    .posts {
      grid-column: 1 / span 6;
    }

    .title {
      margin-top: ${calcRem(104)};
    }

    .card {
      margin-top: ${calcRem(33)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(73)};
      }
    }

    .card .description {
      width: 100%;
    }

    .card_radio {
      margin-top: ${calcRem(71)};
    }

    .player-wrapper {
      position: absolute;
      top: ${calcRem(32)};
      left: ${calcRem(4)};
      width: 61%;
      height: ${calcRem(124)};

      &::after {
        display: none;
      }

      &::before {
        height: ${calcRem(12)};
        top: calc(100% - ${calcRem(12)});
      }
    }

    .player {
      position: absolute;
      z-index: 1;
      left: ${calcRem(-2)};
      width: calc(100% + ${calcRem(4)});
      height: 100%;
    }

    .posts {
      margin-top: ${calcRem(42)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop,  mobile }}) => css`
  .title {
    -ms-grid-column: ${getGridValueForMs(3)};
    -ms-grid-column-span: ${getGridValueForMs(8)};
    -ms-grid-row: 1;
  }

  .card_tracker {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 2;
  }

  .card_school {
    -ms-grid-column: ${getGridValueForMs(9)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 2;
  }

  .card_blog {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
    -ms-grid-row: 3;
  }

  .card_radio {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(10)};
    -ms-grid-row: 4;
  }

  .posts {
    -ms-grid-column: ${getGridValueForMs(6)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
    -ms-grid-row: 3;
  }

  ${desktop.l} {
    .card_tracker {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .posts {
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .card_radio {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }
  }

  ${mobile.all} {
    .title,
    .card,
    .posts {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .card_tracker {
      -ms-grid-row: 2;
    }

    .card_school {
      -ms-grid-row: 3;
    }

    .card_blog {
      -ms-grid-row: 4;
    }

    .posts {
      -ms-grid-row: 5;
    }

    .card_radio {
      -ms-grid-row: 6;
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
