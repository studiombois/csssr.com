import { css } from '@emotion/core'

const base = css`
  button {
    grid-column: 6 / span 2;
    padding: 1rem 1.5rem;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.625rem;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1rem;
    letter-spacing: 0.08125rem;
    text-transform: uppercase;
    color: #345eff;
    background: none;
    cursor: pointer;
  }

  button:hover {
    color: #0254d8;
  }

  .border-bottom {
    margin-right: -2rem;
    margin-left: -2rem;
    grid-column: 2 / span 10;
    height: 1px;
    background-color: #979797;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .border-bottom {
      margin-right: -1rem;
      margin-left: -1rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .border-bottom {
      margin-right: -1rem;
      margin-left: -1rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    button {
      padding: 1rem 1rem;
    }

    .border-bottom {
      grid-column: 2 / span 10;
      margin-right: -1rem;
      margin-left: -1rem;
    }
  }

  @media (max-width: 767px) {
    button {
      grid-column: 2 / span 4;
    }

    .border-bottom {
      margin-right: 0rem;
      margin-left: 0rem;
      grid-column: 1 / span 6;
    }
  }
`

const ie11Styles = css`
  & {
    -ms-grid-row: 5;
    -ms-grid-column: 1;
    -ms-grid-column-span: 23;
  }

  button {
    -ms-grid-column: 11;
    -ms-grid-column-span: 3;
  }

  .border-bottom {
    -ms-grid-column: 3;
    -ms-grid-column-span: 19;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .border-bottom {
      -ms-grid-column: 3;
      -ms-grid-column-span: 19;
    }
  }
`

const dynamic = isCut => css`
  .fold-arrow {
    margin-left: '0.375rem';
    transform: ${isCut ? 'rotate(0deg)' : 'rotate(180deg)'};
  }
`

export default ({ isCut, isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
  ${dynamic(isCut)}
`
