import { css } from '@emotion/react'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, language}) => css`
  & {
    background-image:
      url(${require('../../../static/icons/project/about-project/line.svg').default}),
      url(${require('../../../static/icons/project/about-project/circle.svg').default});
    background-repeat: no-repeat, no-repeat;
  }

  .paragraph {
    color: #000000;
  }

  .paragraph a {
    color: #0076FF;
    text-decoration: underline;

    &:hover {
      color: #0254D8;
    }
  }

  ${desktop.all} {
    .paragraphs-group_0 {
      margin-top: 58px;

      .paragraph:not(:first-of-type) {
        margin-top: 16px;
      }
    }

    .paragraphs-group_1 {
      margin-top: 157px;
      grid-column: 2 / span 5;

      .paragraph:not(:first-of-type) {
        margin-top: 24px;
      }
    }

    .paragraphs-group_1.paragraphs-group_mindbox {
      margin-top: 95px;
    }

    .paragraphs-group_mindbox {
      grid-column: 1 / span 7;
    }

    .paragraphs-group_mindbox p {
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        grid-column: 2 / span 5;
      }

      &:nth-of-type(4) {
        margin-top: 96px !important;
      }

      &:nth-of-type(4),
      &:nth-of-type(5) {
        grid-column: 4 / span 6;
      }
    }

    &.paragraphs-group_mindbox .picture {
      margin-top: 110px;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 229px;
      background-position: 124px 0px,935px 489px;
    }

    .title {
      margin-top: 84px;
    }

    .title,
    .paragraphs-group_0 {
      grid-column: 3 / span 7;
    }

    .picture {
      margin-top: 49px;
      grid-column: 8 / span 3;
      width: 424px;
      height: 512px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 229px;
      background-position: 84px 0px,698px 512px;
    }

    .title {
      margin-top: 84px;
    }

    .title,
    .paragraphs-group_0 {
      grid-column: 3 / span 8;
    }

    .picture {
      margin-top: 109px;
      grid-column: 8 / span 4;
      width: 432px;
      height: 520px;
    }

    .paragraphs-group_mindbox p {
      &:nth-of-type(4),
      &:nth-of-type(5) {
        margin-left: 7px;
      }
    }
  }

  ${desktop.s} {
    & {
      margin-top: 235px;
      background-position: 76px 0px,640px 564px;
    }

    .title {
      margin-top: 86px;
    }

    .title,
    .paragraphs-group_0 {
      grid-column: 3 / span 8;
    }

    .picture {
      margin-top: 65px;
      grid-column: 8 / span 4;
      width: 400px;
      height: 480px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(154)};
      background-position: ${calcRem(54)} 0, ${calcRem(504)} ${calcRem(471)};
      background-size: ${calcRem(48)} ${calcRem(48)}, auto;
    }

    .title {
      margin-top: ${calcRem(70)};
      grid-row: 1;
    }

    .paragraphs-group_0 {
      margin-top: ${calcRem(40)};

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }
    }

    .title,
    .paragraphs-group_0 {
      grid-column: 3 / span 8;
    }

    .paragraphs-group_1 {
      margin-top: ${calcRem(96)};
      grid-column: 2 / span 5;

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .paragraphs-group_1.paragraphs-group_mindbox {
      .paragraph {
        &:nth-of-type(4),
        &:nth-of-type(5) {
          margin-left: ${calcRem(3)};
          line-height: ${calcRem(26)};
        }
      }

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(24)};
      }
    }

    .paragraphs-group_mindbox {
      grid-column: 1 / span 8;
      grid-row: 2;
      margin-top: ${calcRem(40)};
    }

    .paragraphs-group_mindbox p {
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        grid-column: 3 / span 8;
      }

      &:nth-of-type(4) {
        margin-top: ${calcRem(64)} !important;
      }

      &:nth-of-type(4),
      &:nth-of-type(5) {
        grid-column: 2 / span 5;
      }

      &:nth-of-type(5) {
        grid-column: 2 / span 5;
      }
    }

    .paragraphs-group_mindbox + .picture {
      grid-row: 2;
      grid-column: 8 / span 4;
      margin-top: ${calcRem(345)};
    }

    .picture {
      margin-top: ${calcRem(49)};
      grid-column: 8 / span 4;
      width: ${calcRem(300)};
      height: ${calcRem(360)};
    }
  }

  ${mobile.all} {
    & {
      position: relative;
      margin-top: ${calcRem(111)};
      background: none;
    }

    .paragraphs-group_0 {
      margin-top: ${calcRem(24)};
      order: 1;

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }
    }

    .paragraphs-group_1 {
      margin-top: ${calcRem(37)};
      order: 3;

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .paragraphs-group_mindbox {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: ${calcRem(24)};
    }

    .paragraphs-group_1.paragraphs-group_mindbox {
      .paragraph {
        &:nth-of-type(4),
        &:nth-of-type(5) {
          line-height: ${calcRem(26)};
        }
      }

      .paragraph:not(:first-of-type) {
        margin-top: ${calcRem(24)};
      }
    }

    .paragraphs-group_mindbox p {
      grid-column: 1/ span 6;

      &:nth-of-type(4) {
        margin-top: ${calcRem(329)} !important;
      } 

      &:nth-of-type(5) {
        margin-top: ${calcRem(28)} !important;
      } 
    }

    .paragraphs-group_mindbox + .picture {
      grid-row: 2;
      grid-column: 1 / span 6;
      margin-top: ${language === 'ru' ? calcRem(513) : calcRem(441)};
      width: ${calcRem(216)};
      height: ${calcRem(258)};
      justify-self: right;
    }

    .title,
    .paragraphs-group_0,
    .paragraphs-group_1 {
      grid-column: 1 / span 6;
    }

    .picture {
      position: relative;
      margin-top: ${calcRem(33)};
      grid-column: 3 / span 4;
      order: 2;

      &::before {
        content: '';
        position: absolute;
        top: ${calcRem(15)};
        left: ${calcRem(-53)};
        width: 20px;
        height: 20px;
        background-image: url(${require('../../../static/icons/project/about-project/circle.svg').default});
        background-repeat: no-repeat;
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
const StyledAboutProject =  props => {
  const breakpoints = props.theme.breakpoints
  const { l10n: {language} } = props

  return css`
    ${base({ breakpoints, language })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}

export default StyledAboutProject