import { css } from "@emotion/core";
import calcRem from "../../../../../utils/style/calcRem";

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.l} {
    & {
      margin-top: 103px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 91px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 91px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(63)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(54)};
    }
  }
`;

export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};
