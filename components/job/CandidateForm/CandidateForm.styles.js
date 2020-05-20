import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import AnimatedButton from '../../ui-kit/core-design/AnimatedButton'
import Text from '../../ui-kit/core-design/Text'

const base = css`
  & {
    margin-right: auto;
    margin-left: auto;
    padding-top: 13.5625rem;
    align-items: center;
    border: none;
  }

  h1 {
    margin-top: -0.0625rem;
  }

  h1 span {
    margin-top: 0.875rem;
    display: block;
  }

  h1 + p {
    margin-top: 1.3125rem;
  }

  .button {
    margin-top: 3.5625rem;
    margin-left: auto;
    margin-right: auto;
    width: 12rem;
  }

  .button_language_en {
    width: 16rem;
  }

  .faq-text {
    display: none;
  }

  ${AnimatedButton} ${Text} {
    color: white;
  }

  @media (max-width: 767px) {
    & {
      margin-top: 3.5rem;
    }

    h1 {
      margin-top: 2.125rem;
    }

    h1 span {
      margin-top: 0.5rem;
    }

    h1 + p {
      margin-top: 0.125rem;
    }

    h1.extra-margin {
      margin-top: 5.125rem;
    }

    & {
      padding-top: 0;
    }

    .button {
      width: 13.5rem;
    }

    .button_language_en {
      width: 17.5rem;
    }

    .faq-text-container {
      position: relative;
      width: 100%;
    }

    .faq-picture {
      left: -14%;
      overflow: unset;
    }

    .faq-text {
      display: block;
    }

    .faq-text {
      position: absolute;
      top: 1.5rem;
      max-width: 10rem;
      font-weight: 900;
    }

    .faq-text,
    .faq-text a {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .faq-text a {
      margin-top: 0.5rem;
    }
  }
`

const ie11Styles = css`
  .cell {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
