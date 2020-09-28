import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(128)};
  }

  .cases-wrapper {
    grid-column: 1 / span 12;
    margin-top: ${calcRem(56)};
  }

  .heading {
    grid-column: 2 / span 5;
  }

  .button {
    grid-column: 2 / span 2;
    margin-top: ${calcRem(56)};
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(80)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(112)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(72)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .cases-wrapper {
      margin-top: ${calcRem(32)};
    }

    .button {
      grid-column: 1 / span 4;
      margin-top: ${calcRem(40)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(102)};
    }

    .cases-wrapper {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(32)};
    }

    .heading {
      grid-column: 1 / span 6;
    }

    .button {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(60)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
