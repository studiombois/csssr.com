import css from 'styled-jsx/css'

const blueButton = css.resolve`
  .button {
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
    .button {
      width: 192px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .button {
      width: 176px;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .button {
      width: 176px;
    }

    @media (max-width: 1023px) {
      .button {
        width: 11rem;
      }
    }
  }

  @media (max-width: 767px) {
    .button {
      width: 17rem;
      max-width: 17rem;
    }

    .button-wrapper_is_dropdown-visible .button {
      -webkit-tap-highlight-color: transparent;
      display: none;
    }
  }
`

export const blueButtonStyles = blueButton.styles
export const blueButtonClassName = blueButton.className
