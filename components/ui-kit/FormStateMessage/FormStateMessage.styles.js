import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = css`
  &.body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    transform: scale(0);
    transition: transform 0.3s ease-out;
  }

  &.body_state_visible {
    transform: scale(1);
  }

  .text {
    position: relative;
    margin-top: 1.4125rem;
    text-align: center;
  }

  .picture {
    position: relative;
    margin-top: 3.5rem;
    width: 19rem;
    flex: none;
  }

  @media (max-width: 767px) {
    &.body {
      height: auto;
    }

    .text {
      margin-top: 1.175rem;
    }

    .picture {
      margin-top: 1.5rem;
      width: 10.5rem;
    }
  }
`

const ie11Styles = css`
  .cell {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }
`

const pictureStyles = css`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    height: 224px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }
  }

  @media (max-width: 767px) {
    picture {
      top: 0;
      bottom: initial;
    }
  }
`

const textDataStyles = css`
  button {
    border: none;
    background: none;
    text-decoration: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
export {
  pictureStyles,
  textDataStyles,
}
