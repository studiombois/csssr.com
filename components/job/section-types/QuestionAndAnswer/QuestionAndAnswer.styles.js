import { css } from '@emotion/core'

const base = props => css`
  h3 {
    margin-top: 2.9375rem;
  }

  h3::before {
    content: '${props.displayIndex}';
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: solid 2px #000000;
  }

  p {
    margin-top: 1rem;
  }

  .link-wrapper {
    margin-top: 1rem;
  }

  .value {
    margin-top: 2.5rem;
  }

  .time-wrapper {
    display: none;
  }

  .wrapper {
    grid-column: 10 / span 3;
  }

  .wrapper_mobile-only {
    display: none;
  }

  .value {
    margin-top: 1.8125rem;
  }

  .hint {
    margin-top: 0.5rem;
  }

  div.textfield_regular {
    margin-top: 2rem;
  }

  div.textarea_regular {
    margin-top: 2.0625rem;
  }

  @media (max-width: 767px) {
    h3 {
      margin-top: 2.4375rem;
    }

    p {
      margin-top: 0.5rem;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    div.textarea_regular {
      margin-top: 1.0625rem;
    }

    .wrapper {
      display: none;
    }

    .wrapper_mobile-only {
      display: block;
      grid-column: 1 / span 6;
    }

    .hint,
    .value {
      display: inline-block;
    }

    .hint {
      margin-left: 0.625rem;
    }

    .value {
      margin-top: 1.125rem;
    }

    .font_link-list_16 {
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .time-wrapper {
      grid-column: 1 / span 6;
      display: block;
    }
  }
`

export default props => css`
  ${base(props)}
`
