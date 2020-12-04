import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(216)};
  }

  .visually-hidden {
    position: absolute;
    height: 0;
    width: 0;
    visibility: hidden;
    overflow: hidden;
  }

  .heading {
    grid-row: 1;
    grid-column: 2 / span 4;
    margin-top: ${calcRem(30)};
    font-weight: 400;
  }

  .text {
    grid-column: 2 / span 5;
    margin-top: ${calcRem(32)};
  }

  .image {
    grid-row: 1 / span 3;
    grid-column: 8 / span 5;
    max-width: ${calcRem(656)};
    transform: translateX(-81px);
  }

  ${desktop.m} {
    .heading {
      grid-column: 2 / span 5;
    }

    .image {
      grid-column: 7 / span 6;
      transform: none;
    }
  }

  ${desktop.s} {
    .heading {
      margin-top: 0;
    }

    .text {
      grid-column: 2 / span 5;
    }

    .image {
      grid-column: 7 / span 6;
      max-width: ${calcRem(608)};
      max-height: ${calcRem(373)};
      margin-top: ${calcRem(15)};
      transform: none;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(176)};
    }

    .heading {
      grid-column: 1 / span 4;
      margin-top: ${calcRem(43)};
    }

    .text {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(24)};
    }

    .image {
      grid-column: 7 / span 6;
      width: ${calcRem(464)};
      transform: none;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(152)};
    }

    .heading {
      grid-row: 2;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(40)};
    }

    .text {
      grid-row: 3;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(22)};
    }

    .image {
      grid-row: 1;
      grid-column: 1 / span 6;
      width: 100%;
      transform: none;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
