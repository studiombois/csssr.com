import { css } from '@emotion/react'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors, breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    background-image:
      url(${require('../../../static/icons/project/quote/circle.svg').default}),
      url(${require('../../../static/icons/project/quote/zigzag.svg').default}),
      url(${require('../../../static/icons/project/quote/line.svg').default});
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  .picture {
    grid-column: 2 / span 3;
  }

  .quote {
    position: relative;
    margin-top: ${calcRem(121)};

    &::before {
      position: absolute;
      content: '';
      top: ${calcRem(-36)};
      width: ${calcRem(31)};
      height: ${calcRem(579)};
      background-image: url(${require('../../../static/icons/project/quote/quote-line.svg').default});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .author-name,
  .author-signature {
    display: block;
  }

  &.flant {
    .text {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(40)};
    }
  }

  &.gazpromNeft {
    align-items: flex-start;
    margin-top: ${calcRem(152)};
    background-image: none;

    .picture {
      grid-column: 2 / span 3;
      width: ${calcRem(304)};
      height: ${calcRem(422)};
    }

    .quote {
      grid-column: 6 / span 6;
      margin-top: 0;

      &::before {
        z-index: 1;
        top: ${calcRem(80)};
        left: ${calcRem(-80)};
        width: ${calcRem(31)};
        height: ${calcRem(30)};
        background-image: url(${require('../../../static/icons/project/quote/triangle.svg').default});
      }

      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: ${calcRem(-54)};
        width: ${calcRem(4)};
        height: calc(100% - ${calcRem(41)});
        background-color: #6490DF;
      }
    }

    .text {
      font-family: 'Roboto', serif;
      font-size: ${calcRem(24)};
      line-height: ${calcRem(40)};
      font-weight: normal;
    }

    .author {
      margin-top: ${calcRem(64)};
    }

    .author-name {
      line-height: ${calcRem(40)};
      font-weight: normal;
    }

    .author-signature {
      margin-top: 0;
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      font-weight: 300;
      color: ${colors.secondary.gray};
    }
  }

  ${desktop.l} {
    & {
      margin-top: ${calcRem(183)};
      background-position: ${calcRem(219)} ${calcRem(183)}, ${calcRem(1046)} 0, ${calcRem(535)} ${calcRem(757)};
    }

    .picture {
      margin-top: ${calcRem(269)};
      max-height: ${calcRem(656)};
    }

    .quote {
      grid-column: 7 / span 5;

      &::before {
        right: calc(100% + ${calcRem(96)});
      }
    }

    &.flant {
      & {
        background-position: ${calcRem(219)} ${calcRem(268)}, ${calcRem(1046)} ${calcRem(35)}, ${calcRem(535)} ${calcRem(840)};
      }

      .picture {
        margin-top: ${calcRem(354)};
      }

      .quote {
        &::before {
          top: ${calcRem(51)};
        }
      }
    }

    &.gazpromNeft {
      .picture {
        grid-column: 3 / span 3;
        margin-top: 0;
      }

      .quote {
        margin-top: ${calcRem(22)};
        margin-left: ${calcRem(-40)};
      }
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(143)};
      background-position: ${calcRem(180)} ${calcRem(277)}, ${calcRem(1006)} 0, ${calcRem(398)} ${calcRem(763)};
    }

    .picture {
      margin-top: ${calcRem(389)};
      max-height: ${calcRem(496)};
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + ${calcRem(64)});
      }
    }

    &.flant {
      & {
        background-position: ${calcRem(180)} ${calcRem(442)}, ${calcRem(1006)} ${calcRem(30)}, ${calcRem(398)} ${calcRem(928)};
      }

      .picture {
        margin-top: ${calcRem(554)};
      }

      .quote {
        &::before {
          top: ${calcRem(130)};
        }
      }
    }

    &.gazpromNeft {
      .picture {
        margin-top: ${calcRem(58)};
      }

      .quote {
        margin-left: ${calcRem(-50)};

        &::before {
          top: ${calcRem(161)};
        }
      }
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(144)};
      background-position: ${calcRem(172)} ${calcRem(277)}, ${calcRem(999)} 0, ${calcRem(391)} ${calcRem(763)};
    }

    .picture {
      margin-top: ${calcRem(429)};
      max-height: ${calcRem(456)};
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + ${calcRem(53)});
      }
    }

    &.flant {
      & {
        background-position: ${calcRem(172)} ${calcRem(522)}, ${calcRem(999)} ${calcRem(30)}, ${calcRem(391)} ${calcRem(969)};
      }

      .picture {
        margin-top: ${calcRem(634)};
      }

      .quote {
        &::before {
          top: ${calcRem(170)};
        }
      }
    }

    &.gazpromNeft {
      .picture {
        margin-top: ${calcRem(98)};
      }

      .quote {
        margin-left: ${calcRem(-10)};

        &::before {
          top: ${calcRem(201)};
        }
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(127)};
      background-position: ${calcRem(136)} ${calcRem(155)}, ${calcRem(759)} 0, ${calcRem(271)} ${calcRem(478)};
      background-size: auto, ${calcRem(90)} ${calcRem(19)}, ${calcRem(48)} ${calcRem(48)};
    }

    .picture {
      margin-top: ${calcRem(239)};
      max-height: ${calcRem(344)};
    }

    .quote {
      margin-top: ${calcRem(88)};
      grid-column: 7 / span 5;

      &::before {
        top: ${calcRem(-40)};
        right: calc(100% +  ${calcRem(64)});
        width: ${calcRem(21)};
        height: ${calcRem(392)};
      }
    }

    .author {
      margin-top: ${calcRem(53)};
    }

    .author-signature {
      margin-top: ${calcRem(9)};
    }

    &.flant {
      & {
        background-position: ${calcRem(136)} ${calcRem(302)}, ${calcRem(759)} 0, ${calcRem(271)} ${calcRem(627)};
      }

      .text {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .picture {
        margin-top: ${calcRem(386)};
      }

      .quote {
        &::before {
          top: ${calcRem(106)};
        }
      }
    }

    &.gazpromNeft {
      & {
        margin-top: ${calcRem(119)};
      }

      .picture {
        width: ${calcRem(194)};
        height: ${calcRem(269)};
        margin-top: ${calcRem(3)};
      }

      .quote {
        margin-left: ${calcRem(-40)};

        &::before {
          top: ${calcRem(94)};
          left: ${calcRem(-64)};
        }

        &::after {
          left: ${calcRem(-38)};
          height: calc(100% - ${calcRem(34)});
        }
      }

      .text {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author {
        margin-top: ${calcRem(48)};
      }

      .author-name {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author-signature {
        font-size: ${calcRem(14)};
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(97)};
      background-position: ${calcRem(16)} ${calcRem(3)}, ${calcRem(224)} 0, ${calcRem(252)} ${calcRem(362)};
      background-size: auto, ${calcRem(90)} ${calcRem(19)}, ${calcRem(48)} ${calcRem(48)};
    }

    .picture {
      margin-top: ${calcRem(55)};
      grid-column: 2 / span 4;
      max-height: ${calcRem(336)};
    }

    .quote {
      margin-top: ${calcRem(24)};
      grid-column: 2 / span 5;

      &::before {
        top: ${calcRem(-272)};
        right: calc(100% + ${calcRem(19)});
        width: ${calcRem(23)};
        height: ${calcRem(552)};
        background-image: url(${require('../../../static/icons/project/quote/mobile.all/quote-line.svg').default});
      }
    }

    .author {
      margin-top: ${calcRem(53)};
    }

    .author-signature {
      margin-top: ${calcRem(9)};
    }

    &.flant {
      .text {
        margin-top: ${calcRem(5)};
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }
    }

    &.gazpromNeft {
      & {
        margin-top: ${calcRem(88)};
      }

      .picture {
        width: ${calcRem(216)};
        height: ${calcRem(302)};
        max-height: auto;
        margin-top: 0;
        margin-left: ${calcRem(-20)};
      }

      .quote {
        grid-column: 2 / span 5;
        margin-top: ${calcRem(73)};
        margin-left: ${calcRem(-20)};

        &::before {
          top: ${calcRem(-170)};
          left: ${calcRem(-39)};
          width: ${calcRem(27)};
          height: ${calcRem(26)};
          transform: scale(-1, -1);
        }

        &::after {
          top: ${calcRem(-242)};
          left: ${calcRem(-38)};
          height: calc(100% + ${calcRem(242)});
        }
      }

      .text {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author {
        margin-top: ${calcRem(24)};
        padding-bottom: ${calcRem(39)};
      }

      .author-name {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author-signature {
        font-size: ${calcRem(12)};
        line-height: ${calcRem(16)};
      }
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.l} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.m} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.s} {
    .quote {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${tablet.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .quote {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${mobile.all} {
    .picture {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .quote {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }
`
const StyledQuote =  props => {
  const { colors, breakpoints } = props.theme

  return css`
    ${base({ colors, breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
export default StyledQuote
