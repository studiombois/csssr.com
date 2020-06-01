import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors, lng}) => css`
  ${mobile.all} {
    & {
      position: fixed;
      z-index: 9999999;
      padding-left: ${calcRem(16)};
      padding-right: ${calcRem(16)};
      padding-bottom: ${calcRem(32)};
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform: translateY(100%);
      transition: transform 150ms ease-in;

      /* background-color: red; */
      background-color: #101112;
      overflow: auto;
      pointer-events: auto;
    }

    &.is_visible {
      transform: translateY(0);
    }

    .close_button {
      position: absolute;
      top: 0;
      left: 0;
      width: ${calcRem(80)};
      height: ${calcRem(64)};
      border: none;
      border: ${calcRem(21)} solid #18191B;
      background: none;
      background-color: #9B9B9B;
    }

    .title {
      position: sticky;
      top: ${calcRem(-2)};
      margin-top: ${calcRem(99)};
      padding: 0 ${calcRem(24)};
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size:  ${calcRem(20)};
      line-height:  ${calcRem(20)};
      letter-spacing:  ${calcRem(1)};
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .subtitle {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(8)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1)};
      text-transform: uppercase;
      color: #9B9B9B;
    }

    .title.stuck {
      font-size: ${calcRem(14)};
    }

    .manager {
      margin-top: ${calcRem(40)};
      display: flex;
    }

    .manager-avatar {
      flex-shrink: 0;
      margin-right: ${calcRem(8)};
      width: ${calcRem(56)};
      height: ${calcRem(56)};
      border-radius: 50%;
      background-color: ${lng === 'ru' ? 'blue' : 'yellow'};
    }

    .manager-name {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(16)};
      line-height: ${calcRem(32)};
      color: #FFFFFF;
    }

    .manager-text {
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: ${calcRem(12)};
      line-height: ${calcRem(24)};
      color: #FFFFFF;

      a {
        color: #0076FF;
      }

      span {
        display: block;
      }

      span:last-of-type {
        color: #9B9B9B;
      }
    }

    .form {
      margin-top: ${calcRem(65)};
      width: ${calcRem(311)};
    }

    .footer-title {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(10)};
      line-height: ${calcRem(16)};
      letter-spacing: ${calcRem(1.25)};
      text-transform: uppercase;
      text-align: center;
      color: #9B9B9B;
    }

    footer {
      margin-top: ${calcRem(32)};

      ul {
        margin-top: ${calcRem(24)};
      }

      li {
        display: flex;
      }

      li:not(:first-of-type) {
        margin-top: ${calcRem(16)};
      }

      li span {
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(16)};
        color: #9B9B9B;
      }

      li a {
        margin-left: auto;
        font-family: Roboto;
        font-style: normal;
        font-weight: 300;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(16)};
        text-align: right;
        text-decoration-line: underline;
        color: #0076FF;
      }
    }


  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  console.log('xx', props.lng)
  return css`
    ${base({ breakpoints, colors, lng: props.lng })}
  `
}
