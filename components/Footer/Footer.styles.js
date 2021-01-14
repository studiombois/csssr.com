import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, tablet, desktop }, colors }) => css`
  & {
    position: relative;
    margin-bottom: ${calcRem(344)};
    padding-top: ${calcRem(32)};
    padding-right: ${calcRem(102)};
    padding-bottom: ${calcRem(39)};
    padding-left: ${calcRem(32)};
    display: flex;
    flex-direction: column;
    height: ${calcRem(344)};
    background-color: white;
    box-shadow: 0px 8px 12px rgba(50, 60, 72, 0.15);
    overflow: hidden;
  }

  .top-content {
    display: flex;
  }

  .logo {
    position: relative;
    z-index: 2;
    height: ${calcRem(24)};
    display: block;
    color: ${colors.secondary.darken100};
    transition: color 100ms ease-out;
  }

  .video {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    width: 100%;
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 100ms ease-out;
    pointer-events: none;
  }

  .action-phrase {
    margin-top: ${calcRem(30)};
    color: ${colors.secondary.darken100};
  }

  .email-container {
    display: flex;
    align-items: baseline;
    margin-top: ${calcRem(16)};
  }

  .email-wrapper {
    position: relative;
  }

  .copy-message {
    position: absolute;
    bottom: ${calcRem(5)};
    left: calc(100% + ${calcRem(36)});
    font-size: ${calcRem(10)};
    line-height: ${calcRem(10)};
    font-weight: normal;
    letter-spacing: ${calcRem(1.3)};
    color: ${colors.primary.origin};
    text-transform: uppercase;
  }

  .copy-icon-button {
    position: relative;
    bottom: ${calcRem(5)};
    width: ${calcRem(16)};
    height: ${calcRem(16)};
    margin-left: ${calcRem(10)};
    border: none;
    background: none;
    color: ${colors.primary.origin};
    cursor: pointer;

    &[disabled] {
      cursor: default;
    }
  }

  .copy-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (pointer: fine) {
    .logo:hover {
      color: white;
    }

    .logo:hover ~ .lazyload-wrapper > .video {
      opacity: 1;
    }

    .copy-icon-button:hover {
      color: ${colors.primary.darken15};
    }
  }

  ${desktop.s} {
    padding-right: ${calcRem(52)};
  }

  ${tablet.all} {
    & {
      margin-bottom: ${calcRem(288)};
      padding-right: ${calcRem(41)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(40)};
      padding-right: ${calcRem(16)};
      padding-bottom: ${calcRem(16)};
      padding-left: ${calcRem(16)};
      margin-bottom: 0;
      height: auto;
      flex-direction: column;
      align-items: center;
      box-shadow: none;
    }

    .logo {
      display: none;
    }

    .top-content {
      width: 100%;
    }

    .top-content-left-wrapper {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .action-phrase {
      align-self: flex-start;
      margin-left: ${calcRem(32)};
      margin-top: 0;
    }

    .email-container {
      margin-top: ${calcRem(8)};
      margin-left: ${calcRem(32)};
      margin-right: ${calcRem(32)};
    }

    .copy-message {
      bottom: ${calcRem(-18)};
      left: 50%;
      transform: translateX(-50%);
    }

    .link-language {
      display: inline-block;
      margin-left: auto;
      text-decoration: none;
    }

    .link-text {
      color: ${colors.primary.origin};
      font-weight: 400;
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
