import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'


const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  & {
    margin-top: ${calcRem(216)};
  }

  .heading {
    grid-row: 1;
    grid-column: 2 / span 5;
    margin-top: ${calcRem(75)};
    font-weight: 300;
  }

  .text {
    grid-column: 2 / span 4;
    margin-top: ${calcRem(32)};
  }

  .picture-wrapper {
    position: relative;
    height: 0;
    grid-row: 1 / span 3;
    grid-column: 7 / span 5;
    overflow: hidden;
  }

  .logos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${desktop.l} {
    .picture-wrapper {
      padding-top: calc(1242 / 2184 * 100%);
    }
  }

  ${desktop.m} {
    .heading {
      margin-top: ${calcRem(22)};
    }

    .text {
      grid-column: 2 / span 5;
    }

    .picture-wrapper {
      grid-column: 8 / span 4;
      width: ${calcRem(433)};
      padding-top: calc(936 / 1299 * ${calcRem(433)});
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(176)};
    }

    .heading {
      margin-top: ${calcRem(12)};
    }

    .text {
      grid-column: 2 / span 5;
    }

    .picture-wrapper {
      grid-column: 8 / span 4;
      width: ${calcRem(400)};
      padding-top: calc(864 / 1200 * ${calcRem(400)});
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(176)};
    }

    .heading {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(41)};
    }

    .text {
      grid-column: 1 / span 5;
      margin-top: ${calcRem(32)};
    }

    .picture-wrapper {
      grid-column: 7 / span 6;
      width: ${calcRem(464)};
      padding-top: calc(864 / 1392 * ${calcRem(464)});
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(152)};
    }

    .heading {
      grid-row: 1;
      grid-column: 1 / span 6;
      margin-top: 0;
    }

    .text {
      grid-row: 2;
      grid-column: 1 / span 6;
      margin-top: ${calcRem(24)};
    }

    .picture-wrapper {
      margin-top: ${calcRem(24)};
      grid-row: 3;
      grid-column: 1 / span 6;
      width: 100%;
      padding-top: calc(609 / 984 * 100%);
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
