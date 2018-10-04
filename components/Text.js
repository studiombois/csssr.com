import React from 'react'

const Text = () =>
  <style jsx global>{`
    h1 {
      margin: 0;
    }

    p {
      margin: 0;
    }

    a {
      text-decoration: none;
    }

    .font_h1-slab {
      font-family: Roboto Slab;
      font-size: 4rem;
      font-weight: 300;
      line-height: 5rem;
      color: #000000;
    }

    .font_h1-regular {
      font-family: Roboto;
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 3.5rem;
      color: #4a4a4a;
    }

    .font_h2-slab {
      margin-top: -2px;
      padding-bottom: 2px;
      font-family: Roboto Slab;
      font-size: 3rem;
      line-height: 4rem;
      font-weight: normal;
      color: #000000;
    }

    .font_h2-regular {
      margin-top: -7px;
      padding-bottom: 7px;
      font-family: Roboto;
      font-size: 1.5rem;
      font-weight: 900;
      line-height: 2rem;
      color: #4a4a4a;
    }

    .font_h3-regular {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 900;
      line-height: 1.5rem;
      color: #4a4a4a;
    }

    .font_subhead-slab {
      margin-top: -3px;
      padding-bottom: 3px;
      font-family: Roboto Slab;
      font-size: 2rem;
      font-weight: 300;
      line-height: 3rem;
      color: #4a4a4a;
    }

    .font_subhead-regular {
      margin-top: -2px;
      padding-bottom: 2px;
      font-family: Roboto;
      font-size: 2rem;
      font-weight: 100;
      line-height: 3rem;
      color: #4a4a4a;
    }

    .font_button-label,
    .font_button-label_custom_color {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 900;
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    .font_button-label_custom_color {
      color: inherit;
    }

    .font_link-list_16 {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      text-decoration: underline;
      color: #0076ff;
    }

    .font_link_list-24 {
      margin-top: -7px;
      padding-bottom: 7px;
      font-family: Roboto;
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 2rem;
      text-decoration: underline;
      color: #0076ff;
    }

    .font_link-list_28 {
      margin-top: -4px;
      padding-bottom: 4px;
      font-family: Roboto;
      font-size: 1.75rem;
      font-weight: 300;
      line-height: 2.5rem;
      text-decoration: underline;
      color: #0076ff;
    }

    .font_footer-link,
    .font_footer-text {
      margin-top: -6px;
      padding-bottom: 6px;
      font-family: Roboto;
      font-size: 0.625rem;
      font-weight: 500;
      line-height: 1.5rem;
      color: #0076ff;
    }

    .font_footer-text {
      font-weight: 300;
      color: #000000;
    }

    .font_input-basic-label,
    .font_input-error-label {
      font-family: Roboto;
      font-size: 0.875rem;
      line-height: 1rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: #c5c5c5;
    }

    .font_input-error-label {
      color: #d0021b;
    }

    .font_input-small-Label,
    .font_input-focus-label {
      margin-top: -2px;
      padding-bottom: 2px;
      font-family: Roboto;
      font-size: 0.625rem;
      line-height: 1rem;
      letter-spacing: 0.08125rem;
      text-transform: uppercase;
      color: #9b9b9b;
    }

    .font_input-focus-label {
      color: #0076ff;
    }

    .font_input-placeholder {
      margin-top: -7px;
      padding-bottom: 7px;
      font-family: Roboto;
      font-size: 1.5rem;
      font-weight: 100;
      line-height: 2rem;
      color: #c0c0c0;
    }

    .font_inputted-text-regular,
    .font_inputted-text-error {
      margin-top: -7px;
      padding-bottom: 7px;
      font-family: Roboto;
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 2rem;
      color: #000000;
    }

    .font_inputted-text-error {
      color: #d0021b;
    }

    .font_burger-menu {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 900;
      line-height: 3rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: #4a4a4a;
    }

    .font_top-menu {
      margin-top: -3px;
      padding-bottom: 3px;
      font-family: Roboto;
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 2rem;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      color: #0076ff;
    }

    .font_p16-regular {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.5rem;
      color: #4a4a4a;
    }

    .font_p24-strong {
      margin-top: -3px;
      padding-bottom: 3px;
      font-family: Roboto;
      font-size: 1.5rem;
      line-height: 2.5rem;
      color: #4a4a4a;
    }

    .font_perforator-16-black {
      font-family: Roboto;
      font-size: 1rem;
      font-weight: 900;
      line-height: 1.5rem;
      letter-spacing: 0.0625rem;
      text-transform: uppercase;
      color: #9b9b9b;
    }

    .font_perforator-10-regular {
      margin-top: -2px;
      padding-bottom: 2px;
      font-family: Roboto;
      font-size: 0.625rem;
      line-height: 1rem;
      letter-spacing: 0.08125rem;
      text-transform: uppercase;
      color: #4a4a4a;
    }

    .font_feature_1 {
      margin-top: -3px;
      padding-bottom: 3px;
      font-family: Roboto;
      font-size: 4.0625rem;
      line-height: 4.875rem;
      font-weight: 900;
      color: #000000;
    }

    .font_feature_2 {
      font-family: Roboto;
      font-size: 2.8125rem;
      font-style: italic;
      line-height: 3.75rem;
      color: #000000;
    }

    .font_feature_3 {
      margin-top: -6px;
      padding-bottom: 6px;
      font-family: Roboto;
      font-size: 3.75rem;
      font-weight: 100;
      line-height: 4.375rem;
      color: #000000;
    }
  `}</style>

export default Text
