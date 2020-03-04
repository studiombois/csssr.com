import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'
import getGridValueForMs from '../../../utils/style/getGridValueForMs'

const base = ({ breakpoints: { desktop, tablet }}) => css`
  & {
    margin-bottom: ${calcRem(168)};
  }

  .header {
    grid-column: 1 / span 6;
    grid-row: 1;
    margin-bottom: ${calcRem(24)};
  }

  .heading {
    padding-right: ${calcRem(68)};
    margin-bottom: ${calcRem(18)};
  }

  .skydiverWrap {
    display: flex;
    justify-content: flex-end;
    grid-column: 3 / span 4;
    grid-row: 2;
  }

  .skydiver {
    max-width: ${calcRem(167)};
    width: 100%;
    height: auto;
  }

  .textWrap{
    grid-column: 1 / span 6;
    grid-row: 3;
    margin-bottom: ${calcRem(32)};
  }

  .firstParagraph{
    margin-top: ${calcRem(-20)};
    margin-bottom: ${calcRem(16)};
  }

  .footer {
    grid-column: 1 / span 6;
    grid-row: 4;
    margin-bottom: ${calcRem(48)};
  }

  .skydiversWrap {
    grid-column: 1 / span 4;
    grid-row: 5;
  }

  .skydivers {
    max-width: ${calcRem(216)};
    width: 100%;
    height: auto;
  }

  ${tablet.all} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/organized/bg-tablet.svg').default});
      background-position: 55.5% 40.5%;
      background-repeat: no-repeat;
      background-size: 54%;
      padding-top: ${calcRem(129)};
      margin-bottom: ${calcRem(165)};
    }

    .header {
      grid-column: 2 / span 5;
    }

    .skydiverWrap {
      grid-column: 8 / span 4;
      grid-row: 1;
      margin-top: ${calcRem(-31)};
    }

    .skydiver {
      max-width: ${calcRem(298)}
    }

    .textWrap {
      grid-column: 7 / span 5;
      grid-row: 2;
      margin-top: ${calcRem(110)};
    }

    .skydiversWrap {
      grid-column: 2 / span 5;
      grid-row: 2;
      margin-top: ${calcRem(12)};
      margin-bottom: 0;
    }

    .skydivers {
      max-width: ${calcRem(345)};
    }

    .footer {
      grid-column: 4 / span 7;
      grid-row: 3;
      margin-top: ${calcRem(5)}
    }
  }

  ${desktop.all} {
    & {
      margin-bottom: ${calcRem(346)};
    }
  }

  ${desktop.s} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/organized/bg-desktop-s.svg').default});
      background-position: 56% 40%;
      background-size: ${calcRem(719)};
      background-repeat: no-repeat;
      padding-top: ${calcRem(131)};
    }

    .header {
      grid-column: 2 / span 5;
    }

    .heading {
      padding-right: 0;
      margin-bottom: ${calcRem(30)};
    }

    .skydiverWrap {
      grid-column: 8 / span 4;
      grid-row: 1;
      margin-top: ${calcRem(54)};
    }

    .skydiver {
      max-width: ${calcRem(389)};
      max-height: ${calcRem(465)};
    }

    .textWrap {
      grid-column: 7 / span 5;
      grid-row: 2;
      margin-top: ${calcRem(150)};
    }

    .firstParagraph {
      margin-bottom: ${calcRem(22)};
    }

    .skydiversWrap {
      grid-column: 2 / span 5;
      grid-row: 2;
      margin-bottom: 0;
      margin-top: ${calcRem(77)};
    }

    .skydivers {
      max-width: ${calcRem(450)};
      max-height: ${calcRem(576)};
    }

    .footer {
      grid-column: 4 / span 7;
      grid-row: 3;
      margin-top: ${calcRem(80)}
    }
  }

  ${desktop.m} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/organized/bg-desktop-m.svg').default});
      background-position: 50% 35%;
      background-size: ${calcRem(696)};
      background-repeat: no-repeat;
      padding-top: ${calcRem(131)};
    }

    .header {
      grid-column: 2 / span 5;
    }

    .heading {
      padding-right: 0;
      margin-bottom: ${calcRem(30)};
    }

    .skydiverWrap {
      grid-column: 8 / span 4;
      grid-row: 1;
      margin-top: ${calcRem(-16)};
    }

    .skydiver {
      max-width: ${calcRem(432)};
      max-height: ${calcRem(518)};
    }

    .textWrap {
      grid-column: 7 / span 5;
      grid-row: 2;
      margin-top: ${calcRem(228)};
    }

    .firstParagraph{
      margin-bottom: ${calcRem(22)};
    }

    .skydiversWrap {
      grid-column: 2 / span 5;
      grid-row: 2;
      margin-bottom: 0;
      margin-top: ${calcRem(147)};
    }

    .skydivers {
      max-width: ${calcRem(485)};
      max-height: ${calcRem(625)};
    }

    .footer {
      grid-column: 4 / span 7;
      grid-row: 3;
      margin-top: ${calcRem(68)}
    }
  }

  ${desktop.l} {
    & {
      background-image: url(${require('../../../static/icons/way-of-work/organized/bg-desktop-l.svg').default});
      background-position: 53% 39%;
      background-size: ${calcRem(1000)};
      background-repeat: no-repeat;
      padding-top: ${calcRem(131)};
    }

    .header {
      grid-column: 2 / span 5;
    }

    .heading {
      padding-right: 0;
      margin-bottom: ${calcRem(30)};
    }

    .skydiverWrap {
      grid-column: 8 / span 4;
      grid-row: 1;
      margin-top: ${calcRem(-32)};
    }

    .skydiver {
      max-width: ${calcRem(567)};
      max-height: ${calcRem(594)};
    }

    .textWrap {
      grid-column: 7 / span 5;
      grid-row: 2;
      margin-top: ${calcRem(183)};
    }

    .firstParagraph{
      margin-bottom: ${calcRem(22)};
    }

    .skydiversWrap {
      grid-column: 2 / span 5;
      grid-row: 2;
      margin-bottom: 0;
      margin-top: ${calcRem(-52)};
    }

    .skydivers {
      max-width: ${calcRem(656)};
      max-height: ${calcRem(804)};
    }

    .footer {
      grid-column: 4 / span 5;
      grid-row: 3;
      margin-top: ${calcRem(-11)}
    }
  }

`

const ie11Styles = () => css`

  .header {
    -ms-grid-column: ${getGridValueForMs(1)};
    -ms-grid-column-span: ${getGridValueForMs(6)};
  }

  .skydiverWrap {
    -ms-grid-column: ${getGridValueForMs(8)};
    -ms-grid-column-span: ${getGridValueForMs(4)};
  }

  .skydiversWrap {
    -ms-grid-column: ${getGridValueForMs(2)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .textWrap {
    -ms-grid-column: ${getGridValueForMs(7)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }

  .footer {
    -ms-grid-column: ${getGridValueForMs(4)};
    -ms-grid-column-span: ${getGridValueForMs(5)};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles()}
  `
}
