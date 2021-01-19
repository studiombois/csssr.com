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

    &_manager span {
      color: #F9555A;
    }

    &_dev span {
      color: #87DCB7;
    }

    &_qa span {
      color: #0054D7;
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
    .list {
      margin-left: -7px;
    }

    .image {
      margin-top: 127px;
    }

    .number-item {
      & > span {
        font-size: ${calcRem(48)};
        line-height: ${calcRem(64)};
      }

      &_withMargin {
        margin-top: 22px;
      }
    }
  }

  ${desktop.l} {
    .image {
      max-height: 536px;
    }
  }

  ${desktop.m} {
    .image {
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

      &_withMargin {
        margin-top: ${calcRem(12)};
      }
    }

    .image {
      max-height: ${calcRem(280)};
      margin-top: ${calcRem(20)};
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

      &_withMargin {
        margin-top: ${calcRem(12)};
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
