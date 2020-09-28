import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile } }) => css`
  & {
    text-decoration: none;

    &:first-of-type {
      grid-column: 2 / span 4;
    }

    &:last-of-type {
      grid-column: 6 / span 6;
    }

    &:hover .image-wrapper::before {
      opacity: .8;
    }

    &:hover .plug {
      opacity: 1;
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
    margin-top: ${calcRem(30)};
  }

  .text {
    margin-top: ${calcRem(15)};
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
      margin-top: ${calcRem(30)};
    }

    .text {
      margin-top: ${calcRem(10)};
    }
  }

  ${mobile.all} {
    & {
      grid-column: 1 / span 6 !important;

      &:not(:nth-of-type(1)) {
        margin-top: ${calcRem(60)};
      }
    }

    .heading {
      margin-top: ${calcRem(20)};
    }

    .text {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .text {
      margin-top: ${calcRem(10)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
