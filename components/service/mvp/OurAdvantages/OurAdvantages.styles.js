import { css } from "@emotion/core";
import getGridValueForMs from "../../../../utils/style/getGridValueForMs";
import calcRem from "../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .advantages-group:first-of-type {
      margin-top: 202px;
      grid-column: 2 / span 4;
    }

    .advantages-group:last-of-type {
      margin-top: -54px;
      grid-column: 8 / span 4;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 265px;
    }

    & > .title {
      grid-column: 3 / span 3;
    }

    .advantages-group:first-of-type {
      margin-top: 202px;
    }

    .advantages-group:last-of-type {
      margin-top: -54px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 305px;
    }

    & > .title {
      grid-column: 3 / span 4;
    }

    .advantages-group:first-of-type {
      margin-top: 148px;
    }

    .advantages-group:last-of-type {
      margin-top: -68px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 225px;
    }

    & > .title {
      grid-column: 3 / span 4;
    }

    .advantages-group:first-of-type {
      margin-top: 144px;
    }

    .advantages-group:last-of-type {
      margin-top: -70px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(222)};
    }

    & > .title {
      grid-column: 3 / span 3;
    }

    .advantages-group:first-of-type {
      margin-top: ${calcRem(102)};
      grid-column: 2 / span 4;
    }

    .advantages-group:last-of-type {
      margin-top: ${calcRem(-36)};
      grid-column: 8 / span 4;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(182)};
    }

    & > .title {
      text-align: center;
    }

    .advantages-group:first-of-type {
      margin-top: ${calcRem(56)};
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
