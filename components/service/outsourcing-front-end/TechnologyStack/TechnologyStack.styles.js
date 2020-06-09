import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  ${desktop.all} {
    .subtitle {
      margin-top: 31px;
    }

    .subtitle + .description {
      margin-top: 40px;
    }

    .description + .description {
      margin-top: 24px;
    }

    .link {
      margin-top: 28px;
    }

    .picture {
      position: absolute;
      top: 0;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 469px;
    }

    .title,
    .subtitle,
    .description,
    .link {
      grid-column: 2 / span 4;
    }

    .picture {
      top: -141px;
      right: 152px;
      width: 728px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 413px;
    }

    .title,
    .subtitle,
    .description,
    .link {
      grid-column: 2 / span 5;
    }

    .picture {
      top: -58px;
      right: -10px;
      width: 572px;
      overflow: hidden;

      img {
        margin-left: 16px;
      }
    }
  }

  ${desktop.s} {
    & {
      margin-top: 325px;
    }

    .title,
    .subtitle,
    .description,
    .link {
      grid-column: 2 / span 5;
    }

    .picture {
      top: -8px;
      right: -24px;
      width: 540px;
      overflow: hidden;

      img {
        margin-left: 16px;
      }
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(278)};
    }

    .title,
    .description,
    .link {
      grid-column: 2 / span 5;
    }

    .subtitle {
      margin-top: ${calcRem(26)};
      grid-column: 2 / span 4;
    }

    .subtitle + .description {
      margin-top: ${calcRem(30)};
    }

    .description + .description {
      margin-top: ${calcRem(16)};
    }

    .link {
      margin-top:  ${calcRem(16)};
    }

    .picture {
      position: absolute;
      top: ${calcRem(-52)};
      right: ${calcRem(-30)};
      width: ${calcRem(448)};
      overflow: hidden;

      img {
        margin-left: ${calcRem(16)};
      }
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(162)};
    }

    .title {
      text-align: center;
    }

    .subtitle {
      margin-top: ${calcRem(34)};
    }

    .subtitle + .description {
      margin-top: ${calcRem(22)};
    }

    .description + .description {
      margin-top: ${calcRem(8)};
    }

    .link {
      margin-top:  ${calcRem(24)};
    }

    .picture {
      margin-left: ${calcRem(-16)};
      margin-top: ${calcRem(25)};
      width: calc(100% + ${calcRem(32)});
    }

    .title,
    .subtitle,
    .description,
    .picture,
    .link {
      grid-column: 1 / span 6;
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.l} {
    .title,
    .subtitle,
    .description,
    .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${desktop.m} {
    .title,
    .subtitle,
    .description,
    .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${desktop.s} {
    .title,
    .subtitle,
    .description,
    .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }
  }

  ${tablet.all} {
    .title,
    .description,
    .link {
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(5)};
    }

    .subtitle {
      margin-top: ${calcRem(26)};
      -ms-grid-column: ${getGridValueForMs(2)};
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }
  }

  ${mobile.all} {
    .title,
    .subtitle,
    .description,
    .link,
    .picture {
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
