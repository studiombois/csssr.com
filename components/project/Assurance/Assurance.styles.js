import { css } from '@emotion/react'
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
      .screen-container_left {
        transform: translateY(0);
      }

      .screen-container_right {
        transform: translateY(0);
      }
    }
  }

  .screen-container {
    position: absolute;
    background-color: white;

    &_left {
      z-index: -2;
      top: 0;
      left: 0;
      width: ${calcRem(1124)};
      height: ${calcRem(699)};
      transform: translateY(104px);
      transition: transform 0.7s 0.5s ease-out;
    }

    &_right {
      z-index: -1;
      top: ${calcRem(177)};
      right: 0;
      width: ${calcRem(1044)};
      height: ${calcRem(704)};
      transform: translateY(-104px);
      transition: transform 0.7s 0.5s ease-out;
    }
  }

  .designer-laptop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .designer-screenshot {
    position: absolute;
    z-index: -1;
    top: ${calcRem(59)};
    left: ${calcRem(24)};
    width: ${calcRem(987)};
    height: ${calcRem(616)};
  }

  .project-laptop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .project-container {
    position: absolute;
    top: ${calcRem(57)};
    left: ${calcRem(20)};
    width: ${calcRem(991)};
    height: ${calcRem(613)};
    overflow: hidden;
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
      width: ${calcRem(1104)};
      height: ${calcRem(657)};
    }

    .screen-container {
      &_left {
        width: ${calcRem(835)};
        height: ${calcRem(519)};
        transform: translateY(80px);
      }

      &_right {
        top: ${calcRem(137)};
        width: ${calcRem(771)};
        height: ${calcRem(520)};
        transform: translateY(-80px);
      }
    }

    .designer-screenshot {
      top: ${calcRem(44)};
      left: ${calcRem(18)};
      width: ${calcRem(733)};
      height: ${calcRem(457)};
    }

    .project-container {
      top: ${calcRem(42)};
      left: ${calcRem(15)};
      width: ${calcRem(732)};
      height: ${calcRem(453)};
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
      width: ${calcRem(1022)};
      height: ${calcRem(608)};
    }

    .screen-container {
      &_left {
        width: ${calcRem(773)};
        height: ${calcRem(481)};
        transform: translateY(75px);
      }

      &_right {
        top: ${calcRem(128)};
        width: ${calcRem(711)};
        height: ${calcRem(480)};
        transform: translateY(-75px);
      }
    }

    .designer-screenshot {
      top: ${calcRem(41)};
      left: ${calcRem(17)};
      width: ${calcRem(679)};
      height: ${calcRem(423)};
    }

    .project-container {
      top: ${calcRem(39)};
      left: ${calcRem(14)};
      width: ${calcRem(675)};
      height: ${calcRem(418)};
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

      &.animated {
      }
    }

    .screen-container {
      &_left {
        width: ${calcRem(594)};
        height: ${calcRem(369)};
        transform: translateY(57px);
      }

      &_right {
        top: ${calcRem(97)};
        width: ${calcRem(547)};
        height: ${calcRem(369)};
        transform: translateY(-57px);
      }
    }

    .designer-screenshot {
      top: ${calcRem(31)};
      left: ${calcRem(13)};
      width: ${calcRem(521)};
      height: ${calcRem(325)};
    }

    .project-container {
      top: ${calcRem(30)};
      left: ${calcRem(11)};
      width: ${calcRem(519)};
      height: ${calcRem(321)};
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

    .screen-container {
      &_right {
        top: 0;
        width: ${calcRem(330)};
        height: ${calcRem(222)};
        transform: translateY(0);
      }
    }

    .project-container {
      top: ${calcRem(18)};
      left: ${calcRem(6)};
      width: ${calcRem(313)};
      height: ${calcRem(193)};
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
