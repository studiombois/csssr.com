import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  h2.title {
    text-align: center;
  }

  ${desktop.l} {
    margin-top: 358px;
  }

  ${desktop.m} {
    margin-top: 326px;
  }

  ${desktop.s} {
    margin-top: 302px;
  }

  ${tablet.all} {
    margin-top: ${calcRem(211)};
  }

  ${mobile.all} {
    margin-top: ${calcRem(152)};
  }
`;


export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};
