import { css } from "@emotion/core";
import getGridValueForMs from "../../../../../utils/style/getGridValueForMs";
import calcRem from "../../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    & {
      margin-top: 155px;
    }
  }

  ${desktop.l} {
    & {
      grid-column: 8 / span 3;
    }
  }

  ${desktop.m} {
    & {
      grid-column: 8 / span 4;
    }
  }

  ${desktop.s} {
    & {
      grid-column: 8 / span 4;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(55)};
      grid-column: 8 / span 4;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(61)};
      grid-column: 2 / span 5;
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.l} {
    & {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${desktop.m} {
    & {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.s} {
    & {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${tablet.all} {
    & {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    & {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
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
