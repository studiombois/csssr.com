import css from 'styled-jsx/css'

const whiteButton = css.resolve`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 3rem;
    background-color: white;
  }

  @media (max-width: 767px) {
    .button-wrapper_is_dropdown-visible .button {
      display: none;
    }
  }
`

export const whiteButtonStyles = whiteButton.styles
export const whiteButtonClassName = whiteButton.className
