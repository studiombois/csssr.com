import { css } from '@emotion/core'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

const line = require.context('../../../public/images/jobs-faq/line?csssr-images')

export default {
  base: props => {
    const { desktop, tablet, mobile } = props.theme.breakpoints

    return css`
      margin-top: 9rem;
      margin-bottom: 4rem;
      align-items: center;
      width: 100%;
      background-repeat: repeat-x !important;
      background-size: 25.25rem !important;
      background-position: center bottom 78%;

      .image {
        display: block;
        grid-column: 5 / span 4;
        margin-bottom: 9rem;
      }

      ${desktop.all} {
        background-position: center bottom 76%;
      }

      ${tablet.all} {
        background-size: 21.875rem !important;
        background-position: center bottom 86%;

        .image {
          margin-right: auto;
          margin-left: auto;
        }
      }

      ${mobile.all} {
        margin-top: 4.875rem;
        margin-bottom: 4.875rem;
        background-size: 18.75rem !important;
        background-position: center bottom 87%;

        .image {
          grid-column: 1 / span 6;
          margin-right: auto;
          margin-left: auto;
        }
      }
    `
  },
  ie11: props => {
    return (
      props.isIe11 &&
      css`
        .image {
          -ms-grid-column: ${getGridValueForMs(5)};
          -ms-grid-column-span: ${getGridValueForMs(4)};
          -ms-grid-row: 1;
        }
      `
    )
  },
}


export const backgroundImagesStyles = () => css`
  ${backgroundCssSmart('.image-wrapper', line)}
`
