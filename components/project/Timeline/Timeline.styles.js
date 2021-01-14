import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    margin-top: ${calcRem(192)};
    overflow: hidden;
  }

  .heading {
    grid-column: 2 / span 10;
  }

  .container {
    transform: translateX(calc((100vw - var(--width-container)) / -2));
    grid-column: 1 / span 12;
    width: 100vw;
    margin-top: ${calcRem(64)};

    &.animated {
      .period {
        opacity: 1;
      }

      .scale-item {
        &::before,
        &::after {
          height: 100%;
        }
      }

      .scale {
        width: 100%;
      }

      .title-item {
        opacity: 1;
      }
    }
  }

  .period-list {
    display: flex;
  }

  .period-item {
    display: flex;
    justify-content: space-between;
    width: 100%;

    &:nth-of-type(1) {
      .period {
        left: 50%;
        transform: translateX(-50%);
        transition: opacity 0.5s 0.5s linear;
      }
    }

    &:nth-of-type(2) {
      .period {
        &:nth-of-type(1) {
          margin-left: ${calcRem(-75)};
          transition: opacity 0.5s 2s linear;
        }

        &:nth-of-type(2) {
          margin-right: ${calcRem(-55)};
          transition: opacity 1s 3s linear;
        }
      }
    }

    &:nth-of-type(3) {
      .period {
        left: 50%;
        transform: translateX(-50%);
        transition: opacity 1s 3.5s linear;
      }
    }
  }

  .period {
    position: relative;
    display: inline-block;
    font-size: ${calcRem(24)};
    line-height: ${calcRem(40)};
    font-weight: bold;
    opacity: 0;
  }

  .process {
    position: relative;
    height: ${calcRem(224)};
    margin-top: ${calcRem(12)};
  }

  .scale-list {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .scale-item {
    position: relative;
    width: 100%;

    &::before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: ${calcRem(2)};
      height: 0;
      background-color: ${colors.secondary.darken100};
    }

    &:nth-of-type(1) {
      &::before {
        left: 50%;
        transform: translateX(-50%);
        transition: height 0.5s 0.7s linear;
      }

      .scale {
        top: ${calcRem(32)};
        transition: width 0.5s 1s linear;
      }
    }

    &:nth-of-type(2) {
      &::before {
        z-index: 1;
        transition: height 0.5s 2.3s linear;
      }

      &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        z-index: 1;
        width: ${calcRem(2)};
        height: 0;
        background-color: ${colors.secondary.darken100};
        transition: height 0.5s 3s linear;
      }

      .scale {
        top: ${calcRem(72)};
        background-color: #6490DF;
        transition: width 0.7s 2.5s linear;
      }
    }

    &:nth-of-type(3) {
      &::before {
        left: 50%;
        transform: translateX(-50%);
        transition: height 1s 3.5s linear;
      }

      .scale {
        top: ${calcRem(112)};
        border-top: 2px solid #6490DF;
        border-bottom: 2px solid #6490DF;
        box-sizing: border-box;
        transition: width 0.5s 3.5s linear;
      }
    }
  }

  .scale {
    position: relative;
    width: 0;
    height: ${calcRem(80)};
    background-color: #F0F4FC;
  }

  .title-list {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .title-item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${calcRem(80)};
    opacity: 0;

    &:nth-of-type(1) {
      top: ${calcRem(32)};
      transition: opacity 0.5s 1.5s linear;
    }

    &:nth-of-type(2) {
      top: ${calcRem(72)};
      transition: opacity 1s 2.5s linear;

      .title {
        color: #ffffff;
        font-weight: 500;
      }
    }

    &:nth-of-type(3) {
      top: ${calcRem(112)};
      transition: opacity 1s 3.5s linear;

      .title {
        color: #1957C6;
      }
    }
  }

  .title {
    font-size: ${calcRem(22)};
    line-height: ${calcRem(32)};
    font-weight: normal;
  }

  ${desktop.l} {
    --width-container: ${calcRem(1792)};

    & {
      margin-top: ${calcRem(150)};
    }
  }

  ${desktop.m} {
    --width-container: ${calcRem(1328)};
  }

  ${desktop.s} {
    --width-container: ${calcRem(1232)};
  }

  ${tablet.all} {
    --width-container: ${calcRem(944)};

    & {
      margin-top: ${calcRem(128)};
    }

    .container {
      margin-top: ${calcRem(32)};
    }

    .period-item {
      &:nth-of-type(2) {
        .period {
          &:nth-of-type(1) {
            margin-left: ${calcRem(-50)};
            transition: opacity 1s 2s linear;
          }

          &:nth-of-type(2) {
            margin-right: ${calcRem(-38)};
            transition: opacity 1s 2s linear;
          }
        }
      }
    }

    .period {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .process {
      height: ${calcRem(156)};
      margin-top: ${calcRem(16)};
    }

    .scale-item {
      &:nth-of-type(1) {
        .scale {
          top: ${calcRem(29)};
        }
      }

      &:nth-of-type(2) {
        .scale {
          top: ${calcRem(52)};
        }
      }

      &:nth-of-type(3) {
        .scale {
          top: ${calcRem(76)};
        }
      }
    }

    .scale {
      height: ${calcRem(48)};
    }

    .title-item {
      height: ${calcRem(48)};

      &:nth-of-type(1) {
        top: ${calcRem(29)};
      }

      &:nth-of-type(2) {
        top: ${calcRem(52)};
      }

      &:nth-of-type(3) {
        top: ${calcRem(76)};
      }
    }

    .title {
      font-size: ${calcRem(14)};
    }
  }

  ${mobile.all} {
    --width-container: ${calcRem(328)};

    & {
      margin-top: ${calcRem(88)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .container {
      transform: none;
      grid-column: 1 / span 6;
      display: flex;
      width: auto;
      margin-top: ${calcRem(24)};
    }

    .period-list {
      flex-direction: column;
      width: ${calcRem(112)};
    }

    .period-item {
      flex-direction: column;
      height: ${calcRem(144)};

      &:nth-of-type(1) {
        .period {
          top: 50%;
          left: auto;
          transform: translateY(-50%);
        }
      }

      &:nth-of-type(2) {
        .period {
          &:nth-of-type(1) {
            margin-left: 0;
            margin-top: ${calcRem(-27)};
          }

          &:nth-of-type(2) {
            top: ${calcRem(-11)};
            margin-right: 0;
            margin-top: 0;
          }
        }
      }

      &:nth-of-type(3) {
        .period {
          top: 50%;
          left: auto;
          transform: translateY(-50%);
        }
      }
    }

    .period {
      margin-top: ${calcRem(-18)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(20)};
      opacity: 1;
    }

    .process {
      width: ${calcRem(216)};
      height: auto;
      margin-top: 0;
    }

    .scale-list {
      flex-direction: column;
    }

    .scale-item {
      &::before {
        top: 50%;
        left: ${calcRem(-112)};
        width: ${calcRem(112)};
        height: ${calcRem(2)};
      }

      &:nth-of-type(1) {
        &::before {
          left: ${calcRem(-112)};
          transform: translateX(0);
          transform: translateY(-50%);
          transition: none;
        }
      }

      &:nth-of-type(2) {
        &::before {
          top: 0;
          width: calc(100% + ${calcRem(112)});
          transition: none
        }

        &::after {
          top: auto;
          bottom: 0;
          right: auto;
          left: ${calcRem(-112)};
          width: calc(100% + ${calcRem(112)});
          height: ${calcRem(2)};
          transition: none;
        }
      }

      &:nth-of-type(3) {
        &::before {
          left: ${calcRem(-112)};
          transform: translateX(0);
          transform: translateY(-50%);
          transition: none;
        }

        .scale {
          border-top: 0;
          border-bottom: 0;
          border-left: 2px solid #6490DF;
          border-right: 2px solid #6490DF;
        }
      }
    }

    .scale {
      position: static;
      width: 100%;
      height: ${calcRem(144)};
    }

    .title-list {
      flex-direction: column;
    }

    .title-item {
      position: static;
      align-items: center;
      height: ${calcRem(144)};
      opacity: 1;

      &:nth-of-type(1) {
        transition: none;
      }

      &:nth-of-type(2) {
        transition: none;
      }

      &:nth-of-type(3) {
        transition: none;
      }
    }

    .title {
      font-size: ${calcRem(14)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .paragraphs-group_1 {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.l} {
    .title,
    .paragraphs-group_0 {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.m} {
    .title,
    .paragraphs-group_0 {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.s} {
    .title,
    .paragraphs-group_0 {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${tablet.all} {
    .title,
    .paragraphs-group_0 {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .paragraphs-group_1 {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    .title,
    .paragraphs-group_0,
    .paragraphs-group_1 {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .picture {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }
`

export default props => {
  const { breakpoints, colors } = props.theme
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, language, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
