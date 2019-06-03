import css from 'styled-jsx/css'

const formCSS = css.resolve`
  form {
    margin-top: 0.125rem;
    padding-top: 4rem;
    grid-template-columns: repeat(10, 120px);
    width: 100%;
  }

  h2 {
    grid-column: 3 / span 6;
    margin-bottom: 4.5rem;
  }

  .field {
    grid-column: 2 / span 4;
    margin-bottom: 2.0625rem;
  }

  .field_type_textarea {
    align-self: start;
    margin-top: -0.5625rem;
    margin-bottom: 0;
    grid-column: 6 / span 4;
    grid-row: 2 / span 3;
  }

  .field_type_textarea textarea {
    height: 15.0625rem;
  }
 
  .field_type_checkbox {
    margin-bottom: 1rem;
  }

  .field_type_checkbox {
    grid-column: 2 / span 8;
    margin-bottom: 1rem;
  }

  .field_type_checkbox + .field_type_checkbox {
    margin-bottom: 2rem;
  }

  .button {
    margin-top: 0;
    grid-column: 5 / span 2;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    form {
      grid-template-columns: repeat(10, 96px);
      width: 100%;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    form {
      grid-template-columns: repeat(10, 88px);
      width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    form {
      padding-top: 4.8125rem;
      grid-template-columns: repeat(8, 4rem);
      overflow: hidden;
      width: 100%;
    }

    h2 {
      grid-column: 2 / span 6;
      margin-bottom: 2.5rem;
    }

    .field {
      grid-column: 2 / span 6;
      grid-row: auto;
    }

    .field_type_textarea {
      margin-top: 1.5rem;
    }

    .field_type_textarea textarea {
      height: 10rem;
    }

    .field_type_checkbox {
      margin-top: 2.6875rem;
    }

    .field_type_checkbox + .field_type_checkbox {
      margin-top: 1.375rem;
      margin-bottom: 3.5rem;
    }

    .button {
      margin-top: 0;
      grid-column: 4 / span 2;
    }
  }

  @media (max-width: 767px) {
      form {
        padding-top: 2.8125rem;
        grid-template-columns: repeat(6, 3rem);
        width: 100%;
      }

      h2 {
        grid-column: 1 / span 6;
        margin-bottom: 2.5rem;
      }

      .field {
        grid-column: 1 / span 6;
        grid-row: auto;
      }

      .field_type_textarea {
        margin-top: 1.5rem;
      }

      .field_type_textarea textarea {
        height: 10rem;
      }

      .field_type_checkbox {
        margin-top: 2.6875rem;
      }

      .field_type_checkbox + .field_type_checkbox {
        margin-top: 1.6875rem;
        margin-bottom: 3.5rem;
      }

      .button {
        margin-top: 0;
        grid-column: 2 / span 4;
      }
    }
  }
`

const generateDynamicFormCSS = hasFailOrSuccessStatus => css.resolve`
  .field {
    opacity: ${hasFailOrSuccessStatus ? 0 : 1};
    pointer-events: ${hasFailOrSuccessStatus ? 'none' : 'auto'};
  }

  .button {
    opacity: ${hasFailOrSuccessStatus ? 0 : 1};
    pointer-events: ${hasFailOrSuccessStatus ? 'none' : 'auto'};
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    form {
      height: ${hasFailOrSuccessStatus ? '36.5rem' : 'auto'};
    }
  }

  @media (max-width: 767px) {
    form {
      height: ${hasFailOrSuccessStatus ? '100vh' : 'auto'};
    }
  }
`

export { formCSS, generateDynamicFormCSS }
