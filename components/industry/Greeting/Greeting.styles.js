import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ theme }) => {
  const breakpoints = theme.breakpoints
  // const media = theme.media
  // const points = theme.media.points

  return (
    css`
      & {
        grid-template-rows: max-content max-content;
        padding-top: 11rem;

        .heading {
          grid-column: 2 / span 5;
          grid-row: 1;
          margin-bottom: 5rem;
        }

        .text {
          grid-column: 2 / span 5;
          grid-row: 2;
          margin-bottom: 5rem;
        }

        .image {
          position: relative;
          grid-column: 7 / span 5;
          grid-row: 1 / 4;
          z-index: -1;
          border: 1px solid gray;
        }

        .button {
          grid-column: 2 / span 2;
          grid-row: 3;
        }

        ${breakpoints.desktop.m} {
          padding-top: 11.5rem;

          .heading {
            grid-column: 2 / span 7;
            margin-bottom: 5rem;
          }

          .text {
            margin-bottom: 4.5rem;
          }

          .image {
            border: 1px solid gray;
            grid-column: 6 / span 7;
          }

          .button {
            grid-column: 2 / span 3;
          }
        }

        ${breakpoints.desktop.s} {
          padding-top: 11.5rem;

          .heading {
            grid-column: 2 / span 7;
            margin-bottom: 5rem;
          }

          .text {
            grid-column: 2 / span 5;
            margin-bottom: 3.5rem;
          }

          .image {
            grid-column: 6 / span 7;
            margin-top: 6rem;
          }

          .button {
            grid-column: 2 / span 3;
          }
        }

        ${breakpoints.tablet.all} {
          padding-top: 11.5rem;

          .heading {
            grid-column: 2 / span 7;
            margin-bottom: 1.5rem;
          }

          .text {
            grid-column: 2 / span 5;
            margin-bottom: 4.5rem;
          }

          .image {
            grid-column: 6 / span 7;
          }

          .button {
            grid-column: 2 / span 3;
          }
        }

        ${breakpoints.mobile.all} {
          padding-top: 5rem;

          .heading,
          .text,
          .button {
            grid-column: 1 / span 6;
          }

          .heading {
            margin-bottom: 2rem;
          }

          .text {
            margin-bottom: 4rem;
          }

          .image {
            display: none;
          }
        }
      }
    `
  )
}

const ie11Styles = ({ isIe11, theme }) => {
  const breakpoints = theme.breakpoints

  return (
    isIe11 && css`
      & {
        -ms-grid-template-rows: max-content max-content;
  
        .heading {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
          -ms-grid-row: 1;
        }

        .text {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
          -ms-grid-row: 2;
        }

        .image {
          -ms-grid-column: ${getGridValueForMs(7)};
          -ms-grid-column-span: ${getGridValueForMs(5)};
          -ms-grid-row: 1;
          -ms-grid-row-span: 4;
        }

        .button {
          -ms-grid-column: ${getGridValueForMs(2)};
          -ms-grid-column-span: ${getGridValueForMs(2)};
          -ms-grid-row: 3;
        }

        ${breakpoints.desktop.m} {
          .heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .image {
            -ms-grid-column: ${getGridValueForMs(6)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .button {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(3)};
          }
        }

        ${breakpoints.desktop.s} {
          .heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(5)};
          }

          .image {
            -ms-grid-column: ${getGridValueForMs(6)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .button {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(3)};
          }
        }

        ${breakpoints.tablet.all} {
          .heading {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .text {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(5)};
          }

          .image {
            -ms-grid-column: ${getGridValueForMs(6)};
            -ms-grid-column-span: ${getGridValueForMs(7)};
          }

          .button {
            -ms-grid-column: ${getGridValueForMs(2)};
            -ms-grid-column-span: ${getGridValueForMs(3)};
          }
        }
      }
    `
  )
}

export default props => css`
  ${base(props)}
  ${ie11Styles(props)}
`