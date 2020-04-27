import { css } from '@emotion/core'

const base = css`
  & {
    display: block;
    position: relative;
  }

  &:hover label::before {
    border-color: rgba(155, 155, 155, 1);
  }

  &:hover input:checked + label::before {
    background-color: #0254d8;
    border-color: #0254d8;
  }

  label {
    position: relative;
    padding-left: 1.5rem;
    display: flex;
    align-items: center;
    min-height: 1.5rem;
    user-select: none;
    cursor: pointer;
  }

  label::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid rgba(155, 155, 155, 0.5);
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out;
    content: '';
  }

  label.input-label_warning::before {
    border-color: #ffc045 !important;
  }

  label::after {
    position: absolute;
    top: 0.25rem;
    left: 0.5rem;
    display: none;
    width: 0.3125rem;
    height: 0.625rem;
    border-right: 0.1875rem solid #fff;
    border-bottom: 0.1875rem solid #fff;
    content: '';
    transform: rotate(45deg);
  }

  label span.content {
    padding-left: 0.5rem;
    font-size: inherit;
    line-height: inherit;
    color: #18191b;
  }

  span.border {
    position: absolute;
    display: none;
    top: 1px;
    left: 1px;
    display: none;
    box-sizing: border-box;
    width: calc(1.5rem - 2px);
    height: calc(1.5rem - 2px);
    border: 1px solid #fff;
  }

  input {
    position: absolute;
    top: 0;
    margin: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: none;
    border: 0;
    appearance: none;

    @supports (-moz-appearance: none) {
      &:focus {
        outline: 1px dotted gray;
      }
    }
  }

  input::-ms-check {
    border: none;
    opacity: 0;
  }

  input:checked + label::before {
    background-color: #0076ff;
    border-color: #0076ff;
  }

  input:checked + label::after {
    display: block;
  }

  input:checked + label span.border {
    display: block;
  }

  @media (max-width: 1279px) {
    .font_p16-regular {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    .font_p16-regular  {
      padding-bottom: 0;
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
`

export default css`
  ${base}
`
