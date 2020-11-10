import { css } from '@emotion/core'
import { backgroundCssSmart } from '@csssr/csssr.images/dist/utils/backgroundCss'

export default {
  base: props => css`
    display: block;
    height: 0;
    width: 100%;
    margin-top: 4rem;
    padding-top: 7.5rem;
    background-repeat: repeat !important;
    background-size: 60rem !important;
    overflow: hidden;

    ${props.theme.breakpoints.mobile.all} {
      margin-top: 2rem;
      margin-bottom: 1rem;
      padding-top: 6.25rem;
      background-size: 50rem !important;
    }
  `,
}

export const backgroundImagesStyles = (images, selector) => () => css`
  ${backgroundCssSmart(selector,images)}
`
