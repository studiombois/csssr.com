import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

export default {
  base: props => css`
    a {
      color: #0076ff;
    }

    .heading,
    .question_line,
    .list {
      grid-column: 4 / span 6;
    }

    .icon-wrapper {
      position: absolute;
      left: 0;
      width: 2rem;
      height: 1rem;
      overflow: hidden;
    }

    .icon {
      position: absolute;
      left: -5.5rem;
      width: 12rem;
      height: 1rem;
    }

    .heading {
      margin-bottom: 0;
      position: relative;
      padding-top: 1rem;
      padding-left: 1.5rem;
      cursor: pointer;
    }

    ${props.theme.breakpoints.tablet.all} {
      .heading,
      .question_line {
        grid-column: 3 / span 8;
      }

      .heading {
        font-size: 1rem;
        line-height: 1.25rem;
      }
    }

    ${props.theme.breakpoints.mobile.all} {
      .heading,
      .question_line {
        grid-column: 1 / span 6;
      }

      .heading {
        font-size: 0.875rem;
        line-height: 1.5rem;
      }
    }

    .question_line {
      border: 0;
      margin: 1rem 0 0 0;
      border-top: 1px solid #e1e1e1;
      size: 1px;
      width: 100%;
    }
  `,
  ie11: props => {
    return (
      props.isIe11 &&
      css`
        -ms-grid-rows: (auto) [3];

        .heading {
          -ms-grid-row: 1;
        }

        .question_line {
          -ms-grid-row: 3;
        }

        div {
          -ms-grid-row: 2;
        }

        .heading,
        .question_line,
        .list {
          -ms-grid-column: ${getGridValueForMs(4)};
          -ms-grid-column-span: ${getGridValueForMs(6)};
        }
      `
    )
  },
}
