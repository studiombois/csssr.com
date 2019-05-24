import css from 'styled-jsx/css'

const buttonCSS = css.resolve`
  button {
    margin-top: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    min-width: 13rem;
    width: auto !important;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    button {
      margin-top: 0;
      min-width: 9rem;
    }
  }

  @media (max-width: 767px) {
    button {
      margin-top: 0;
      min-width: 13.5rem;
    }
  }
`

const statusMessageStyles = css`
  div {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 3.375rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 100%;
  }

  img {
    margin-top: 12.75rem;
  }

  p {
    margin-top: 2.875rem;
    margin-bottom: 3.5rem;
    text-align: center;
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    div {
      padding-bottom: 2rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    img {
      margin-top: 12rem;
      width: 8rem;
    }

    p {
      margin-bottom: 3.25rem;
    }
  }

  @media (max-width: 1279px) {
    .font_p16-regular {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    img {
      margin-top: 10.5rem;
      width: 5.5rem;
    }

    p {
      margin-top: 2.5rem;
      margin-bottom: 2.8125rem;
      width: 20.5rem;
    }
  }
`

const generateStatusMessageDynamicCSS = hasSubmitStatus => css.resolve`
  div {
    opacity: ${hasSubmitStatus ? 1 : 0};
    pointer-events: ${hasSubmitStatus ? 'auto' : 'none'};
  }
`

export { statusMessageStyles, generateStatusMessageDynamicCSS, buttonCSS }
