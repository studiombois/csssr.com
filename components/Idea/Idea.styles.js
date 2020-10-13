import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  .heading-wrapper {
    grid-column: 1 / span 12;
    width: ${calcRem(522)};
    margin: 0 auto;
    text-align: center;
  }

  .heading-text {
    position: relative;
    display: inline-block;
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    z-index: 2;
    right: ${calcRem(-60)};
    animation-name: buttonPosition;
    animation-duration: 1.8s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  .button {
    padding-left: ${calcRem(22)};
    padding-right: ${calcRem(22)};
    height: ${calcRem(48)};
    border-radius: ${calcRem(10)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(16)};

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: ${calcRem(7)};
      right: calc(100% - ${calcRem(8)});
      background-image: url(${require('../../static/icons/our-cases/triangle.svg').default});
      background-size: contain;
      background-repeat: no-repeat;
      width: ${calcRem(44)};
      height: ${calcRem(44)};
    }
  }

  @keyframes buttonPosition {
    0% {
      transform: translate(100%, -30px);
    }
    100% {
      transform: translate(100%, -16px);
    }
  }

  ${desktop.all} {
    & {
      margin-top: 179px;
      margin-bottom: 150px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(141)};
      margin-bottom: ${calcRem(120)};
    }

    .heading {
      grid-column: 1 / span 5;
    }

    .button::before {
      top: ${calcRem(12)};
      right: calc(100% - ${calcRem(12)});
      width: ${calcRem(48)};
      background-position: 0, 0;
    }

    @keyframes buttonPosition {
      0% {
        transform: translate(100%, -33px);
      }
      100% {
        transform: translate(100%, -26px);
      }
    }
  }

  ${mobile.all} {
    & {
      min-height: auto;
      margin-top: ${calcRem(153)};
      margin-bottom: ${calcRem(102)};
    }

    .heading-wrapper {
      margin: 0;
      grid-column: 1 / span 6;
      width: 100%;
      text-align: left;
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }

    .button-wrapper {
      top: ${calcRem(-50)};
      right: ${calcRem(-23)};
      max-width: ${calcRem(148)};
    }

    .button::before {
      top: ${calcRem(6)};

      @media (orientation: landscape) {
        &::before {
          background-position: 0 7px;
        }
      }
    }

    @keyframes buttonPosition {
      0% {
        transform: translate(100%, -6px);
      }
      100% {
        transform: translate(100%, 0);
      }
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
