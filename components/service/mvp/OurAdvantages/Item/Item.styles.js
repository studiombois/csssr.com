import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  .link {
    display: block;
  }

  ${desktop.all} {
    .title {
      margin-top: 64px;
    }

    .description {
      margin-top: 20px;
    }

    .link {
      margin-top: 28px;
    }
  }

  ${desktop.l} {
    &:not(:first-of-type) {
      margin-top: 180px;
    }
  }

  ${desktop.m} {
    &:not(:first-of-type) {
      margin-top: 162px;
    }
  }

  ${desktop.s} {
    &:not(:first-of-type) {
      margin-top: 160px;
    }
  }

  ${tablet.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(79)};
    }

    .title {
      margin-top: ${calcRem(38)};
    }

    .description {
      margin-top: ${calcRem(17)};
    }

    .link {
      margin-top: ${calcRem(24)};
    }
  }

  ${mobile.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(65)};
    }

    .title {
      margin-top: ${calcRem(30)};
    }

    .description {
      margin-top: ${calcRem(17)};
    }

    .link {
      margin-top: ${calcRem(24)};
    }
  }
`;


export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};
