import { css } from '@emotion/core'

const base = css`
  & {
    position: relative;
    display: block;
  }

  select {
    appearance: none;
    padding-left: 1rem;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 4rem;
    line-height: 1rem;
    font-size: 0.875rem;
    color: #9b9b9b;
    border: 1px solid #e1e1e1;
    border-radius: 0;
    background: none;
  }

  label {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    opacity: 0;
  }

  :not(.select_filled) select:focus {
    color: transparent;
  }

  .select_filled select {
    padding-top: 1rem;
    font-size: 1.5rem;
    font-weight: 100;
    font-style: normal;
    font-stretch: normal;
    line-height: 2rem;
    letter-spacing: normal;
    text-transform: none;
    color: #c0c0c0;
  }

  select:focus + label,
  .select_filled label {
    position: absolute;
    top: 0.375rem;
    left: 1rem;
    display: block;
    width: calc(100% - 2rem);
    height: auto;
    font-size: 0.625rem;
    color: #0076ff;
    opacity: 1;
    pointer-events: none;
    user-select: none;
  }
`

export default css`
  ${base}
`
