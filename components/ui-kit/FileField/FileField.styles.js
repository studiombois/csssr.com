import { css } from '@emotion/core'

const base = css`
  div {
    position: relative;
    margin-top: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    display: inline-flex;
    width: calc(66% - 1rem);
    height: 4rem;
    align-items: center;
    border: solid 0.0625rem #e1e1e1;
  }

  input:not(:focus) + div.font_inputted-text-error {
    border-color: #d0021b;
    border-width: 0.125rem;
  }

  input:not(:focus) + div.font_inputted-text-error label {
    color: #d0021b;
  }

  input:focus + div.font_inputted-text-error  {
    color: #4a4a4a;
    border-color: #e1e1e1;
  }

  input:focus + div {
    outline-offset: -2px;
    outline: auto 2px Highlight;
    outline: auto 5px -webkit-focus-ring-color;
  }

  input {
    position: fixed;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  span.value {
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.error {
    display: block;
    margin-top: 0.625rem;
    grid-column: 2 / span 6;
    color: #ff0000;
  }

  label:not(.button) {
    position: absolute;
    top: 1.4375rem;
    left: 1rem;
    width: calc(100% - 1rem);
    height: 1rem;
    line-height: 1rem;
    font-size: 0.875rem;
    font-weight: normal;
    color: #9b9b9b;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  input:focus + div.font_inputted-text-error label,
  input:focus + div label {
    color: #0076ff;
    font-weight: normal;
  }

  div.textfield_filled label {
    top: 0.4375rem;
    font-size: 0.625rem;
  }

  .button {
    margin-top: 0;
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 33%;
    background: none;
    color: #4a4a4a;
    border: solid 0.0625rem #000000;
    transition: color 0.3s ease-out;
    cursor: pointer;
    user-select: none;
  }

  .button:hover,
  input:focus ~ .button {
    color: #000;
  }

  .button_state_disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  @media (max-width: 1279px) {
    div {
      padding-bottom: 0.1875rem;
    }
  }

  @media (max-width: 767px) {
    & {
      display: flex;
      flex-direction: column
    }

    div {
      width: 100%;
    }

    .button {
      margin-left: auto;
      margin-right: auto;
      width: 66%;
    }
  }
`

const ie11Styles = css`
  span.error {
    -ms-grid-column: 3;
    -ms-grid-column-span: 11;
  }
`

export default css`
  ${base}
  ${ie11Styles}
`
