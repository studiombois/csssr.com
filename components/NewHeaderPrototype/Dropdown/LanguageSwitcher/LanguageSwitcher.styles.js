import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  ${mobile.all} {
    &.switch-toggler {
      position: absolute;
      top: ${calcRem(16)};
      right: 0;
      z-index: 10;
      padding-left: ${calcRem(12)};
      padding-top: ${calcRem(9)};
      padding-bottom: ${calcRem(9)};
      display: flex;
      width: ${calcRem(67)};
      height: ${calcRem(32)};
      align-items: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(14)};
      letter-spacing: ${calcRem(1.8)};
      text-transform: uppercase;
      background: none;
      border: none;
      border: ${calcRem(1)} solid #2A2E31;
      border-right: none;
      border-radius: ${calcRem(32)} 0 0 ${calcRem(32)};
      color: #9B9B9B;
      background-color: #191D20;
      pointer-events: all;
      transition: transform 125ms ease-in;

      .arrow {
        display: none;
      }

      .planet {
        display: block;
        margin-right: ${calcRem(8)};
      }

      &.is_active {
        padding-left: 0;
        justify-content: center;
        transform: translateX(calc(100% - 100vw + ${calcRem(14)}));

        .planet {
          display: none;
        }

        span {
          display: none;
        }

        .arrow {
          margin-left: 0;
          display: block;
        }
      }
    }

    &.language-modal {
      position: absolute;
      left: ${calcRem(80)};
      z-index: 2;
      pointer-events: none;
      padding-left: ${calcRem(32)};
      width: calc(100vw - ${calcRem(80)});
      height: 100%;
      background-color: #191D20;
      overflow: auto;
      transform: translateX(100%);
      transition: transform 125ms ease-in;
      border-left: ${calcRem(1)} solid #2A2E31;

      &.is_visible {
        transform: translateX(0);
        pointer-events: auto;
      }

      .title {
        top: ${calcRem(-2)};
        padding-top: ${calcRem(21)};
        padding-bottom: ${calcRem(23)};
        position: sticky;
        display: block;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(20)};
        letter-spacing: ${calcRem(1)};
        text-transform: uppercase;
        color: white;
        background-color: #191D20;
        transition: font-size 75ms ease-in;
      }

      .title.stuck {

        border-bottom: none;
      }

      .languages {
        margin-top: ${calcRem(16)};

        li:not(:first-of-type) {
          margin-top: ${calcRem(40)};
        }
      }

      .language-region {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(10)};
        line-height: ${calcRem(16)};
        letter-spacing: ${calcRem(1.25)};
        text-transform: uppercase;
        color: #9B9B9B;
      }

      .language-link {
        margin-top: ${calcRem(16)};
        display: block;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(20)};
        letter-spacing: ${calcRem(1.8)};
        color: #FFFFFF;
      }

      .language-link.active {
        position: relative;
        color: #9B9B9B;
        pointer-events: none;

        &::after {
          content: '';
          position: absolute;
          left: ${calcRem(-32)};
          top: ${calcRem(-6)};
          height: ${calcRem(32)};
          width: ${calcRem(280)};
          background-color: rgba(155, 155, 155, 0.5);
        }
      }


    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
