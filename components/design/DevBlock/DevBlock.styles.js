import { css } from '@emotion/react'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(152)};
  }

  .heading {
    grid-row: 1;
    grid-column: 2 / span 4;
    font-weight: 400;
  }

  .text {
    grid-row: 2;
    grid-column: 2 / span 4;
    margin-top: ${calcRem(32)};
    line-height: ${calcRem(32)};
    font-weight: 300;
  }

  .idea {
    grid-row: 3;

    & .button {
      background-color: #F9555A;
    }

    & .button::before {
      background-image: url(${require('../../../static/icons/design/triangle.svg').default});
    }

    @media (hover: hover) and (pointer: fine) {
      & .button:hover {
        background-color: #C74044;
      }
    }
  }

  .devBlock__link {
    color: #F9555A;
    text-decoration: underline;
    text-emphasis-color: #F9555A;
    white-space: nowrap;

    &:visited {
      color: #F9555A;
    }
  }

  ${desktop.m} {
    .heading {
      grid-column: 2 / span 5;
    }

    .text {
      grid-column: 2 / span 5;
    }
  }

  ${desktop.s} {
    .heading {
      grid-column: 2 / span 6;
    }

    .text {
      grid-column: 2 / span 5;
      width: 544px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(104)};
      margin-bottom: ${calcRem(128)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .heading-text {
      left: ${calcRem(-5)};
    }

    .text {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(24)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      font-weight: normal;
    }

    .idea {
      grid-row: 1 / span 3;
      grid-template-columns: repeat(6,3rem);
      grid-gap: 0 0.5rem;
      width: 20.5rem;
      align-content: flex-start;
      margin-top: ${calcRem(52)};
      margin-bottom: 0;

      & .heading-wrapper {
        grid-column: span 6;
        width: 100%;
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(88)};
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
    }

    .text {
      grid-row: 2;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(24)};
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
      font-weight: normal;
    }

    .idea {
      grid-row: 3;
      grid-column: 1 / span 6;
      grid-template-columns: repeat(6,3rem);
      grid-gap: 0 0.5rem;
      width: 20.5rem;
      min-height: auto;
      margin-top: ${calcRem(155)};
    }

  }
`
const StyledDevBlock = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
export default StyledDevBlock
