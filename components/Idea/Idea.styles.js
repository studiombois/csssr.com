import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(215)};
    margin-bottom: ${calcRem(150)};
    min-height: ${calcRem(93)};
  }

  .heading-wrapper {
    position: relative;
    grid-column: span 12;
    width: ${calcRem(522)};
    margin: 0 auto;
    text-align: center;
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    z-index: 2;
    right: ${calcRem(-100)};
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
    height: ${calcRem(48)};
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
      align-content: flex-end;
      min-height: ${calcRem(68)};
      margin-top: ${calcRem(105)};
      margin-bottom: ${calcRem(157)};
    }

    .heading-wrapper {
      width: ${calcRem(284)};
      text-align: left;
    }

    .heading {
      grid-column: 1 / span 5;
    }

    .button-wrapper {
      right: ${calcRem(-78)};
    }

    .button::before {
      top: ${calcRem(6)};
      left: ${calcRem(-48)};
      width: ${calcRem(48)};
    }

    @keyframes buttonPosition {
      0% {
        transform: translateY(-33px);
      }
      100% {
        transform: translateY(-26px);
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
      grid-column: span 6;
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
      right: ${calcRem(1)};
    }

    .button::before {
      top: ${calcRem(6)};
    }

    @keyframes buttonPosition {
      0% {
        transform: translateY(-6px);
      }
      100% {
        transform: translateY(0);
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
