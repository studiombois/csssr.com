import { css } from '@emotion/core'

const base = css`
  & {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    z-index: 8999;
    display: flex;
    flex-wrap: wrap;
    width: 312px;
    box-sizing: content-box;
    transform: translateY(0);
    transition: transform 0.3s ease-out;
  }

  &.button-wrapper_is_invisible {
    transform: translateY(250%);
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      width: 248px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      width: 232px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      width: 232px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      width: 14.5rem;
    }
  }

  @media (max-width: 767px) {
    & {
      position: fixed;
      bottom: 0;
      width: 20.5rem;
      right: 1rem;
    }

    & > div {
      margin-top: auto;
    }

    &.button-wrapper_is_dropdown-visible {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.69);
    }
  }
`

const blueButtonStyles = css`
  & {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-right: 0.5rem;
    width: 256px;
    height: 3rem;
    cursor: pointer;
    user-select: none;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      width: 192px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      width: 176px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      width: 176px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      width: 11rem;
    }
  }

  @media (max-width: 767px) {
    & {
      width: 17rem;
      max-width: 17rem;
    }

    .button-wrapper_is_dropdown-visible & {
      -webkit-tap-highlight-color: transparent;
      display: none;
    }
  }
`

const whiteButtonStyles = css`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    background-color: white;
  }

  @media (max-width: 767px) {
    .button-wrapper_is_dropdown-visible & {
      display: none;
    }
  }
`

export { blueButtonStyles, whiteButtonStyles }
export default css`
  ${base}
`
