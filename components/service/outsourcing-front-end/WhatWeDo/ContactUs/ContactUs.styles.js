import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .title,
  .subtitle {
    text-align: center;
  }

  .button {
    margin-right: auto;
    margin-left: auto;
  }

  ${desktop.all} {
    .subtitle {
      margin-top: 16px;
    }

    .button {
      margin-top: 36px;
    }
  }

  ${desktop.l} {
    & {
      margin-top: 99px;
      background-image: url(${require('../../../../../static/icons/service/outsourcing-front-end/desktop.l/contactUsBackground.svg').default});
      background-size: 1488px;
    }

    .button {
      width: 272px;
    }
  }

  ${desktop.m} {
    & {
      margin-top: 125px;
      background-image: url(${require('../../../../../static/icons/service/outsourcing-front-end/desktop.m/contactUsBackground.svg').default});
      background-size: 1344px;
    }

    .button {
      width: 208px;
    }
  }

  ${desktop.s} {
    & {
      margin-top: 125px;
      background-image: url(${require('../../../../../static/icons/service/outsourcing-front-end/desktop.s/contactUsBackground.svg').default});
      background-size: 1232px;
    }

    .button {
      width: 192px;
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(98)};
      padding-bottom: ${calcRem(48)};
      background-image: url(${require('../../../../../static/icons/service/outsourcing-front-end/tablet.all/contactUsBackground.svg').default});
      background-size: ${calcRem(944)};
    }

    .subtitle {
      margin-top: ${calcRem(14)};
    }

    .button {
      margin-top: ${calcRem(33)};
      width: ${calcRem(304)}
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(80)};
      background-image: url(${require('../../../../../static/icons/service/outsourcing-front-end/mobile.all/contactUsBackground.svg').default});
      background-size: ${calcRem(360)};
    }

    .subtitle {
      margin-top: ${calcRem(6)};
      max-width: ${calcRem(220)};
      margin-left: auto;
      margin-right: auto;
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
      font-weight: 300;
    }

    .button {
      margin-top: ${calcRem(25)};
      width: ${calcRem(216)}
    }
  }
`;

export default props => {
  const breakpoints = props.theme.breakpoints;

  return css`
    ${base({ breakpoints })}
  `;
};
