import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    cursor: pointer;
  }

  .card-picture {
    order: 1;
    width: 100%;
    flex-shrink: 0;
  }

  .card-title,
  .card-description {
    text-align: left;
    color: ${colors.secondary.darken100};
  }

  .card-title {
    margin-top: 32px;
    order: 2;
  }

  .card-description {
    margin-top: 15px;
    width: 75%;
    flex-shrink: 0;
    order: 5;
  }

  .card-title,
  .card-icon {
    align-self: baseline;
  }

  .break {
    flex-basis: 100%;
    height: 0;
    order: 4;
  }

  .card-icon {
    margin-left: 16px;
    opacity: 0;
    order: 3;
    transition: opacity 100ms ease-out;
  }

  ${tablet.all} {
    .card-title {
      margin-top: ${calcRem(22)};
    }

    .card-description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }

    .card-icon {
      display: none;
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

    .card-icon {
      display: none;
    }
  }
`

const dynamic = canHoverAllCard => css`
  @media (pointer: fine) {
    ${canHoverAllCard
      ? `
        &:hover .card-icon {
          opacity: 1;
        }
      `
      : `
        .card-description:hover ~ .card-icon,
        .card-title:hover ~ .card-icon{
          opacity: 1;
        }
      `
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const { isLink, isNextLink } = props
  const canHoverAllCard = isLink || isNextLink

  return css`
    ${base({ breakpoints, colors })}
    ${dynamic(canHoverAllCard)}
  `
}
