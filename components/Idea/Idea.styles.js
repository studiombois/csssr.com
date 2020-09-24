import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(184)};
    min-height: ${calcRem(93)};
  }

  .heading-wrapper {
    position: relative;
    grid-column: span 12;
    max-width: max-content;
    margin: 0 auto;
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    z-index: 2;
    right: ${calcRem(-206)};
    animation-name: buttonPosition;
    animation-duration: 1.8s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  .button {
    width: ${calcRem(146)};
    border-radius: ${calcRem(10)};
    font-size: ${calcRem(14)};
    line-height: ${calcRem(16)};
    
    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: ${calcRem(7)};
      left: ${calcRem(-44)};
      background-image: url(${require('../../static/icons/our-cases/triangle.svg').default});
      width: ${calcRem(44)};
      height: ${calcRem(44)};
    }
  }

  @keyframes buttonPosition {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(-16px);
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(152)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(152)};
    }
  }

  ${tablet.all} {
    & {
      min-height: ${calcRem(68)};
      margin-top: ${calcRem(112)};
    }

    .heading {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(41)};
    }

    .button-wrapper {
      right: ${calcRem(-215)};
    }

    .button::before {
      top: ${calcRem(3)};
    }

    @keyframes buttonPosition {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(10px);
      }
    }
  }

  ${mobile.all} {
    & {
      min-height: ${calcRem(83)};
      margin-top: ${calcRem(98)};
    }

    .heading-wrapper {
      margin: 0;
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }

    .button-wrapper {
      top: ${calcRem(-50)};
      right: ${calcRem(-178)};
    }

    .button::before {
      top: ${calcRem(6)};
    }

    @keyframes buttonPosition {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(6px);
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
