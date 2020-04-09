import { css } from '@emotion/core'

const base = css`
  span {
    margin-bottom: 2rem;
    display: block;
  }

  button {
    display: none;
  }

  span.font_link-list_28 {
    margin-bottom: 0;
    display: inline-block;
    color: #4a4a4a;
    text-decoration: none;
  }

  span.font_link-list_28:hover::after {
    display: none;
  }

  li:not(:last-child) {
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    white-space: nowrap;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    span {
      margin-bottom: 0.5rem;
    }

    li:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    & {
      grid-column: 1 / span 6;
      position: relative;
    }

    &:last-of-type span {
      border-bottom: 0.0625rem solid #dadada;
    }

    span:not(.font_link-list_28) {
      margin: 0;
      padding-top: 0.9375rem;
      padding-bottom: 0.9375rem;
      padding-left: 1rem;
      padding-right: 3.5rem;
      height: 3.5rem;
      border-top: 0.0625rem solid;
      border-color: #dadada;
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 900;
      letter-spacing: 0.0625rem;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 20.5rem;
      height: 3.5rem;
      border: none;
      background: none;
    }

    button::before,
    button::after {
      position: absolute;
      top: 50%;
      content: '';
      display: block;
      width: 0.6875rem;
      height: 0.125rem;
      background-color: #4a4a4a;
    }

    button::before {
      right: 1.3125rem;
      transform: rotate(45deg);
    }
    button::after {
      right: 0.875rem;
      transform: rotate(-45deg);
    }

    button.button_state_opened::before,
    button.button_state_opened::after {
      top: 50%;
      right: 1.3125rem;
      width: 1.375rem;
    }

    button.button_state_opened::before {
      transform: translate(50%) rotate(45deg);
    }
    button.button_state_opened::after {
      transform: translate(50%) rotate(-45deg);
    }

    ul {
      display: none;
    }

    ul.list_state_visible {
      padding-top: 1.4375rem;
      padding-bottom: 33px;
      padding-left: 3.5rem;
      display: block;
      border-top: 0.0625rem solid #dadada;
    }

    &:last-of-type ul.list_state_visible {
      border: none;
    }

    &:not(:last-of-type) ul.list_state_visible {
      padding-top: 1.375rem;
    }

    .font_link-list_28 {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

export default css`
  ${base}
`