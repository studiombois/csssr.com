import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(168)};
  }

  .grid-heading {
    position: relative;
  }

  .heading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    grid-column: 2 / span 5;
    margin-top: ${calcRem(31)};
  }

  .picture-container {
    position: relative;
    height: 0;
    padding-top: calc(986 / 5760 * 100%);
    overflow: hidden;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(200)};
    }

    .heading {
      margin-top: ${calcRem(4)};
    }

    .picture-container {
      padding-top: calc(793 / 4080 * 100%);
    }
  }


  ${desktop.s} {
    & {
      margin-top: ${calcRem(196)};
    }

    .heading {
      margin-top: ${calcRem(4)};
    }

    .picture-container {
      padding-top: calc(793 / 3840 * 100%);
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(121)};
    }

    .heading {
      margin-top: ${calcRem(27)};
    }

    .picture-container {
      padding-top: calc(691 / 3072 * 100%);
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(76)};
    }

    .heading {
      position: static;
      margin-top: 0;
      grid-column: 1 / span 6;
    }

    .picture-container {
      margin-top: ${calcRem(-20)};
      padding-top: calc(386 / 1080 * 100%);
    }
  }
`

const ie11Styles = () => css`

  .heading {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
