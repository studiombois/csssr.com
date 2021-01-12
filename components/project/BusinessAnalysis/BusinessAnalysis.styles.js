import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .heading {
    font-weight: bold;
  }

  .description {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
  }

  .paragraph {
    font-weight: normal;   
  }

  .image-description {
    font-weight: 900;    
  }

  ${desktop.all} {
    & {
      padding-top: 140px;
    }

    .description-wrapper {
      grid-column: 2 / span 5;
    }

    .heading {
      margin-top: 12px;
      font-size: 48px;
      line-height: 64px;
      font-weight: bold;
    }

    .description {
      margin-top: 40px;
      font-size: 32px;
      line-height: 48px;
    }

    .text-wrapper {
      margin-top: 40px;
    }

    .paragraph {
      font-size: 24px;
      line-height: 40px;

      &:not(:first-of-type) {
        margin-top: 23px;
      }
    }

    .image-block {
      &_radar {
        grid-column: 9 / span 3;
      }

      &_steps {
        grid-column: 7 / span 3;
      }

      &_candidates {
        grid-row: 2;
        grid-column: 3 / span 3;
        margin-top: 83px;
      }
    }

    .image-description {
      margin-top: 24px;
      font-size: 24px;
      line-height: 32px;
    }
  }
  ${desktop.m} {
    .image-block {
      &_radar {
        margin-top: 68px;
      }

      &_steps {
        grid-column: 8 / span 3;
        margin-top: -135px;
      }

      &_candidates {
        margin-top: 88px;
      }
    }
  }

  ${desktop.s} {
    .image-block {
      &_radar {
        margin-top: 65px;
      }

      &_steps {
        grid-column: 8 / span 3;
        margin-top: -158px;
      }

      &_candidates {
        margin-top: 88px;
      }
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(112)};
    }

    .description-wrapper {
      grid-column: 2 / span 5;
    }

    .heading {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .description {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .text-wrapper {
      margin-top: ${calcRem(16)};
    }

    .paragraph {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }
    }

    .image-block {
      &_radar {
        grid-column: 9 / span 3;
        margin-top: ${calcRem(37)};

      }

      &_steps {
        grid-column: 8 / span 3;
        margin-top: ${calcRem(-3)};
      }

      &_candidates {
        grid-row: 2;
        grid-column: 3 / span 3;
        margin-top: ${calcRem(54)};
      }
    }

    .image-description {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(64)};
    }

    .description-wrapper {
      grid-row: 1;
      grid-column: 1 / span 6;
    }

    .heading {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .description {
      margin-top: ${calcRem(24)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(32)};
    }

    .text-wrapper {
      margin-top: ${calcRem(24)};
    }

    .paragraph {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};

      &:not(:first-of-type) {
        margin-top: ${calcRem(8)};
      }
    }

    .image-block {
      margin-top: ${calcRem(56)};

      &_radar {
        grid-row: 2;
        grid-column: 1 / span 6;
      }

      &_steps {
        grid-row: 3;
        grid-column: 1 / span 6;
      }

      &_candidates {
        grid-row: 4;
        grid-column: 1 / span 6;
      }
    }

    .image-description {
      margin-top: ${calcRem(16)};
      font-size: ${calcRem(18)};
      line-height: ${calcRem(24)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
