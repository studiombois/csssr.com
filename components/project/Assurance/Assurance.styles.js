import { css } from '@emotion/core'
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

  .heading {
    font-weight: bold;
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
    width: ${calcRem(1491)};
    height: ${calcRem(881)};
    margin-top: ${calcRem(223)};

    &.animated {
      .screen {
        transform: translateY(0);
      }
    }
  }

  .screen {
    position: absolute;
    transition: transform 0.7s 0.5s ease-out;
    image-rendering: -webkit-optimize-contrast;

    &_left {
      z-index: -2;
      top: 0;
      left: 0;
    }

    &_right {
      z-index: -1;
      right: 0;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 164px;
    }

    .screen {  
      &_left {
        width: 1124px;
        height: 699px;
        transform: translateY(104px);
      }
  
      &_right {
        top: 177px;
        width: 1044px;
        height: 704px;
        transform: translateY(-104px);
      }
    }
  }

  ${desktop.m} {
    .quality {
      width: 740px;
    }

    .message {
      width: 520px;
    }

    .roi {
      top: 292px;
      left: 660px;
      width: 432px;
    }

    .picture-container {
      margin-top: 292px;
      width: 1104px;
      height: 657px;
    }

    .screen {
      &_left {
        width: 835px;
        height: 519px;
        transform: translateY(80px);
      }

      &_right {
        top: 137px;
        width: 771px;
        height: 520px;
        transform: translateY(-80px);
      }
    }
  }

  ${desktop.s} {
    .quality {
      width: 650px;
    }

    .message {
      width: 520px;
    }

    .roi {
      top: 312px;
      left: 610px;
      width: 400px;
    }

    .picture-container {
      margin-top: 261px;
      width: 1022px;
      height: 608px;
    }

    .screen {
      &_left {
        width: 773px;
        height: 479px;
        transform: translateY(75px);
      }

      &_right {
        top: 128px;
        width: 711px;
        height: 478px;
        transform: translateY(-75px);
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
      width: ${calcRem(783)};
      height: ${calcRem(466)};
    }

    .screen {
      &_left {
        width: ${calcRem(594)};
        height: ${calcRem(367)};
        transform: translateY(${calcRem(57)});
      }

      &_right {
        top: ${calcRem(97)};
        width: ${calcRem(547)};
        height: ${calcRem(367)};
        transform: translateY(${calcRem(-57)});
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
      width: ${calcRem(330)};
      height: ${calcRem(222)};
    }

    .screen {
      &_right {
        width: ${calcRem(330)};
        height: ${calcRem(222)};
      }
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

const StyledAssurance = props => {
  const { breakpoints } = props.theme
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}


export default StyledAssurance