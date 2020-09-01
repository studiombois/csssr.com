import { css } from '@emotion/core'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

export default {
  base: props => css`
    display: block;
    height: 7.5rem;
    width: 100%;
    margin-top: 4rem;
    background-repeat: repeat !important;
    background-size: 60rem !important;

    ${props.theme.breakpoints.mobile.all} {
      height: 6.25rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      background-size: 50rem !important;
    }
  `,
}

export const backgroundImagesStyles = (images, selector) => () => css`
  ${backgroundCssSmart(selector,images)}
`
