import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, lng }) => css`

  & {
    overflow-x: hidden;
  }

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
    font-weight: 400;

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
      height: 25px;
      background-image: url(${require('../../../static/icons/project/techStack/duration/curvy-line.svg').default});
    }
  }

  .team-number {
    &:before {
      margin-top: ${calcRem(5)};
      height: 4px;
      background-position: -8px 0;
      background-image: url(${require('../../../static/icons/project/techStack/team/line.svg').default});
    }
  }

  .text {
    grid-row: 2;
  }

  ${desktop.all} {
    & {
      margin-top: ${calcRem(135)};
    }

    .tech-list {
      margin-top: ${calcRem(37)};
    }

    .duration {
      margin-top: ${calcRem(12)};
    }

    .text {
      margin-top: ${calcRem(-3)};
    }

    .team {
      margin-top: ${calcRem(68)};
    }

    .duration-number {
      &:before {
        left: ${calcRem(100)};
      }
    }

    .team-number {
      &:before {
        left: 77px;
      }
    }
  }

  ${desktop.l} {
    & {
      margin-top: ${calcRem(128)};
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(170)};
    }

    .duration {
      margin-top: ${calcRem(22)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(168)};
    }

    .duration {
      margin-top: ${calcRem(27)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(103)};
    }

    .duration {
      margin-top: ${calcRem(25)};
    }

    .tech-list {
      display: flex;
      flex-direction: column;
      margin-top: ${calcRem(-9)};
    }

    .tech-item {
      margin-bottom: ${calcRem(8)};
    }

    .number {
      font-size: ${calcRem(32)};
      line-height: ${calcRem(42)};
    }

    .text {
      margin-top: ${calcRem(5)};
    }

    .duration-number {
      &:before {
        background-image: url(${require('../../../static/icons/project/techStack/duration/tablet/curvy-line-png.png')});
        left: 49px;
        height: 17px;
      }
    }

    .team {
      margin-top: ${calcRem(40)};
    }

    .team-number {
      &:before {
        background-image: url(${require('../../../static/icons/project/techStack/team/mobile/line.svg').default});
        margin-top: 0;
        left: 36px;
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
      line-height: ${calcRem(42)};
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
        background-image: url(${require('../../../static/icons/project/techStack/duration/mobile/curvy-line-png.png')});
        left: 48px;
        height: 17px;
      }
    }

    .text {
      margin-top: 6px;

      span {
        display: inline-block;
        width: 100%;
      }
    }

    .duration .text {
      white-space: ${lng === 'ru' ? 'normal' : 'nowrap'};
    }

    .team-number {
      &:before {
        left: 36px;
        margin: 0;
        min-width: 385px;
        background-image: url(${require('../../../static/icons/project/techStack/team/mobile/line.svg').default});
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
  const { lng } = props

  return css`
    ${base({ breakpoints, colors, lng })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
