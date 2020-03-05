import { css } from '@emotion/core'

export default {
  base: props => {
    const breakpoints = props.theme.breakpoints
    const colors = props.theme.colors

    return css`
      ${breakpoints.desktop.all} {
        display: flex;
        justify-content: space-between;
      }

      ${breakpoints.desktop.l} {
        margin-left: 0;
      }

      ${breakpoints.desktop.m} {
        margin-left: 13.5rem;
      }

      ${breakpoints.desktop.s} {
        margin-left: 8rem;
      }

      fieldset {
        border: none;
        margin: 0;
        padding: 0;
      }

      .form-fields {
        ${breakpoints.desktop.all} {
          padding-top: 4.8125rem;
          width: 39.0625rem;
        }

        ${breakpoints.desktop.l} {
          width: 45.625rem;
        }
      }

      .fixed-container {
        display: flex;
        flex-flow: column;
        position: relative;
        box-sizing: border-box;

        ${breakpoints.desktop.all} {
          background-color: #f9f9f9;
        }

        ${breakpoints.tablet.all} {
          width: 24rem;
        }

        @media (min-width: 1280px) and (max-width: 1599px) {
          width: 23.75rem;
          padding-left: 2.625rem;
          padding-right: 2.625rem;
        }

        @media (min-width: 1600px) {
          width: 34.5rem;
          padding-left: 4rem;
          padding-right: 4rem;
        }
      }

      .fixed-element {
        padding-top: 4.8125rem;

        @supports (position: sticky) {
          ${breakpoints.desktop.all} {
            position: sticky;
            top: 0;
          }
        }
      }

      .second-title {
        margin-bottom: 1.5rem;
        display: inline-block;
      }

      .pages-counter {
        margin-bottom: 2.5rem;
      }

      .browser-support {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;

        ${breakpoints.tablet.all} {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        ${breakpoints.mobile.all} {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      }

      .checkbox-item {
        margin-bottom: 1rem;
      }

      .recommendations {
        max-width: 27.5rem;
        margin-left: 32px;
        margin-top: 0;
        margin-bottom: 1.5rem;
      }

      .section-head {
        margin-bottom: 1.5rem;
        white-space: nowrap;
        display: inline-block;

        &_no-margin {
          margin: 0;
        }
      }

      .input-control {
        margin-bottom: 1.5rem;
        max-width: 26.4375rem;

        & > div {
          width: 100%;
        }

        ${breakpoints.below.desktop} {
          max-width: 24rem;
        }
      }

      .note {
        margin-bottom: 1rem;
        max-width: 24rem;
        font-size: 0.875rem;

        &_margin_m {
          margin-bottom: 1.5rem;
        }

        ${breakpoints.desktop.all} {
          max-width: 26.4375rem;
        }

        ${breakpoints.mobile.all} {
          font-size: 0.75rem;
        }
      }

      .label-checkbox {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .text-price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & p {
          margin: 0;
        }

        & .text-price_color_blue {
          margin-right: 0.5rem;
        }
      }

      .text-price-mention {
        font-size: 0.875rem;
        margin-bottom: 2rem;

        ${breakpoints.tablet.all} {
          margin-top: 1rem;
        }

        ${breakpoints.mobile.all} {
          margin-top: 1rem;
        }
      }

      .text-price_color_blue {
        font-weight: bold;
        color: ${colors.primary.origin};
      }

      .text-price_price {
        color: ${colors.primary.origin};
        margin-left: auto;
      }

      .checkbox-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }

      .checkbox-browser {
        padding-bottom: 1rem;
        width: 50%;

        &:nth-of-type(odd) {
          width: 40%;
        }

        ${breakpoints.mobile.all} {
          width: 100%;

          &:nth-of-type(odd) {
            width: 100%;
          }
        }
      }

      .checkbox-browser_other {
        ${breakpoints.mobile.all} {
          order: 1;
        }
      }

      .browser {
        overflow: hidden;
        transition: max-height 0.2s ease-in;

        &_visible {
          max-height: 31.25rem;
        }

        &_hidden {
          max-height: 0;
        }
      }

      .title-group h3 {
        ${breakpoints.desktop.all} {
          line-height: 2rem;
        }
      }

      .brief {
        width: 100%;

        & > textarea {
          text-align: left;
        }
      }

      .text-field {
        width: 100%;

        &_short {
          ${breakpoints.desktop.all} {
            max-width: 26.4375rem;
          }

          ${breakpoints.below.desktop} {
            max-width: 24rem;
          }
        }

        &_loop {
          margin-bottom: 1.5rem;
        }
      }

      .about-project {
        margin-bottom: 3rem;

        ${breakpoints.desktop.all} {
          max-width: 26.4375rem;
        }

        ${breakpoints.tablet.all} {
          margin-bottom: 2.5rem;
        }

        ${breakpoints.tablet.m} {
          max-width: 24rem;
        }

        ${breakpoints.mobile.all} {
          margin-bottom: 2.5rem;
        }
      }

      .button-content {
        line-height: 1rem;
        color: white;
      }

      .total-value {
        width: 100%;
        max-width: 12.5rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        box-sizing: border-box;
        color: ${colors.primary.origin};
        background-color: transparent;
        border: none;
        text-align: right;

        ${breakpoints.desktop.all} {
          font-size: 1.5rem;
        }

        ${breakpoints.mobile.all} {
          max-width: 56%;
        }

        ${breakpoints.tablet.s} {
          max-width: 7.75rem;
        }

        ${breakpoints.below.desktop} {
          font-size: 	1.1875rem;
        }
      }
    `
  },
}
