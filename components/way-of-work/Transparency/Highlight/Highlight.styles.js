import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  .figure {
    position: absolute;
    opacity: 0;
    transition: 700ms ease-out;
  }

  .figure.active {
    opacity: 1;
  }

  ${mobile.all} {
    & {
      position: sticky;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: calc((100vh - 110px) / 2);
      height: ${calcRem(110)};
    }

    .figure {
      position: relative;
      flex-shrink: 0;
      opacity: 1;
      background-position: 50% 0;
      background-repeat: no-repeat;
      padding-top: ${calcRem(1)};
      width: ${calcRem(32)};
      height: ${calcRem(32)};

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: 50% 0;
        background-repeat: no-repeat;
        opacity: 0;
        transition: 700ms ease-out;
      }
    }

    .figure.active::before {
      opacity: 1;
    }

    .square {
      background-image: url('../../../static/icons/way-of-work/transparency/square.svg');
    }

    .square::before {
      background-image: url('../../../static/icons/way-of-work/transparency/square-fill.svg');
    }

    .circle {
      background-image: url('../../../static/icons/way-of-work/transparency/circle.svg');
    }

    .circle::before {
      background-image: url('../../../static/icons/way-of-work/transparency/circle-fill.svg');
    }

    .arc {
      background-image: url('../../../static/icons/way-of-work/transparency/arc.svg');
      margin-top: ${calcRem(-7)};
      margin-left: ${calcRem(-3)};
    }

    .arc::before {
      background-image: url('../../../static/icons/way-of-work/transparency/arc-fill.svg');
    }

    .triangle {
      background-image: url('../../../static/icons/way-of-work/transparency/triangle.svg');
      margin-top: ${calcRem(-7)};
    }

    .triangle::before {
      background-image: url('../../../static/icons/way-of-work/transparency/triangle-fill.svg');
    }
  }

  ${tablet.all} {
    & {
      top: calc((100vh - 386px) / 2);
      position: sticky;
      height: ${calcRem(386)};
    }

    .square {
      top: 0;
      left: ${calcRem(226)};
      width: ${calcRem(78)};
    }

    .circle {
      top: ${calcRem(191)};
      left: ${calcRem(158)};
      width: ${calcRem(61)};
    }

    .arc {
      top: ${calcRem(149)};
      left: ${calcRem(20)};
      width: ${calcRem(95)};
    }

    .triangle {
      top: ${calcRem(275)};
      left: ${calcRem(106)};
      width: ${calcRem(42)};
    }
  }

  ${desktop.l} {
    & {
      margin-left: ${calcRem(90)};
    }
  }

  ${desktop.m} {
    & {
      margin-left: ${calcRem(16)};
    }
  }

  ${desktop.all} {
    & {
      top: calc((100vh - 507px) / 2);
      position: sticky;
      height: ${calcRem(507)};
    }

    .image {
      max-width: 400px;
    }

    .square {
      top: 0;
      left: ${calcRem(296)};
      width: ${calcRem(103)};
    }

    .circle {
      top: ${calcRem(252)};
      left: ${calcRem(207)};
      width: ${calcRem(81)};
    }

    .arc {
      top: ${calcRem(198)};
      left: ${calcRem(27)};
      width: ${calcRem(125)};
    }

    .triangle {
      top: ${calcRem(362)};
      left: ${calcRem(141)};
      width: ${calcRem(55)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
