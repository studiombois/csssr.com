import { css } from '@emotion/core'
import { calcRem } from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above } }) => css`
  & {
    position: relative;
  }

  .policy {
    margin-top: ${calcRem(22)};
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

    span {
      max-height: ${calcRem(24)};
      display: inline-block;
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

  .newsletter {
    margin-top: ${calcRem(20)};
  }

  .newsletter label.input-label {
    min-height: 1rem;
    padding-left: 1rem;
    align-items: flex-start;
    line-height: ${calcRem(16)};
  }

  .newsletter label.input-label span.content {
    transform: translateY(-0.125rem)
  }

  .newsletter label.input-label::before,
  .newsletter input {
    width: 1rem;
    height: 1rem;
  }

  .newsletter label.input-label::after {
    width: 1rem;
    height: 1rem;
    top: 0;
    left: 0;
    transform: none;
    background-image: url(${require('../../../../../static/icons/mdi_check.svg').default});
  }

  .newsletter span.border {
    width: 1rem;
    height: 1rem;
    border: none;
  }

  .newsletter-text {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
  }

  ${desktop.all} {
    & {
      width: 320px;
      margin-bottom: 40px;
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
      margin-top: ${calcRem(19)};
    }

    .policy,
    .newsletter-text {
      font-size: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }

    .newsletter {
      margin-top: ${calcRem(23)};
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

    .policy,
    .newsletter-text {
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
    }

    .newsletter {
      margin-top: ${calcRem(22)};
    }
  }
`

export default props => {
  const { breakpoints } = props.theme

  return css`
    ${base({ breakpoints })}
  `
}
