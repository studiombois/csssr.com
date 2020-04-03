import { css } from "@emotion/core";
import getGridValueForMs from "../../../../utils/style/getGridValueForMs";
import calcRem from "../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .advantages-group:first-of-type {
      margin-top: 195px;
      grid-column: 2 / span 4;
    }

    .advantages-group:last-of-type {
      margin-top: -14px;
      grid-column: 8 / span 4;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 493px;
    }

    & > .title {
      grid-column: 3 / span 3;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 349px;
    }

    & > .title {
      grid-column: 3 / span 4;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 357px;
    }

    & > .title {
      grid-column: 3 / span 4;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(379)};
    }

    & > .title {
      grid-column: 3 / span 3;
    }

    .advantages-group:first-of-type {
      margin-top: ${calcRem(121)};
      grid-column: 2 / span 4;
    }

    .advantages-group:last-of-type {
      margin-top: ${calcRem(-10)};
      grid-column: 8 / span 4;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(175)};
    }

    & > .title {
      text-align: center;
    }

    .advantages-group:first-of-type {
      margin-top: ${calcRem(73)};
    }

    .advantages-group:last-of-type {
      margin-top: ${calcRem(65)};
    }

    & > .title,
    .advantages-group:first-of-type,
    .advantages-group:last-of-type {
      grid-column: 1 / span 6;
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.all} {
    .advantages-group:first-of-type {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .advantages-group:last-of-type {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.l} {
    & > .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.m} {
    & > .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.s} {
    & > .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${tablet.all} {
    & > .title {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    .advantages-group:first-of-type {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .advantages-group:last-of-type {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    & > .title,
    .advantages-group:first-of-type,
    .advantages-group:last-of-type {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`;

export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `;
};
