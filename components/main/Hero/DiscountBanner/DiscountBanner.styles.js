import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFD576;
    z-index: 100;

    &._hidden {
      display: none;
    }
  }

  .banner-info {
    text-align: center;
  }

  .heading {
    font-family: 'Roboto Slab','Georgia',serif;
    font-weight: normal;
    color: #000;
  }

  .description {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    color: #18191B;
  }

  .arrow-text {
    position: absolute;
    top: 0;
    font-family: 'Roboto', sans-serif;
    color: #0076FF;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-image: url('../../../static/icons/main/banner-arrow.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .close-button {
    position: absolute;
    top: calc(50% - ${calcRem(7)});
    right: ${calcRem(14)};
    cursor: pointer;
  }

  ${desktop.all} {
    & {
      height: 104px;
      margin-top: 64px;
    }

    .image {
      margin-top: 14px;
      margin-left: 19px;
      grid-row: 1 / span 3;
      grid-column: 2 / span 2;
      width: 217px;
    }

    .banner-info {
      grid-column: 4 / span 6;
      margin-top: 21px;
      margin-left: 15px;
    }

    .heading {
      font-size: 26px;
      line-height: 42px;
    }

    .description {
      margin-top: 8px;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: .75px;
    }

    .arrow-text {
      right: ${calcRem(118)};
      grid-column: 11 / span 2;
      max-width: 131px;
      margin-top: 34px;
      margin-left: 79px;
      font-size: 18px;
      line-height: 22px;

      &::before {
        content: '';
        width: 46px;
        height: 40px;
        top: -23px;
        left: 119px;
      }
    }
  }

  ${desktop.m} {
    .image {
      grid-column: 1 / span 3;
      width: 207px;
      height: 84px;
      margin-top: 21px;
      margin-left: 52px;
    }

    .banner-info {
      grid-column: 4 / span 7;
      margin-left: -126px;
      margin-top: 23px;
    }

    .heading {
      font-size: 24px;
    }

    .arrow-text {
      margin-top: 36px;
      margin-left: -19px;
    }
  }

  ${desktop.s} {
    .image {
      grid-column: 1 / span 3;
      width: 207px;
      height: 84px;
      margin-top: 21px;
      margin-left: 5px;
    }

    .banner-info {
      grid-column: 4 / span 7;
      margin-left: -148px;
      margin-top: 23px;
    }

    .heading {
      font-size: 24px;
    }

    .arrow-text {
      margin-top: 36px;
      margin-left: -26px;
    }
  }

  ${tablet.all} {
    & {
      height: ${calcRem(85)};
      margin-top: ${calcRem(64)};
    }

    .image {
      margin-top: ${calcRem(14)};
      grid-row: 1 / span 3;
      grid-column: 1 / span 2;
      width: ${calcRem(166)};
      height: ${calcRem(68)};
      margin-top: ${calcRem(16)};
    }

    .banner-info {
      grid-column: 3 / span 8;
      margin-top: ${calcRem(17)};
    }

    .heading {
      font-size: ${calcRem(19.2)};
      line-height: ${calcRem(34)};
    }

    .description {
      margin-top: ${calcRem(6)};
      font-size: ${calcRem(10)};
      line-height: ${calcRem(13)};
      letter-spacing: ${calcRem(0.6)};
    }

    .arrow-text {
      right: ${calcRem(65)};
      grid-column: 11 / span 2;
      max-width: ${calcRem(105)};
      margin-top: ${calcRem(27)};
      font-size: ${calcRem(14.4)};
      line-height: ${calcRem(18)};

      &::before {
        content: '';
        width: ${calcRem(30)};
        height: ${calcRem(39)};
        top: ${calcRem(-24)};
        left: ${calcRem(96)};
        background-image: url('../../../static/icons/main/banner-arrow_tablet.svg');
      }
    }

    .close-button {
      right: ${calcRem(21)};
    }
  }

  ${mobile.all} {
    & {
      height: ${calcRem(80)};
      margin-top: ${calcRem(56)};
    }

    .image {
      display: none;
    }

    .banner-info {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(14)};
      text-align: left;
    }

    .heading {
      font-size: ${calcRem(18)};
      line-height: ${calcRem(22)};
      font-weight: normal;
      text-decoration: underline;
    }

    .description {
      max-width: ${calcRem(249)};
      margin-top: ${calcRem(8)};
      font-size: ${calcRem(10)};
      line-height: ${calcRem(13)};
    }

    .arrow-text {
      display: none;
    }

    .close-button {
      top: ${calcRem(52)};
      right: ${calcRem(14)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
