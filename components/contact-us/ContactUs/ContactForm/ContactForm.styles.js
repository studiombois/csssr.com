import { css } from '@emotion/core'
import { calcRem } from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop } }) => css`
  & {
    display: flex;
    flex-direction: column
  }

  .subheading {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
  }

  .form {
    position: relative;
  }

  .separator {
    position: absolute;
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

  .policy {
    margin-top: ${calcRem(21)};
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #18191b;

    > a {
      color: #0076ff;
    }
  }

  .submit {
    margin-top: ${calcRem(24)};

    > button {
      height: ${calcRem(40)};
    }
  }

  .submit-text {
    font-family: Roboto;
    font-weight: 900;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    text-align: center;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    color: #ffffff;
  }

  ${desktop.all} {
    & {

    }

    .heading {
      margin-top: 99px;
    }

    .subheading {
      margin-top: 53px;
    }

    .form {
      margin-top: 19px;
      width: 320px;
    }

    .policy {
      padding-right: 15px;
    }
  }

  ${desktop.s} {
    & {
      padding-left: 120px;
    }

    .form {
      width: 296px;
    }

    .policy {
      padding-right: 0;
    }

    .separator {
      right: -63px;
    }
  }

  ${desktop.m} {
    & {
      padding-left: 128px;
    }

    .subheading {
      margin-top: 53px;
    }

    .separator {
      right: -63px;
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
      right: -104px;
    }
  }

  ${tablet.all} {
    & {
      padding-left: ${calcRem(64)};
    }

    .heading {
      margin-top: ${calcRem(80)};
    }

    .subheading {
      font-size: ${calcRem(14)};
      margin-top: ${calcRem(48)};
    }

    .form {
      margin-top: ${calcRem(19)};
      width: ${calcRem(224)};
    }

    .policy {
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
    }

    .separator {
      right: ${calcRem(-48)};
      height: ${calcRem(316)};
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

    .form {
      margin-top: ${calcRem(20)};
      padding-bottom: ${calcRem(79)};
    }

    .policy {
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
    }

    .separator {
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
