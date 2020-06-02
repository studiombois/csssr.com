import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors }) => css`
  ${mobile.all} {
    &.switch-toggler {
      z-index: 3;
      margin-top: auto;
      padding-left: ${calcRem(16)};
      padding-top: ${calcRem(8)};
      padding-bottom: ${calcRem(8)};
      display: flex;
      width: 100%;
      align-items: center;
      font-family: Roboto;
      font-style: normal;
      font-weight: 900;
      font-size: ${calcRem(12)};
      line-height: ${calcRem(32)};
      letter-spacing: ${calcRem(1.8)};
      text-transform: uppercase;
      background: none;
      border: none;
      border-top: ${calcRem(1)} solid #101112;
      color: #9B9B9B;
      background-color: #18191B;

      &.is_active {
        color: #0054D7;
      }

      .chevron {
        margin-top: ${calcRem(-2)};
        margin-left: ${calcRem(9)};
      }
    }

    &.language-modal {
      position: absolute;
      top: ${calcRem(-64)};
      left: ${calcRem(80)};
      z-index: 2;
      pointer-events: none;
      padding-left: ${calcRem(32)};
      width: calc(100vw - ${calcRem(80)});
      height: calc(100vh - ${calcRem(64)});
      height: calc(var(--vh, 1vh) * 100 - ${calcRem(64)});
      background-color: #101112;
      overflow: auto;
      transform: translateX(-100%);
      transition: transform 125ms ease-in;

      &.is_visible {
        transform: translateX(0);
        pointer-events: auto;
      }

      .title {
        margin-top: ${calcRem(100)};
        padding-top: ${calcRem(16)};
        padding-bottom: ${calcRem(16)};
        position: sticky;
        top: ${calcRem(-2)};
        display: block;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: ${calcRem(20)};
        line-height: ${calcRem(16)};
        letter-spacing: ${calcRem(1)};
        text-transform: uppercase;
        color: white;
        background-color: #101112;
        transition: font-size 75ms ease-in;
      }

      .title.stuck {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(20)};
      }

      .languages {
        margin-top: ${calcRem(41)};

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
        font-family: Roboto;
        font-style: normal;
        font-weight: 900;
        font-size: ${calcRem(12)};
        line-height: ${calcRem(24)};
        letter-spacing: ${calcRem(1.8)};
        text-transform: uppercase;
        color: #FFFFFF;
      }

      .language-link.active {
        color: #9B9B9B;
        pointer-events: none;
        text-decoration: underline;
        text-decoration-color: ${colors.primary.origin};
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
