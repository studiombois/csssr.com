import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  .title {
    grid-column: 2 / span 3;
  }

  .description-wrapper {
    position: relative;
  }

  .description {
    position: absolute;
    width: 100%;
    opacity: 0;
  }

  .description_visible {
    opacity: 1;
  }

  .toggler {
    grid-column: 2 / span 3;
  }

  .picture-wrapper_with_bg {
    background-image: url(${require('../../../../static/icons/service/mvp/desktop.all/waves.svg').default});
    background-position-x: calc(50% - 572px);
    background-repeat: repeat no-repeat;
  }

  .picture {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
  }

  .picture_visible {
    position: static;
    opacity: 1;
  }

  .description,
  .waves {
    transition: opacity 0.3s ease-out;
  }

  ${desktop.all} {
    .description-wrapper {
      margin-top: 22px;
    }

    .toggler {
      margin-top: 123px;
    }

    .title,
    .description-wrapper,
    .toggler {
      grid-row: 1;
    }
  }

  ${desktop.l} {
    .description-wrapper {
      grid-column: 7 / span 4;
    }

    .picture-wrapper {
      margin-top: 32px;
      background-position-y: 85px;
    }

    .picture {
      width: 1920px;
    }
  }

  ${desktop.m} {
    .description-wrapper {
      grid-column: 7 / span 5;
    }

    .picture-wrapper {
      margin-top: 56px;
      background-position-y: 52px;
    }

    .picture {
      width: 1360px;
    }
  }

  ${desktop.s} {
    .description-wrapper {
      grid-column: 7 / span 5;

    }

    .picture-wrapper {
      margin-top: 72px;
      background-position-x: calc(50% - 720px);
      background-position-y: 0;
    }

    .picture {
      width: 1280px;
    }
  }

  ${tablet.all} {
    .toggler {
      margin-top: ${calcRem(65)};
    }

    .description-wrapper {
      margin-top: ${calcRem(8)};
      grid-column: 7 / span 5;
    }

    .picture-wrapper {
      background-position-x: calc(50% - ${calcRem(386)});
      background-position-y: ${calcRem(-136)};
      background-size: 192rem;
    }

    .picture {
      width: ${calcRem(1024)};
    }

    .title,
    .description-wrapper,
    .toggler {
      grid-row: 1;
    }
  }

  ${mobile.all} {
    .title {
      margin-top: ${calcRem(103)};
    }

    .description-wrapper {
      margin-top: ${calcRem(49)};
    }

    .description {
      transition: none;
    }

    .description_visible {
      position: static;
    }

    .title,
    .description-wrapper {
      grid-column: 1 / span 6;
      text-align: center;
    }

    .toggler {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(49)};
    }

    .picture-wrapper {
      margin-top: ${calcRem(9)};
    }

    .picture-wrapper_with_bg {
      background-image: url(${require('../../../../static/icons/service/mvp/mobile.all/waves.svg').default});
      background-size: contain;
      background-position-x: 50%;
      background-position-y: ${calcRem(25)};
      background-repeat: repeat no-repeat;
    }

    .picture {
      width: ${calcRem(360)};
    }

    .picture_visible {
      margin-top: ${calcRem(32)};
    }
  }
`

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .title,
  .toggler {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(3)};
  }

  ${desktop.l} {
    .description-wrapper {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.m} {
    .description-wrapper {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.s} {
    .description-wrapper {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};

    }
  }

  ${tablet.all} {
    .description-wrapper {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${mobile.all} {
    .title,
    .description-wrapper {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .toggler {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
