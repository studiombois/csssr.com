import { css } from '@emotion/core'
import { calcRem } from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above } }) => css`
  .subheading {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
  }

  .separator {
    position: relative;
    bottom: ${calcRem(38)};
    margin-top: ${calcRem(166)};
    display: flex;
    align-items: center;
    height: auto;

    &::before{
      position: absolute;
      top: 0;
      left: 43%;
      content: '';
      background-color: #e1e1e1;
      height: 100%;
      width: 1px;
      z-index: 1;
    }
  }

  .separator-text {
    position: relative;
    font-family: Roboto, sans-serif;
    font-weight: 900;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    background-color: #ffffff;
    text-align: center;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #918686;
    z-index: 2;
  }

  .book-a-call {
    margin-top: auto;
    margin-bottom: -4px;
  }


  ${desktop.all} {
    .heading {
      margin-top: 54px;
    }

    .subheading {
      margin-top: 53px;
    }
  }

  ${desktop.l} {
    & {
      padding-left: 187px;
    }

    .subheading {
      margin-top: 55px;
    }

    .separator {
      margin-left: 86px;
    }

    .book-a-call {
      margin-left: 45px
    }
  }

  ${desktop.m} {
    & {
      padding-left: 127px;
    }

    .subheading {
      margin-top: 53px;
    }

    .separator {
      margin-left: 45px;
    }

    .book-a-call {
      margin-left: 6px
    }
  }

  ${desktop.s} {
    & {
      padding-left: 120px;
    }

    .heading {
      margin-top: 58px;
    }

    .separator {
      margin-left: 44px;
    }

    .book-a-call {
      margin-left: 3px;
    }
  }

  ${tablet.all} {
    & {
      padding-left: ${calcRem(65)};
    }

    .heading {
      margin-top: ${calcRem(52)};
    }

    .subheading {
      font-size: ${calcRem(14)};
      margin-top: ${calcRem(40)};
    }

    .separator {
      margin-top: ${calcRem(142)};
      margin-left: ${calcRem(29)};
    }

    .separator-text {
      padding-top: ${calcRem(4)};
      padding-bottom: ${calcRem(4)};
    }

    .book-a-call {
      margin-left: ${calcRem(-13)};
    }
  }

  ${above.mobile} {
    & {
      display: flex;
      align-items: center;
      padding-bottom: ${calcRem(40)};
    }

    .form-wrap {
      margin-top: ${calcRem(-25)};
    }

    .form-wrapper {
      display: flex;
    }
  }

  ${mobile.all} {
    & {
      padding-left: ${calcRem(16)};
      padding-right: ${calcRem(16)};
    }

    .heading {
      margin-top: ${calcRem(32)};
    }

    .subheading {
      margin-top: ${calcRem(32)};
    }

    .form-wrapper {
      display: block;
    }

    .separator,
    .book-a-call {
      display: none;
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
