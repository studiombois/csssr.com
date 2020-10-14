import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const line_dash = require.context('../../../public/images/project/common-pics/lines/dash?csssr-images')
const line_curly = require.context('../../../public/images/project/common-pics/lines/curly?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }, language }) => css`

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
      background-size: contain;
    }
  }

  .duration-number {
    &:before {
      height: 25px;
      background-repeat: no-repeat;
    }
  }

  .team-number {
    &:before {
      margin-top: ${calcRem(5)};
      width: calc(100% + ${calcRem(23)});
      height: ${calcRem(4)};
      background-repeat: repeat-x;
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
      margin-top: ${calcRem(40)};
    }

    .duration {
      margin-top: ${calcRem(14)};
    }

    .text {
      margin-top: ${calcRem(-3)};
    }

    .team {
      margin-top: ${calcRem(73)};
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
      margin-top: ${calcRem(125)};
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(160)};
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
        left: ${calcRem(49)};
        top: calc(50% - ${calcRem(4)});
        height: ${calcRem(17)};
        background-size: auto ${calcRem(17)};
        background-position: left;
      }
    }

    .team {
      margin-top: ${calcRem(40)};
    }

    .team-number {
      &:before {
        margin-top: 0;
        left: ${calcRem(36)};
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
      margin-left: ${calcRem(-10)};
    }

    .team {
      grid-row: 2;
      grid-column: 3 / span 4;
      margin-top: ${calcRem(40)};
      margin-left: ${calcRem(-10)};
    }

    .duration-number {
      &:before {
        left: ${calcRem(49)};
        height: ${calcRem(17)};
        background-size: auto ${calcRem(17)};
        background-position: left;
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
      white-space: ${language === 'ru' ? 'normal' : 'nowrap'};
    }

    .team-number {
      &:before {
        left: ${calcRem(36)};
        margin: 0;
        min-width: ${calcRem(385)};
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

export const backgroundImagesStyles = () => {
  return css`
    ${backgroundCssSmart('.team-number::before', line_dash)}
    ${backgroundCssSmart('.duration-number::before', line_curly)}
  `
}

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, colors, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
