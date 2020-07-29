import { css } from '@emotion/core'
import { calcRem } from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above } }) => css`
  & {
    position: relative;
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

    > button[status='fail'],
    > button[status='success'],
    > button[status='submitting'] {
      width: ${calcRem(40)};
    }

    svg {
      width: ${calcRem(40)};
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
      width: 320px;
    }

    .policy {
      padding-right: 15px;
    }
  }

  ${desktop.s} {
    & {
      width: 296px;
    }

    .policy {
      padding-right: 0;
    }
  }

  ${tablet.all} {
    & {
      width: ${calcRem(224)};
    }

    .policy {
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
    }
  }

  ${above.mobile} {
    .message {
      position: absolute;
      top: 100%;
      padding-bottom: ${calcRem(40)};
      width: 100%;
    }
  }

  ${mobile.all} {
    & {
      padding-bottom: ${calcRem(79)};
    }

    .policy {
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
