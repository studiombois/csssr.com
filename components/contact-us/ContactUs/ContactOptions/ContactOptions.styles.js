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
    display: flex;
    align-items: center;
    bottom: 0;
    height: 298px;

    &::before{
      position: absolute;
      top: 0;
      left: 50%;
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
    padding-top: ${calcRem(10)};
    padding-bottom: ${calcRem(10)};
  }

  .separator,
  .book-a-call {
    margin-top: auto;
  }


  ${desktop.all} {
    .heading {
      margin-top: 99px;
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
      margin-top: 53px;
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
      padding-left: 108px;
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
      padding-left: 100px;
    }

    .separator {
      margin-left: 40px;
    }

    .book-a-call {
      margin-left: 6px;
    }
  }

  ${tablet.all} {
    & {
      padding-left: ${calcRem(57)};
    }

    .heading {
      margin-top: ${calcRem(80)};
    }

    .subheading {
      font-size: ${calcRem(14)};
      margin-top: ${calcRem(48)};
    }

    .separator {
      margin-left: ${calcRem(30)};
      height: ${calcRem(316)};
    }

    .book-a-call {
      margin-left: ${calcRem(-8)};
    }
  }

  ${above.mobile} {
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
