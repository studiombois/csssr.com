import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    grid-template-rows: max-content max-content max-content;
  }

  .team-breakdown {
    grid-column: 8 / span 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-row: 1;
  }

  .list {
    display: grid;
    grid-template-columns: 28px 1fr;
    grid-template-rows: max-content max-content max-content max-content;
    grid-gap: 8px 22px;
    align-items: baseline;
    margin-top: ${calcRem(56)};
  }

  .number-item {
    justify-self: end;

    &:nth-of-type(1) span {
      color: #41CE7F;
    }

    &:nth-of-type(3) span {
      color: #FFC045;
    }

    &:nth-of-type(5) span {
      color: #F45B53;
    }

    &:nth-of-type(7) span {
      color: #0254D8;
    }

    &:nth-of-type(9) span {
      color: #41CE7F;
    }

    & span {
      font-family: 'Roboto Slab', serif;
      font-size: ${calcRem(48)};
      line-height: ${calcRem(64)};
    }
  }

  .image {
    grid-column: 2 / span 4;
    grid-row: 1;
  }

  ${desktop.all} {
    .number-item {
      & > span {
        font-size: ${calcRem(48)};
        line-height: ${calcRem(64)};
      }
    }
  }

  ${desktop.l} {
    .heading {
      margin-top: ${calcRem(22)};
    }

    .image {
      max-height: 536px;
    }
  }

  ${desktop.m} {
    .image {
      margin-top: ${calcRem(51)};
      max-height: 400px;
    }
  }

  ${desktop.s} {
    .image {
      margin-top: ${calcRem(-13)};
      max-height: 368px;
    }
  }

  ${tablet.all} {
    .heading {
      margin-top: ${calcRem(15)};
    }

    .list {
      grid-template-columns: 14px 1fr;
      grid-gap: 8px 17px;
      margin-top: ${calcRem(16)};
    }

    .text-item {
      & > span {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }
    }

    .number-item {
      & > span {
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }
    }

    .image {
      max-height: ${calcRem(280)};
    }
  }

  ${mobile.all} {
    .team-breakdown {
      grid-column: 1 / span 6;
    }

    .list {
      grid-template-columns: 14px 1fr;
      grid-gap: 8px 17px;
      margin-top: ${calcRem(16)};
    }

    .number-item {
      & > span {
        font-size: ${calcRem(24)};
        line-height: ${calcRem(32)};
      }
    }

    .text-item {
      & > span {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }
    }

    .image {
      display: none;
    }
  }
`

const ie11Styles = ({ breakpoints: { mobile }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .team-breakdown {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .image {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  ${mobile.all} {
    .team-breakdown {
      position: relative;
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
