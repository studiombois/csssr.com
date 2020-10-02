import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(144)};
  }

  .heading {
    grid-row: 1;
    grid-column: 2 / span 4;
    margin-top: ${calcRem(75)};
    font-weight: 300;
  }

  .text {
    grid-column: 2 / span 4;
    margin-top: ${calcRem(40)};
  }

  .logos {
    grid-row: 1 / span 3;
    grid-column: 7 / span 5;
  }

  ${desktop.m} {
    .heading {
      margin-top: ${calcRem(22)};
    }

    .text {
      grid-column: 2 / span 5;
    }

    .logos {
      grid-column: 8 / span 4;
      width: ${calcRem(433)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(176)};
    }

    .heading {
      margin-top: ${calcRem(12)};
    }

    .text {
      grid-column: 2 / span 5;
    }

    .logos {
      grid-column: 8 / span 4;
      width: ${calcRem(400)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(136)};
    }

    .heading {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(41)};
    }

    .text {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(32)};
    }

    .logos {
      grid-column: 7 / span 6;
      width: ${calcRem(464)};
    }
  }

  ${mobile.all} {
    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }

    .text {
      grid-row: 2;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(32)};
    }

    .logos {
      grid-row: 3;
      grid-column: 1 / span 6;
      width: 100%;
      margin-top: ${calcRem(32)};
    }    
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
