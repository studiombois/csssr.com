import { css } from "@emotion/core";
import getGridValueForMs from "../../../../utils/style/getGridValueForMs";
import calcRem from "../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  ${desktop.all} {
    .title {
      margin-top: 70px;
    }

    .subtitle {
      margin-top: 31px;
    }

    .description {
      margin-top: 43px;
    }

    .picture {
      position: absolute;
      top: 0;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 296px;
    }

    .title,
    .subtitle,
    .description {
      grid-column: 7 / span 4;
    }

    .picture {
      left: 152px;
      width: 576px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 248px;
    }

    .title {
      grid-column: 7 / span 4;
    }

    .subtitle,
    .description {
      grid-column: 7 / span 5;
    }

    .picture {
      left: 0;
      width: 544px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 224px;
    }

    .title {
      grid-column: 7 / span 6;
    }

    .subtitle,
    .description {
      grid-column: 7 / span 5;
    }

    .picture {
      left: 0;
      width: 504px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(188)};
    }

    .title {
      margin-top: ${calcRem(38)};
    }

    .title,
    .subtitle,
    .description {
      grid-column: 8 / span 5;
    }

    .subtitle {
      margin-top: ${calcRem(26)};
    }

    .description {
      margin-top: ${calcRem(30)};
    }

    .picture {
      position: absolute;
      top: 0;
      left: ${calcRem(80)};
      width: ${calcRem(384)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(143)};
    }

    .title {
      text-align: center;
    }

    .subtitle {
      margin-top: ${calcRem(34)};
    }

    .description {
      margin-top: ${calcRem(22)};
    }

    .picture {
      margin-top: ${calcRem(33)};
    }

    .title,
    .subtitle,
    .description,
    .picture {
      grid-column: 1 / span 6;
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.l} {
    .title,
    .subtitle,
    .description {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.m} {
    .title {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    .subtitle,
    .description {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.s} {
    .title {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    .subtitle,
    .description {
      -ms-grid-column: ${getGridValueForMs(7)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${tablet.all} {
    .title,
    .subtitle,
    .description {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${mobile.all} {
    .title,
    .subtitle,
    .description,
    .picture {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`;

export default props => {
  const breakpoints = props.theme.breakpoints;
  const colors = props.theme.colors;

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `;
};
