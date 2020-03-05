import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-bottom: ${calcRem(168)};
  }

  ${mobile.all} {
    .heading {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-bottom: ${calcRem(41)}
    }

    .scrumbanImg {
      grid-row: 2;
      grid-column: 3 / span 4;
      margin-bottom: ${calcRem(30)}
    }

    .scrumbanTitle {
      grid-row: 3;
      grid-column: 1 / span 3;
      margin-bottom: ${calcRem(32)}
    }

    .scrumbanSubHeading {
      grid-row: 4;
      grid-column: 1 / span 6;
      margin-bottom: ${calcRem(22)}
    }

    .scrumbanTextWrap {
      grid-row: 5;
      grid-column: 1 / span 6;
      margin-bottom: ${calcRem(84)}
    }

    .scrumbanText {
      margin-bottom: ${calcRem(16)}
    }

    .reviewImg {
      grid-row: 6;
      grid-column: 1 / span 6;
      max-width: ${calcRem(278)};
      margin-left: auto;
      margin-bottom: ${calcRem(35)}
    }

    .reviewTitle {
      grid-row: 7;
      grid-column: 1 / span 6;
      margin-bottom: ${calcRem(35)}
    }

    .reviewSubHeading {
      grid-row: 8;
      grid-column: 1 / span 6;
      margin-bottom: ${calcRem(22)}
    }

    .reviewText {
      grid-row: 9;
      grid-column: 1 / span 6;
    }
  }

  ${tablet.all} {
    & {
      margin-bottom: ${calcRem(216)};
    }

    .heading {
      text-align: center;
      grid-column: 3 / span 8;
      grid-row: 1;
      margin-bottom: ${calcRem(57)};
    }

    .scrumbanTitle {
      grid-row: 2;
      grid-column: 2 / span 3;
      margin-top: ${calcRem(33)};
      margin-bottom: ${calcRem(40)};
    }

    .scrumbanSubHeading {
      grid-row: 3;
      grid-column: 2 / span 5;
      margin-bottom: ${calcRem(78)};
    }

    .scrumbanImg {
      grid-row: 2 / span 3;
      grid-column: 8 / span 4;
      max-height: ${calcRem(344)};
      margin-bottom: ${calcRem(30)};
    }

    .scrumbanTextWrap {
      grid-row: 4;
      grid-column: 3 / span 5;
      margin-bottom: ${calcRem(73)};
    }

    .reviewTitle {
      grid-row: 5;
      grid-column: 2 / span 3;
      margin-top: ${calcRem(130)};
      margin-bottom: ${calcRem(39)};
    }

    .reviewSubHeading {
      grid-row: 6;
      grid-column: 2 / span 5;
      margin-bottom: ${calcRem(79)};
    }

    .reviewText {
      grid-row: 7;
      grid-column: 3 / span 7;
    }

    .reviewImg {
      grid-row: 5 / span 3;
      grid-column: 6 / span 6;
      max-height: ${calcRem(272)};
    }

    .scrumbanText {
      margin-bottom: ${calcRem(16)}
    }
  }

  ${desktop.all} {
    & {
      margin-bottom: ${calcRem(393)};
    }

    .heading {
      text-align: center;
      grid-column: 2 / span 10;
      grid-row: 1;
      margin-bottom: ${calcRem(138)};
    }

    .scrumbanTitle {
      grid-row: 2;
      grid-column: 2 / span 3;
      margin-bottom: ${calcRem(29)};
    }

    .scrumbanSubHeading {
      grid-row: 3;
      grid-column: 2 / span 5;
      margin-bottom: ${calcRem(102)};
    }

    .scrumbanImg {
      grid-row: 2 / span 3;
      grid-column: 8 / span 4;
    }

    .scrumbanTextWrap {
      grid-row: 4;
      grid-column: 3 / span 5;
    }

    .reviewTitle {
      grid-row: 5;
      grid-column: 2 / span 3;
    }

    .reviewSubHeading {
      grid-row: 6;
      grid-column: 2 / span 5;
    }

    .reviewText {
      grid-row: 7;
      grid-column: 3 / span 7;
    }

    .reviewImg {
      grid-row: 5 / span 3;
      grid-column: 6 / span 6;
    }

    .scrumbanText {
      margin-bottom: ${calcRem(24)}
    }
  }

  ${desktop.s} {
    .scrumbanImg {
      grid-column: 7 / span 5;
      height: ${calcRem(496)};
    }

    .scrumbanTitle {
      margin-top: ${calcRem(65)};
    }

    .scrumbanTextWrap {
      margin-bottom: ${calcRem(140)};
    }

    .reviewImg {
      grid-column: 5 / span 7;
      max-height: ${calcRem(360)};
    }

    .reviewTitle {
      margin-top: ${calcRem(144)};
      margin-bottom: ${calcRem(28)};
    }

    .reviewSubHeading {
      margin-bottom: ${calcRem(104)};
    }

    .reviewText {
      grid-column: 3 / span 6;
    }
  }

  ${desktop.m} {
    .scrumbanImg {
      height: ${calcRem(440)};
    }

    .scrumbanTitle {
      margin-top: ${calcRem(65)};
    }

    .scrumbanTextWrap {
      margin-bottom: ${calcRem(124)};
    }

    .reviewImg {
      max-height: ${calcRem(363)};
    }

    .reviewTitle {
      margin-top: ${calcRem(159)};
      margin-bottom: ${calcRem(28)};
    }

    .reviewSubHeading {
      margin-bottom: ${calcRem(104)};
    }
  }

  ${desktop.l} {
    .scrumbanImg {
      height: ${calcRem(584)};
    }

    .scrumbanTitle {
      margin-top: ${calcRem(65)};
    }

    .scrumbanTextWrap {
      margin-bottom: ${calcRem(172)};
    }

    .reviewTitle {
      margin-top: ${calcRem(135)};
      margin-bottom: ${calcRem(28)};
    }

    .reviewSubHeading {
      margin-bottom: ${calcRem(104)};
    }

    .reviewImg {
      max-height: ${calcRem(440)};
    }

    .reviewText {
      grid-column: 3 / span 5;
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${mobile.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 1;
    }

    .scrumbanImg {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
    }

    .scrumbanTitle {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 3;
    }

    .scrumbanSubHeading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 4;
    }

    .scrumbanTextWrap {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 5;
    }

    .reviewImg {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 6;
    }

    .reviewTitle {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 7;
    }

    .reviewSubHeading {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 8;
    }

    .reviewText {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 9;
    }
  }

  ${tablet.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(8)};
      -ms-grid-row: 1;
    }

    .scrumbanTitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 2;
    }

    .scrumbanSubHeading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 3;
    }

    .scrumbanImg {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
      -ms-grid-row-span: 3;
    }

    .scrumbanTextWrap {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 4;
    }

    .reviewTitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 5;
    }

    .reviewSubHeading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 6;
    }

    .reviewText {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
      -ms-grid-row: 7;
    }

    .reviewImg {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 5;
      -ms-grid-row-span: 3;
    }
  }

  ${desktop.all} {
    .heading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(10)};
      -ms-grid-row: 1;
    }

    .scrumbanTitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 2;
    }

    .scrumbanSubHeading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 3;
    }

    .scrumbanImg {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
      -ms-grid-row: 2;
      -ms-grid-row-span: 3;

    }

    .scrumbanTextWrap {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 4;
    }

    .reviewTitle {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
      -ms-grid-row: 5;
    }

    .reviewSubHeading {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
      -ms-grid-row: 6;
    }

    .reviewText {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
      -ms-grid-row: 7;
    }

    .reviewImg {
      -ms-grid-column: ${getGridValueForMs(6)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
      -ms-grid-row: 5;
      -ms-grid-row-span: 3;
    }
  }

  ${desktop.s} {
    .scrumbanImg {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .reviewImg {
      -ms-grid-column: ${getGridValueForMs(5)};
      -ms-grid-column-span: ${getGridValueForMs(7)};
    }

    .reviewText {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }

  ${desktop.l} {
    .reviewText {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
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
