import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    cursor: pointer;
  }

  .picture-wrap {
    order: 1;
    width: 100%;
    flex-shrink: 0;
    z-index: 1;

    img {
      height: auto;
    }
  }

  .picture-wrap_radio{
    pointer-events: none;
  }

  .card-title,
  .card-description {
    text-align: left;
    color: ${colors.secondary.darken100};
  }

  .card-link {
    order: 2;
  }

  .card-title {
    margin-top: 32px;
    order: 2;
    transition: color 200ms;
  }

  .card-description {
    margin-top: 15px;
    width: 75%;
    flex-shrink: 0;
    order: 5;
  }

  .card-title {
    align-self: baseline;
  }

  .break {
    flex-basis: 100%;
    height: 0;
    order: 4;
  }

  .picture-wrap {
    position: relative;
  }

  .card-picture {
    background-color: #ffffff;
  }

  .card-picture_radio {
    background-color: transparent;
  }

  .card-picture-hovered {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 200ms;
  }

  ${tablet.all} {
    .card-title {
      margin-top: ${calcRem(22)};
    }

    .card-description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }
  }

  ${mobile.all} {
    .card-title {
      margin-top: ${calcRem(22)};
    }

    .card-description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }
  }
`

const dynamic = (canHoverAllCard, isIe11, colors) => {
  const styles = canHoverAllCard
    && `
      &:hover .card-title {
        color: ${colors.primary.origin};
      }

      &:hover .card-picture-hovered {
        opacity: 1;
      }
    `

  return isIe11
    ? css`${styles}`
    : css`
      @media (pointer: fine) {
        ${styles}
      }
    `
}

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { isLink, isNextLink, isIe11 } = props
  const canHoverAllCard = isLink || isNextLink

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic(canHoverAllCard, isIe11, colors )}
  `
}
