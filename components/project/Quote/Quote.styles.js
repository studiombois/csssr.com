import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const quoteLine = require.context('../../../public/images/project/gazprom-neft/quote/line?csssr-images')

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    background-image:
      url(${require('../../../static/icons/project/quote/circle.svg').default}),
      url(${require('../../../static/icons/project/quote/zigzag.svg').default}),
      url(${require('../../../static/icons/project/quote/line.svg').default});
    background-repeat: no-repeat, no-repeat, no-repeat;
  }

  .quote {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      background-image: url(${require('../../../static/icons/project/quote/quote-line.svg').default});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .author-name,
  .author-signature {
    display: block;
  }

  &.gazpromNeft {
    background-image: none;

    .text {
      font-family: 'Roboto', serif;
      font-weight: normal;
    }

    .quote {
      &::before {
        background-position: right;
      }
    }

    .author-name {
      font-weight: normal;
    }

    .author-signature {
      color: #9B9B9B;
      font-weight: 300;
    }
  }

  ${desktop.all} {
    .picture {
      grid-column: 2 / span 3;
    }

    .quote {
      margin-top: 121px;

      &::before {
        top: -36px;
        width: 31px;
        height: 579px;
      }
    }

    .author {
      margin-top: 84px;
    }

    .author-signature {
      margin-top: 4px;
    }

    &.flant {
      .text {
        font-size: 24px;
        line-height: 40px;
      }
    } 

    &.gazpromNeft {
      margin-top: 0;
      padding-top: 154px;

      .picture {
        grid-column: 2 / span 3;
        width: 304px;
        margin-top: 0;
      }

      .quote {
        grid-column: 5 / span 7;

        &::before {
          width: 33px;
          height: 328px;
        }
      }

      .text {
        font-size: 24px;
        line-height: 40px;
      }

      .author {
        margin-top: 28px;
      }

      .author-signature {
        margin-top: 1px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  ${desktop.l} {
    & {
      margin-top: 183px;
      background-position: 219px 183px, 1046px 0, 535px 757px;
    }

    .picture {
      margin-top: 269px;
      max-height: 656px;
    }

    .quote {
      grid-column: 7 / span 5;

      &::before {
        right: calc(100% + 96px);
      }
    }

    &.flant {
      & {
        background-position: 219px 268px, 1046px 35px, 535px 840px;
      }

      .picture {
        margin-top: 354px;
      }

      .quote {
        &::before {
          top: 51px;
        }
      }
    }

    &.gazpromNeft {
      .picture {
        width: 304px;
      }

      .quote {
        margin-top: 70px;

        &::before {
          top: -30px;
          right: calc(100% + 51px);
        }
      }
    }
  }

  ${desktop.m} {
    & {
      margin-top: 143px;
      background-position: 180px 277px, 1006px 0px, 398px 763px;
    }

    .picture {
      margin-top: 389px;
      max-height: 496px;
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + 64px);
      }
    }

    &.flant {
      & {
        background-position: 180px 442px, 1006px 30px, 398px 928px;
      }

      .picture {
        margin-top: 554px;
      }

      .quote {
        &::before {
          top: 130px;
        }
      }
    }

    &.gazpromNeft {
      .picture {
        width: 318px;
        height: 422px;
      }

      .quote {
        grid-column: 6 / span 6;
        margin-top: 33px;

        &::before {
          top: 0;
          right: calc(100% + 51px);
        }
      }
    }
  }

  ${desktop.s} {
    & {
      margin-top: 144px;
      background-position: 172px 277px, 999px 0px, 391px 763px;
    }

    .picture {
      margin-top: 429px;
      max-height: 456px;
    }

    .quote {
      grid-column: 6 / span 6;

      &::before {
        right: calc(100% + 53px);
      }
    }

    &.flant {
      & {
        background-position: 172px 522px, 999px 30px, 391px 969px;
      }

      .picture {
        margin-top: 634px;
      }

      .quote {
        &::before {
          top: 170px;
        }
      }
    }

    &.gazpromNeft {
      .picture {
        width: 296px;
        height: 422px;
      }

      .quote {
        grid-column: 6 / span 6;
        margin-top: 2px;
        margin-left: 30px;

        &::before {
          top: 0;
          right: calc(100% + 51px);
          height: 368px;
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
      grid-column: 2 / span 3;
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
        padding-top: ${calcRem(112)};
        margin-top: 0;
      }

      .picture {
        grid-column: 2 / span 4;
        width: ${calcRem(304)};
        height: ${calcRem(326)};
        margin-top: 0;
      }

      .quote {
        grid-column: 6 / span 6;
        margin-top: ${calcRem(32)};
        margin-left: ${calcRem(80)};

        &::before {
          top: 0;
          width: ${calcRem(33)};
          right: calc(100% + ${calcRem(46)});
          height: ${calcRem(230)};
          background-size: cover;
        }
      }

      .text {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author {
        margin-top: ${calcRem(16)};
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
        padding-top: ${calcRem(91)};
        margin-top: 0;
      }
      
      .picture {
        margin-top: 0;
      }

      .quote {
        margin-top: ${calcRem(40)};
        &::before {
          top: ${calcRem(-239)};
          right: calc(100% + ${calcRem(21)});
          height: ${calcRem(581)};
        }
      }

      .text {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author {
        margin-top: ${calcRem(16)};
      }

      .author-name {
        font-size: ${calcRem(16)};
        line-height: ${calcRem(24)};
      }

      .author-signature {
        margin-top: 0;
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

export const backgroundImagesStyles = () => {
  return css`
    ${backgroundCssSmart('.quoteBlock_gazpromNeft.gazpromNeft .quote::before', quoteLine)}
  `
}

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
