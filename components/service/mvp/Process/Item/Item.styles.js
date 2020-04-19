import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  ${desktop.all} {
    .description {
      margin-top: 8px;
    }
  }

  ${tablet.all} {
    .description {
      margin-top: ${calcRem(6)};
    }
  }

  ${mobile.all} {
    .description {
      margin-top: ${calcRem(6)};
      font-size: ${calcRem(14)};
    }
  }
`;


export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};
