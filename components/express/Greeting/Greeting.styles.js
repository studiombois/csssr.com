import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({breakpoints}) => css`
  overflow: visible;

  ${breakpoints.mobile.all} {
    padding-top: 4.75rem;
    margin-bottom: 2rem;
  }

  ${breakpoints.tablet.all} {
    padding-top: 9.75rem;
    margin-bottom: 12rem;
  }

  ${breakpoints.desktop.all} {
    padding-top: 12rem;
    margin-bottom: 11rem;
  }

  a {
    color: #fff;
  }

  .heading {
    position: relative;
    margin-top: ${calcRem(120)};
    grid-row: 1;

    ${breakpoints.desktop.all} {
      margin-top: ${calcRem(7)};
      margin-bottom: ${calcRem(53)};
      grid-column: 2 / span 4;
    }

    ${breakpoints.tablet.all} {
      margin-top: ${calcRem(52)};
      margin-bottom: 1.6875rem;
      grid-column: 2 / span 4;
    }

    ${breakpoints.mobile.all} {
      margin-top: ${calcRem(120)};
      margin-bottom: ${calcRem(27)};
      grid-column: 1 / span 6;
    }
  }

  .subheading {
    grid-row: 2;

    ${breakpoints.desktop.all} {
      grid-column: 2 / span 4;
      margin-bottom: ${calcRem(60)};
    }

    ${breakpoints.desktop.l} {
      grid-column: 2 / span 3;
    }

    ${breakpoints.tablet.all} {
      grid-column: 2 / span 4;
      margin-bottom: ${calcRem(57)};
    }

    ${breakpoints.mobile.all} {
      grid-column: 1 / span 6;
      max-width: ${calcRem(328)};
      margin-bottom: ${calcRem(49)};
    }
  }

  .button {
    grid-row: 3;
    position: relative;
    z-index: 1;

    ${breakpoints.desktop.all} {
      grid-column: 2 / span 3;
      max-width: ${calcRem(320)};
    }

    ${breakpoints.tablet.all} {
      grid-column: 2 / span 4;
    }

    ${breakpoints.mobile.all} {
      grid-column: 1 / span 6;
    }
  }

  .svg-animation-wrapper {
    margin-top: ${calcRem(56)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${calcRem(210)};
    overflow: hidden;

    ${breakpoints.desktop.all} {
      height: ${calcRem(550)};
    }

    ${breakpoints.desktop.l} {
      height: ${calcRem(630)};
    }

    ${breakpoints.tablet.all} {
      height: ${calcRem(550)};
    }
  }

  .svg-animation {
    &_visible {
      display: block;
    }

    &_invisible {
      display: none;
    }
  }

  .svg-animation-orbit {
    position: absolute;

    ${breakpoints.desktop.all} {
      width: ${calcRem(982)};
      height: ${calcRem(850)};
    }

    ${breakpoints.desktop.l} {
      top: ${calcRem(-140)};
      right: -1%;
    }

    ${breakpoints.desktop.m} {
      top: ${calcRem(-218)};
      right: ${calcRem(-334)};
    }

    ${breakpoints.desktop.s} {
      top: ${calcRem(-218)};
      right: ${calcRem(-382)};
    }

    ${breakpoints.tablet.all} {
      top: ${calcRem(-219)};
      right: ${calcRem(-534)};
      width: ${calcRem(982)};
      height: ${calcRem(850)};
    }

    ${breakpoints.mobile.all} {
      top: ${calcRem(-112)};
      right: ${calcRem(-213)};
      width: ${calcRem(390)};
      height: ${calcRem(338)};
    }

  }

  .button {
    margin-bottom: 2.5rem;
  }

  .rocket {
    position: absolute;
    display: block;

    ${breakpoints.desktop.all} {
      top: 7%;
      left: 42.5%;
      width: ${calcRem(376)};
    }

    ${breakpoints.desktop.l} {
      transform: translate(2%, 19%);
    }

    ${breakpoints.tablet.all} {
      width: ${calcRem(376)};
      top: 7%;
      left: 43%;
    }

    ${breakpoints.mobile.all} {
      top: 0;
      left: 36%;
      width: ${calcRem(146)};
    }
  }
`

const ie11Styles = () => css`
  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
    -ms-grid-row: 1;
  }

  .subheading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 2;
  }

  .button {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
    -ms-grid-row: 3;
  }
`
export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
