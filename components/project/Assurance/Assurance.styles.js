import { css, keyframes } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(152)};
  }

  .container {
    grid-column: 2 / span 10;
  }

  .assurance-wrapper {
    position: relative;
  }

  .quality {
    width: ${calcRem(800)};
  }

  .subheading,
  .message {
    margin-top: ${calcRem(40)};
  }

  .message {
    font-size: ${calcRem(24)};
    line-height: ${calcRem(40)};
    font-weight: normal;
  }

  .roi {
    position: absolute;
    top: ${calcRem(180)};
    left: ${calcRem(912)};
    width: ${calcRem(424)};
  }

  .percent {
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: ${calcRem(120)};
    line-height: ${calcRem(80)};
    font-weight: normal;
  }

  .label {
    margin-left: ${calcRem(25)};
    font-family: 'Roboto Slab', 'Georgia', serif;
    font-size: ${calcRem(64)};
    line-height: ${calcRem(40)};
    font-weight: normal;
    text-transform: uppercase;
  }

  .description {
    margin-top: ${calcRem(40)};
    font-weight: 900;
    letter-spacing: ${calcRem(1)};
    text-transform: uppercase;
  }

  .picture-container {
    position: relative;
    margin-top: ${calcRem(223)};

    &.animated {
      .screen-container_right {
        & picture {
          animation: ${bounce} 3s 2s ease;
        }
      }
    }
  }

  .screen-container {
    position: absolute;
    overflow: hidden;
    background-color: white;

    &_left {
      z-index: -2;
      top: ${calcRem(15)};
      left: 0;
      width: ${calcRem(987)};
      height: ${calcRem(690)};
      padding-top: ${calcRem(50)};
      padding-left: ${calcRem(20)};
    }

    &_right {
      z-index: -1;
      top: ${calcRem(190)};
      right: ${calcRem(50)};
      width: ${calcRem(985)};
      height: ${calcRem(660)};
      padding-top: ${calcRem(60)};
      padding-left: ${calcRem(20)};

      &::before {
        position: absolute;
        content: '';
        z-index: 1;
        top: 0;
        width: 100%;
        height: ${calcRem(50)};
        background-color: white;
      }

      & picture {
        transform: translateY(-${calcRem(50)});
      }
    }
  }

  ${desktop.l} {
    & {
      margin-top: ${calcRem(164)};
    }
  }

  ${desktop.m} {
    .quality {
      width: ${calcRem(740)};
    }

    .message {
      width: ${calcRem(520)};
    }

    .roi {
      top: ${calcRem(292)};
      left: ${calcRem(660)};
      width: ${calcRem(432)};
    }

    .picture-container {
      margin-top: ${calcRem(292)};
    }

    .screen-container {
      &_left {
        top: 0;
        left: ${calcRem(9)};
        width: ${calcRem(740)};
        height: ${calcRem(500)};
        padding-top: ${calcRem(50)};
        padding-left: ${calcRem(20)};
      }

      &_right {
        top: ${calcRem(140)};
        right: ${calcRem(40)};
        width: ${calcRem(732)};
        height: ${calcRem(490)};
        padding-top: ${calcRem(60)};
        padding-left: ${calcRem(20)};

        &::before {
          top: ${calcRem(-10)};
        }
      }
    }
  }

  ${desktop.s} {
    .quality {
      width: ${calcRem(650)};
    }

    .message {
      width: ${calcRem(520)};
    }

    .roi {
      top: ${calcRem(312)};
      left: ${calcRem(610)};
      width: ${calcRem(400)};
    }

    .picture-container {
      margin-top: ${calcRem(261)};
    }

    .screen-container {
      &_left {
        top: 0;
        left: 0;
        width: ${calcRem(695)};
        height: ${calcRem(465)};
        padding-top: ${calcRem(45)};
        padding-left: ${calcRem(20)};
      }

      &_right {
        top: ${calcRem(130)};
        right: ${calcRem(30)};
        width: ${calcRem(685)};
        height: ${calcRem(452)};
        padding-top: ${calcRem(60)};
        padding-left: ${calcRem(20)};

        &::before {
          top: ${calcRem(-12)};
        }
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(112)};
    }

    .quality {
      width: ${calcRem(460)};
    }

    .subheading,
    .message {
      margin-top: ${calcRem(16)};
    }

    .message {
      width: ${calcRem(350)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .roi {
      top: ${calcRem(142)};
      left: ${calcRem(460)};
      width: ${calcRem(300)};
    }

    .percent {
      font-size: ${calcRem(92)};
      line-height: ${calcRem(80)};
    }

    .label {
      margin-left: ${calcRem(20)};
      font-size: ${calcRem(48)};
      line-height: ${calcRem(24)};
    }

    .description {
      margin-top: ${calcRem(24)};
      line-height: ${calcRem(20)};
    }

    .picture-container {
      margin-top: ${calcRem(208)};

      &.animated {
      }
    }

    .screen-container {
      &_left {
        top: 0;
        left: 0;
        width: ${calcRem(532)};
        height: ${calcRem(360)};
        padding-top: ${calcRem(32)};
        padding-left: ${calcRem(15)};
      }

      &_right {
        top: ${calcRem(100)};
        right: ${calcRem(15)};
        width: ${calcRem(535)};
        height: ${calcRem(350)};
        padding-top: ${calcRem(60)};
        padding-left: ${calcRem(20)};

        &::before {
          top: ${calcRem(-20)};
        }
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(88)};
    }

    .container {
      grid-column: 1 / span 6;
    }

    .quality {
      width: 100%;
    }

    .subheading,
    .message {
      margin-top: ${calcRem(24)};
    }

    .message {
      width: auto;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      font-weight: 300;
    }

    .roi {
      position: static;
      top: 0;
      left: 0;
      width: 100%;
      margin-top: ${calcRem(56)};
    }

    .percent {
      font-size: ${calcRem(84)};
      line-height: ${calcRem(64)};
    }

    .label {
      margin-left: ${calcRem(15)};
      font-size: ${calcRem(40)};
      line-height: ${calcRem(24)};
    }

    .description {
      margin-top: ${calcRem(16)};
      line-height: ${calcRem(20)};
    }

    .picture-container {
      margin-top: ${calcRem(88)};

      &.animated {
      }
    }

    .screen-container {
      &_right {
        top: ${calcRem(20)};
        right: auto;
        left: ${calcRem(7)};
        width: ${calcRem(306)};
        height: ${calcRem(190)};
        padding-top: 0;
        padding-left: 0;

        &::before {
          content: none;
        }

        & picture {
          transform: translateY(0);
        }
      }
    }
  }
`

const bounce = keyframes`
  0 {
    transform: translate3d(0,-50px,0);
  }

  30% {
    transform: translate3d(0, -100px, 0);
  }

  70% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -50px, 0);
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
  const { breakpoints } = props.theme
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
