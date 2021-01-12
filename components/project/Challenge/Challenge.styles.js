import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  .profile {
    position: relative;
    grid-column: 2 / span 5;
  }

  .sticky-box {
    position: sticky;
    top: ${calcRem(250)};
  }

  .wrapper {
    height: ${calcRem(560)};
  }

  .picture-container {
    width: ${calcRem(664)};
    height: ${calcRem(428)};
    margin-top: ${calcRem(65)};
    margin-left: ${calcRem(33)};
    overflow: hidden;
  }

  .laptop-image {
    position: absolute;
    top: ${calcRem(-58)};
    left: ${calcRem(-150)};
    width: ${calcRem(1032)};
    height: ${calcRem(619)};
  }

  .info {
    grid-column: 8 / span 4;
  }

  .heading {
    margin-bottom: ${calcRem(32)};

    &:not(:first-of-type) {
      margin-top: ${calcRem(104)};
    }
  }

  .result-container {
    display: flex;
  }

  .result-wrapper {
    width: ${calcRem(208)};

    &:first-of-type {
      margin-right: ${calcRem(44)};
    }
  }

  .result-number,
  .result-description {
    display: block;
  }

  .result-number {
    margin-bottom: ${calcRem(24)};
    font-size: ${calcRem(104)};
    line-height: ${calcRem(80)};
    font-weight: normal;
  }

  .result-description {
    font-weight: 900;
    letter-spacing: ${calcRem(1)};
    text-transform: uppercase;
  }

  .quote-wrapper {
    margin-top: ${calcRem(104)};
    padding-left: ${calcRem(38)};
    border-left: ${calcRem(4)} solid #6490DF;
  }

  .quote-author {
    display: block;
    margin-top: ${calcRem(24)};
  }

  .quote-role {
    margin-top: ${calcRem(-4)};
    color: ${colors.secondary.gray}
  }

  ${desktop.m} {
    .sticky-box {
      top: ${calcRem(200)};
    }

    .wrapper {
      height: ${calcRem(422)};
    }

    .picture-container {
      width: ${calcRem(497)};
      height: ${calcRem(325)};
      margin-top: ${calcRem(54)};
      margin-left: ${calcRem(22)};
    }

    .laptop-image {
      top: ${calcRem(-41)};
      left: ${calcRem(-112)};
      width: ${calcRem(768)};
      height: ${calcRem(464)};
    }
  }

  ${desktop.s} {
    .sticky-box {
      top: ${calcRem(180)};
    }

    .wrapper {
      height: ${calcRem(391)};
    }

    .picture-container {
      width: ${calcRem(461)};
      height: ${calcRem(300)};
      margin-top: ${calcRem(47)};
      margin-left: ${calcRem(20)};
    }

    .laptop-image {
      top: ${calcRem(-39)};
      left: ${calcRem(-104)};
      width: ${calcRem(712)};
      height: ${calcRem(430)};
    }
  }

  ${tablet.all} {
    .sticky-box {
      top: ${calcRem(150)};
    }

    .wrapper {
      height: ${calcRem(298)};
    }

    .picture-container {
      width: ${calcRem(350)};
      height: ${calcRem(227)};
      margin-top: ${calcRem(30)};
      margin-left: ${calcRem(16)};
    }

    .laptop-image {
      top: ${calcRem(-30)};
      left: ${calcRem(-79)};
      width: ${calcRem(544)};
      height: ${calcRem(327)};
    }

    .heading {
      margin-bottom: ${calcRem(16)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(64)};
      }
    }

    .result-wrapper {
      width: ${calcRem(135)};

      &:first-of-type {
        margin-right: ${calcRem(25)};
      }
    }

    .result-number {
      margin-bottom: ${calcRem(10)};
      font-size: ${calcRem(80)};
    }

    .quote-wrapper {
      margin-top: ${calcRem(64)};
      padding-left: ${calcRem(30)};
    }

    .info-text,
    .quote-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .quote-author {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .quote-role {
      margin-top: 0;
    }
  }

  ${mobile.all} {
    .profile,
    .info {
      grid-column: 1 / span 6;
    }

    .sticky-box {
      top: 0;
    }

    .wrapper {
      height: ${calcRem(247)};
    }

    .picture-container {
      width: ${calcRem(291)};
      height: ${calcRem(191)};
      margin-top: ${calcRem(25)};
      margin-left: ${calcRem(17)};
      margin-bottom: ${calcRem(71)};
    }

    .laptop-image {
      top: ${calcRem(-25)};
      left: ${calcRem(-16)};
      width: ${calcRem(360)};
      height: ${calcRem(272)};
    }

    .info {
      margin-top: ${calcRem(15)};
    }

    .heading {
      margin-bottom: ${calcRem(24)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(56)};
      }
    }

    .result-wrapper {
      width: ${calcRem(135)};

      &:first-of-type {
        margin-right: ${calcRem(49)};
      }
    }

    .result-number {
      margin-bottom: ${calcRem(10)};
      font-size: ${calcRem(80)};
    }

    .quote-wrapper {
      margin-top: ${calcRem(56)};
      padding-left: ${calcRem(22)};
    }

    .info-text,
    .quote-text {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .quote-author {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .quote-role {
      margin-top: 0;
    }
  }
`

const ie11Styles = ({ breakpoints: { mobile }}) => css`
  & {
    -ms-grid-template-rows: max-content max-content;
  }

  .profile {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .info {
    position: relative;
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  ${mobile.all} {
    .profile,
    .info {
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
