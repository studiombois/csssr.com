import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .picture {
    order: 1;
    width: 100%;
    flex-shrink: 0;
  }

  .title,
  .description {
    text-align: left;
    color: ${colors.secondary.darken100};
  }

  .title {
    margin-top: 32px;
    order: 2;
  }

  .description {
    margin-top: 15px;
    width: 75%;
    flex-shrink: 0;
    order: 5;
  }

  .title,
  .icon {
    align-self: baseline;
  }

  .break {
    flex-basis: 100%;
    height: 0;
    order: 4;
  }

  .icon {
    margin-left: 16px;
    opacity: 0;
    order: 3;
    transition: opacity 100ms ease-out;
  }

  ${tablet.all} {
    .title {
      margin-top: ${calcRem(22)};
    }

    .description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }

    .icon {
      display: none;
    }
  }

  ${mobile.all} {
    .title {
      margin-top: ${calcRem(22)};
    }

    .description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }

    .icon {
      display: none;
    }
  }
`

const dynamic = canHoverAllCard => css`
  @media (pointer: fine) {
    ${canHoverAllCard
      ? `
        &:hover .icon {
          opacity: 1;
        }
      `
      : `
        .description:hover ~ .icon,
        .title:hover ~ .icon{
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
