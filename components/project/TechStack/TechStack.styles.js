import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  .heading {
    grid-row: 1;
    grid-column: 2 / span 4;
    align-self: center;
  }

  .tech-list {
    display: grid;
    grid-row: 2;
    grid-gap: 24px 0;
    grid-column: 2 / span 4;
  }

  .duration,
  .team {
    display: grid;
    grid-template-rows: max-content max-content;
  }

  .duration {
    grid-row: 1;
    grid-column: 8 / span 5;
  }

  .team {
    grid-row: 2;
    grid-column: 8 / span 5;
    align-content: center;
  }

  .number {
    position: relative;
    grid-row: 1;
    font-family: 'Roboto Slab', serif;
    font-size: ${calcRem(64)};
    line-height: ${calcRem(84)};
    overflow-x: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100%;
      background-repeat: repeat-x;
      background-size: contain;
    }
  }

  .duration-number {
    &:before {
      height: 21px;
      background-image: url(${require('../../../static/icons/project/techStack/duration/curvy-line.svg').default});
    }
  }

  .team-number {
    &:before {
      height: 6px;
      background-image: url(${require('../../../static/icons/project/techStack/team/line.svg').default});
    }
  }

  .text {
    grid-row: 2;
  }

  ${desktop.all} {
    & {
      grid-template-rows: max-content max-content;
      grid-gap: 80px 16px;
      margin-top: ${calcRem(135)};
    }

    .duration-number {
      &:before {
        left: 125px;
      }
    }

    .team-number {
      &:before {
        left: 84px;
      }
    }
  }

  ${desktop.l} {
    & {
      margin-top: ${calcRem(141)};
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(184)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(184)};
    }
  }

  ${tablet.all} {
    & {
      grid-gap: ${calcRem(24)} ${calcRem(16)};
      margin-top: ${calcRem(126)};
    }

    .tech-list {
      grid-gap: ${calcRem(8)} 0;
    }

    .number {
      font-size: ${calcRem(32)};
      line-height ${calcRem(42)};
    }

    .duration-number {
      &:before {
        left: 62px;
        height: 13px;
      }
    }

    .team-number {
      &:before {
        left: 44px;
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(57)};
    }

    .heading,
    .tech-list {
      grid-column: 1 / span 6;
    }

    .heading {
      grid-row: 3;
      margin-top: ${calcRem(70)};
    }

    .tech-list {
      margin-top: ${calcRem(24)};
      grid-gap: ${calcRem(8)} 0;
      grid-row: 4;
    }

    .number {
      font-size: ${calcRem(32)};
      line-height ${calcRem(42)};
    }

    .duration {
      grid-row: 1;
      grid-column: 3 / span 4;
    }

    .team {
      grid-row: 2;
      grid-column: 3 / span 4;
      margin-top: ${calcRem(40)};
    }

    .duration-number {
      &:before {
        left: 62px;
        height: 13px;
      }
    }

    .team-number {
      &:before {
        height: 3px;
        left: 44px;
      }
    }
  }  
`

const ie11Styles = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .heading {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .text {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 2;
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
    -ms-grid-row-span: 4;
  }

  ${desktop.m} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${desktop.s} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .text {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .image {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
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
