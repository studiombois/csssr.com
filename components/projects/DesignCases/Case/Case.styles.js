import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    text-decoration: none;

    &:first-of-type {
      grid-column: 2 / span 4;
    }

    &:last-of-type {
      grid-column: 6 / span 6;
    }
  }

  .image-wrapper {
    position: relative;

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

  ${tablet.all} {
    & {
      &:first-of-type {
        grid-column: 1 / span 5;
      }

      &:last-of-type {
        grid-column: 6 / span 7;
      }
    }

    .heading {
      margin-top: ${calcRem(16)};
    }

    .text {
      margin-top: ${calcRem(8)};
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .data-wrapper {
      margin-top: ${calcRem(8)};
    }

    .separator {
      margin: 0 ${calcRem(8)};
    }

    .separator,
    .tag,
    .country {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    && {
      grid-column: 1 / span 6;

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
      margin-top: ${calcRem(8)};
    }

    .tag,
    .text,
    .country,
    .separator {
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
