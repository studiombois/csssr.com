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
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/square.svg').default});
    }

    .square::before {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/square-fill.svg').default});
    }

    .circle {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/circle.svg').default});
    }

    .circle::before {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/circle-fill.svg').default});
    }

    .arc {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/arc.svg').default});
      margin-top: ${calcRem(-7)};
      margin-left: ${calcRem(-3)};
    }

    .arc::before {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/arc-fill.svg').default});
    }

    .triangle {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/triangle.svg').default});
      margin-top: ${calcRem(-7)};
    }

    .triangle::before {
      background-image: url(${require('../../../../static/icons/way-of-work/transparency/triangle-fill.svg').default});
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
      left: ${calcRem(225)};
      width: ${calcRem(79)};
    }

    .circle {
      top: ${calcRem(191)};
      left: ${calcRem(157)};
      width: ${calcRem(62)};
    }

    .arc {
      top: ${calcRem(148)};
      left: ${calcRem(20)};
      width: ${calcRem(97)};
    }

    .triangle {
      top: ${calcRem(275)};
      left: ${calcRem(106)};
      width: ${calcRem(43)};
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
      width: ${calcRem(104)};
    }

    .circle {
      top: ${calcRem(252)};
      left: ${calcRem(207)};
      width: ${calcRem(81)};
    }

    .arc {
      top: ${calcRem(197)};
      left: ${calcRem(27)};
      width: ${calcRem(127)};
    }

    .triangle {
      top: ${calcRem(362)};
      left: ${calcRem(140)};
      width: ${calcRem(56)};
    }
  }
`

const ie11Styles = () => css`
  .figure.active {
    display: none;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
