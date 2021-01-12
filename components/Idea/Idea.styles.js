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
    bottom: 50%;
    z-index: 2;
    margin-right: -17rem;
    left: calc(100% + ${calcRem(60)});
    animation-name: buttonPosition;
    animation-duration: 1.8s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: none;
    animation-play-state: running;
    will-change: transform;
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
      background-image: url(${require('../../static/icons/projects/triangle.svg').default});
      background-size: contain;
      background-repeat: no-repeat;
      width: ${calcRem(44)};
      height: ${calcRem(44)};
    }

    &_gazpromNeft {
      background-color: #6490DF;

      &::before {
        background-image: url(${require('../../static/icons/projects/p4Triangle.svg').default});
      }
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
      text-align: center;
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }

    .button-wrapper {
      margin-top: 1.5rem;
      margin-right: auto;
      position: static;
    }

    .button::before {
      display: none;
    }
  }

  @keyframes buttonPosition {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(20%);
    }
  }
`


export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
