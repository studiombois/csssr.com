import { css } from '@emotion/react'
import calcRem from '../../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: relative;
  }

  .picture {
    position: absolute;
  }

  ${desktop.all} {
    &:not(:first-of-type) {
      margin-top: 105px;
    }

    .description {
      margin-top: 15px;
    }

    .picture {
      top: 0;
      width: 64px;
    }
  }

  ${desktop.l} {
    .picture {
      right: calc(100% + 32px);
    }
  }

  ${desktop.m} {
    .picture {
      right: calc(100% + 16px);
    }
  }

  ${desktop.s} {
    .picture {
      right: calc(100% + 16px);
    }
  }

  ${tablet.all} {
    &:not(:first-of-type) {
      margin-top: ${calcRem(104)};
    }

    .description {
      margin-top: ${calcRem(9)};
    }

    .picture {
      top: 0;
      right: calc(100% + ${calcRem(16)});
      width: ${calcRem(64)};
    }
  }

  ${mobile.all} {
    .description {
      margin-top: ${calcRem(9)};
    }

    &:not(:first-of-type) {
      margin-top: ${calcRem(63)};
    }

    .picture {
      top: ${calcRem(2)};
      right: calc(100% + ${calcRem(8)});
      width: ${calcRem(48)};
    }
  }
`;
const StyledItem = props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};

export default StyledItem