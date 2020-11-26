import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  & {
    text-decoration: none;

    &.large.left {
      grid-column: 2 / span 6;
    }

    &.large.right {
      grid-column: 6 / span 6;
    }

    &.small.left {
      grid-column: 2 / span 4;
    }

    &.small.right {
      grid-column: 8 / span 4;
    }
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      transition: opacity .25s ease-in-out;
      opacity: 0;
    }
  }

  .heading {
    margin-top: ${calcRem(32)};
  }

  .text {
    grid-column: 2 / span 4;
    margin-top: ${calcRem(16)};
  }

  .data-wrapper {
    display: flex;
    align-items: center;
    margin-top: ${calcRem(12)};
  }

  .tag,
  .country,
  .separator {
    font-weight: 500;
  }

  .separator {
    margin: 0 ${calcRem(16)};
    color: ${colors.secondary.darken100};
  }	

  .plug {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: ${calcRem(32)};
    line-height: ${calcRem(48)};
    font-weight: 200;
    color: #000;
    opacity: 0;
    transition: opacity .25s ease-in-out;
  }

  ${desktop.all} {
    &:nth-of-type(n + 3) {
      margin-top: 104px;
    }
  }

  ${desktop.l} {
    &.stoovo .text {
      max-width: 656px;
    }
  }

  ${tablet.all} {
    & {
      &.large.left {
        grid-column: 1 / span 7;
      }

      &.large.right {
        grid-column: 6 / span 7;
      }

      &.small.left {
        grid-column: 1 / span 5;
      }

      &.small.right {
        grid-column: 8 / span 5;
      }

      &:nth-of-type(n + 3) {
        margin-top: ${calcRem(72)};
      }
    }

    .heading {
      margin-top: ${calcRem(16)};

      &.small {
        max-width: ${calcRem(379)};
      }
    }

    .text {
      margin-top: ${calcRem(8)};
    }

     .data-wrapper {
      margin-top: ${calcRem(8)};
    }
    .separator {
      margin: 0 ${calcRem(8)};
    }

    .text,
    .separator,
    .tag,
    .country {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }	    
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6 !important;

      &:not(:nth-of-type(1)) {
        margin-top: ${calcRem(64)};
      }
    }

    &.is_touched {
      .image-wrapper::before {
      opacity: .8;
    }

      .plug {
        opacity: 1;
      }
    }

    .heading {
      margin-top: ${calcRem(16)};
    }

    .text {
      margin-top: ${calcRem(12)};
    }

    .data-wrapper {
      flex-wrap: wrap;
      margin-top: ${calcRem(8)};
    }

    .text,
    .tag,
    .separator,
    .country {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .separator {
      margin: 0 ${calcRem(8)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover .image-wrapper::before {
      opacity: .8;
    }

    &:hover .plug {
      opacity: 1;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const { colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
