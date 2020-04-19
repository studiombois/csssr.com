import { css } from '@emotion/core'
import getGridValueForMs from '../../../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  .icon {
    position: absolute;
  }

  ${desktop.all} {
    &:nth-of-type(odd) {
      grid-column: 3 / span 3;
    }

    &:nth-of-type(even) {
      grid-column: 8 / span 3;
    }

    .description {
      margin-top: 15px;
    }

    .icon {
      top: 0;
      width: 64px;
    }
  }

  ${desktop.l} {
    &:nth-of-type(n + 3) {
      margin-top: 120px;
    }

    .icon {
      right: calc(100% + 88px);
    }
  }

  ${desktop.m} {
    &:nth-of-type(n + 3) {
      margin-top: 97px;
    }


    .icon {
      right: calc(100% + 48px);
    }
  }

  ${desktop.s} {
    &:nth-of-type(n + 3) {
      margin-top: 97px;
    }

    .icon {
      right: calc(100% + 40px);
    }
  }

  ${tablet.all} {
    &:nth-of-type(n + 3) {
      margin-top: ${calcRem(63)};
    }

    &:nth-of-type(odd) {
      grid-column: 3 / span 3;
    }

    &:nth-of-type(even) {
      grid-column: 8 / span 3;
    }

    .description {
      margin-top: ${calcRem(9)};
    }

    .icon {
      top: ${calcRem(-8)};
      right: calc(100% + ${calcRem(32)});
      width: ${calcRem(48)};
    }
  }

  ${mobile.all} {
    &:nth-of-type(odd),
    &:nth-of-type(even) {
      grid-column: 1 / span 6;
    }

    &:not(:first-of-type) {
      margin-top: ${calcRem(75)};
    }

    &:nth-of-type(1) {
      order: 1;
    }

    &:nth-of-type(2) {
      order: 4;
    }

    &:nth-of-type(3) {
      order: 2;
    }

    &:nth-of-type(4) {
      order: 5;
    }

    &:nth-of-type(5) {
      order: 3;
    }

    &:nth-of-type(6) {
      order: 6;
    }

    .title {
      margin-left: ${calcRem(56)};
    }

    .description {
      margin-top: ${calcRem(27)};
    }

    .icon {
      top: ${calcRem(-20)};
      left: 0;
      width: ${calcRem(48)};
    }
  }
`;

const ie11Styles = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  ${desktop.all} {
    &:nth-of-type(odd) {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    &:nth-of-type(even) {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${tablet.all} {
    &:nth-of-type(odd) {
      -ms-grid-column: ${getGridValueForMs(3)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }

    &:nth-of-type(even) {
      -ms-grid-column: ${getGridValueForMs(8)};
      -ms-grid-column-span: ${getGridValueForMs(3)};
    }
  }

  ${mobile.all} {
    &:nth-of-type(odd),
    &:nth-of-type(even) {
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
