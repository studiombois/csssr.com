import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  header .title {
    text-align: center;
  }

  .beneficiary {
    position: relative;
  }

  .beneficiary::before {
    content: '';
    position: absolute;
    display: block;
    height: ${calcRem(40)};
    width: ${calcRem(336)};
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .beneficiary:nth-of-type(1)::before {
    background-image: url(${require('../../../../static/icons/service/mvp/startup.svg').default});
  }

  .beneficiary:nth-of-type(2)::before {
    background-image: url(${require('../../../../static/icons/service/mvp/investors.svg').default});
  }

  .beneficiary:nth-of-type(3)::before {
    background-image: url(${require('../../../../static/icons/service/mvp/newFeatures.svg').default});
  }

  .benefit {
    font-weight: 900;
  }

  .footer-paragraph:not(:first-of-type) {
    margin-top: 16px;
  }

  ${desktop.all} {
    .description {
      margin-top: 18px;
    }

    .beneficiary {
      grid-template-rows: max-content auto;
    }

    .benefits {
      grid-row: 1 / span 2;
    }

    .benefit:not(:first-of-type) {
      margin-top: 16px
    }
  }

  ${desktop.l} {
    header .title {
      padding-left: 120px;
      padding-right: 120px;
      margin-top: 212px;
      grid-column: 3 / span 8;
    }

    .whom-it-benefits {
      margin-top: 201px
    }

    .beneficiary:not(:first-of-type) {
      margin-top: 134px;
    }

    .beneficiary::before {
      top: 18px;
      left: -64px;
    }

    .beneficiary .title {
      grid-column: 4 / span 3;
    }

    .description {
      grid-column: 4 / span 2;
    }

    .benefits {
      grid-column: 7 / span 3;
    }

    .benefit:first-of-type {
      margin-top: 18px;
    }

    .footer-content {
      margin-top: 117px;
      grid-column: 4 / span 6;
    }
  }

  ${desktop.m} {
    header .title {
      margin-top: 180px;
      grid-column: 2 / span 10;
    }

    .whom-it-benefits {
      margin-top: 185px
    }

    .beneficiary:not(:first-of-type) {
      margin-top: 118px;
    }

    .beneficiary::before {
      top: 10px;
      left: -128px;
    }

    .beneficiary .title {
      grid-column: 4 / span 4;
    }

    .description {
      grid-column: 4 / span 3;
    }

    .benefits {
      grid-column: 8 / span 4;
    }

    .benefit:first-of-type {
      margin-top: 25px;
    }

    .footer-content {
      margin-top: 101px;
      grid-column: 4 / span 7;
    }
  }

  ${desktop.s} {
    header .title {
      margin-top: 204px;
      grid-column: 2 / span 10;
    }

    .whom-it-benefits {
      margin-top: 185px
    }

    .beneficiary:not(:first-of-type) {
      margin-top: 110px;
    }

    .beneficiary::before {
      top: 20px;
      left: -144px;
    }

    .beneficiary .title {
      grid-column: 4 / span 4;
    }

    .description {
      grid-column: 4 / span 3;
    }

    .benefits {
      grid-column: 8 / span 4;
    }

    .benefit:first-of-type {
      margin-top: 34px;
    }

    .footer-content {
      margin-top: 157px;
      grid-column: 4 / span 7;
    }
  }

  ${tablet.all} {
    header .title {
      margin-top: ${calcRem(49)};
      grid-column: 3 / span 8;
    }

    .whom-it-benefits {
      margin-top: ${calcRem(142)};
    }

    .description {
      margin-top: ${calcRem(8)};
    }

    .beneficiary {
      grid-template-rows: max-content auto;
    }

    .beneficiary::before {
      top: ${calcRem(-7)};
      left: ${calcRem(-193)};
    }

    .beneficiary:not(:first-of-type) {
      margin-top: ${calcRem(96)};
    }

    .beneficiary .title,
    .description {
      grid-column: 4 / span 3;
    }

    .benefits {
      grid-row: 1 / span 2;
      grid-column: 8 / span 5;
    }

    .benefit:first-of-type {
      margin-top: ${calcRem(8)};
    }

    .benefit:not(:first-of-type) {
      margin-top: ${calcRem(16)};
    }

    .footer-content {
      margin-top: ${calcRem(98)};
      grid-column: 4 / span 7;
    }
  }

  ${mobile.all} {
    header .title {
      margin-top: ${calcRem(81)};
    }

    .whom-it-benefits {
      margin-top: ${calcRem(174)};
    }

    .description {
      margin-top: ${calcRem(8)};
    }

    .benefits {
      margin-top: ${calcRem(24)};
    }

    .beneficiary:not(:first-of-type) {
      margin-top: ${calcRem(128)};
    }

    .beneficiary::before {
      top: ${calcRem(-56)};
      left: ${calcRem(-232)};
    }

    .footer-content {
      margin-top: ${calcRem(88)};
      grid-column: 4 / span 7;
    }

    header .title,
    .beneficiary .title,
    .description,
    .benefits,
    .footer-content {
      grid-column: 1 / span 6;
    }

    .benefit:not(:first-of-type) {
      margin-top: ${calcRem(8)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .benefits {
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
  }

  ${desktop.all} {
    .beneficiary {
      -ms-grid-rows: auto auto;
    }
  }

  ${desktop.l} {
    header .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .beneficiary .title {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(2)};
    }

    .benefits {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .footer-content {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.m} {
    header .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(10)};
    }

    .beneficiary .title {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .benefits {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .footer-content {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${desktop.s} {
    header .title {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(10)};
    }

    .beneficiary .title {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .description {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .benefits {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .footer-content {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${tablet.all} {
    header .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
    }

    .beneficiary {
      -ms-grid-rows: auto auto;
    }

    .beneficiary .title,
    .description {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .benefits {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .footer-content {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }
  }

  ${mobile.all} {
    .footer-content {
      -ms-grid-column: ${getGridValueForMs(4)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    header .title,
    .beneficiary .title,
    .description,
    .benefits,
    .footer-content {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`
export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
