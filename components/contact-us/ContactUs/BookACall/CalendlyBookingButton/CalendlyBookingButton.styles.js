import { css } from '@emotion/core'
import calcRem from '../../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, above }, colors}) => css`
  & {
    padding-right: ${calcRem(27)};
    padding-left: ${calcRem(27)};
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: ${calcRem(40)};
    background: none;
    border: none;
    border: solid 0.0625rem ${colors.primary.origin};
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size:  ${calcRem(12)};
    font-weight: 900;
    line-height:  ${calcRem(24)};
    letter-spacing: ${calcRem(1.6)};
    text-transform: uppercase;
    color: ${colors.primary.origin};
    cursor: pointer;
    transition: border-color 0.3s ease-out, color 0.3s ease-out;
  }

  ${above.mobile} {
    @media (hover: hover) and (pointer: fine) {
      &:hover,
      &:active {
        color: ${colors.primary.darken15};
        border-color: ${colors.primary.darken15};
      }
    }
  }

  ${mobile.all} {
    & {
      width: 100%;
      border: none;
      color: #ffffff;
      background-color: ${colors.primary.origin};
    }
  }
`

const modal = ({ breakpoints: { mobile }, colors}) => css`
  .calendly-inline-widget,
  .calendly-inline-widget *,
  .calendly-badge-widget,
  .calendly-badge-widget *,
  .calendly-overlay,
  .calendly-overlay * {
    font-size: 16px;
    line-height: 1.2em
  }

  .calendly-inline-widget iframe,
  .calendly-badge-widget iframe,
  .calendly-overlay iframe {
    width: 100%;
    height: 100%
  }

  .calendly-popup-content {
    position: relative
  }

  .calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto
  }

  .calendly-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 9999;
    background-color: #a5a5a5;
    background-color: rgba(31, 31, 31, 0.4)
  }

  .calendly-overlay .calendly-close-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }

  .calendly-overlay .calendly-popup {
    box-sizing: border-box;
    position: absolute;
    top: 4rem;
    width: 100%;
    height: calc(100% - 4rem);
  }

  .calendly-overlay .calendly-popup .calendly-popup-content {
    height: 100%
  }

  .calendly-overlay .calendly-popup-close {
    position: absolute;
    top: ${calcRem(80)};
    right: ${calcRem(34)};
    height: 19px;
    width: 19px;
    background-image: url(${require('../../../../../static/icons/cross.svg').default});
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }

  .calendly-badge-widget {
    position: fixed;
    right: 20px;
    bottom: 15px;
    z-index: 9998
  }

  .calendly-badge-widget .calendly-badge-content {
    display: table-cell;
    width: auto;
    height: 45px;
    padding: 0 30px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
    font-family: sans-serif;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    cursor: pointer
  }

  .calendly-badge-widget .calendly-badge-content.calendly-white {
    color: #666a73
  }

  .calendly-badge-widget .calendly-badge-content span {
    display: block;
    font-size: 12px
  }

  .calendly-spinner {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    z-index: -1
  }

  .calendly-spinner>div {
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: #e1e1e1;
    border-radius: 50%;
    vertical-align: middle;
    -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
    animation: calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
  }

  .calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s
  }

  .calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s
  }

  ${mobile.all}  {
    .calendly-overlay .calendly-popup {
      position: fixed;
      top: ${calcRem(56)};
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: auto;
      min-width: 0;
      max-height: none;
      background-color: white;
      -webkit-transform: none;
      transform: none;
    }

    .calendly-spinner {
      transform: translateY(-150%);
    }

    .calendly-overlay .calendly-popup-close {
      top: ${calcRem(16)};
      right: ${calcRem(32)};
      width: ${calcRem(24)};
      height: ${calcRem(24)};
      background-image: url(${require('../../../../../static/icons/header/close.svg').default});
      background-color: ${colors.secondary.darken100};
    }
  }

  @-webkit-keyframes calendly-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }

  @keyframes calendly-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }
`
export { modal }
export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
