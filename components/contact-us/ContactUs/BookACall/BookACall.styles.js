import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile, above }, colors }) => css`
  & {
    position: relative;
    display: flex;
  }

  .picture-container {
    position: relative;
    width: ${calcRem(106)};
    overflow: hidden;
    padding-top: calc(264 / 318 * ${calcRem(106)});
  }

  .manager-avatar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .manager-name {
    font-weight: 500;
    font-size: ${calcRem(14)};
    line-height: ${calcRem(24)};
  }

  .manager-position {
    font-weight: normal;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
  }

  .email-container {
    display: flex;
    align-items: baseline;
    margin-top: ${calcRem(10)};
  }

  .email-wrapper {
    position: relative;
  }

  .email {
    font-weight: 500;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(32)};
    text-decoration-line: underline;
    color: ${colors.primary.origin};
  }

  .copy-message {
    position: absolute;
    bottom: ${calcRem(-18)};
    left: 50%;
    transform: translateX(-50%);
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

  .manager-name,
  .manager-position,
  .email,
  .counter {
    font-family: Roboto;
    font-style: normal;
  }

  .manager-name,
  .manager-position {
    color: ${colors.secondary.darken100};
  }

  .counter {
    position: absolute;
    font-weight: 500;
    font-size: ${calcRem(10)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.gray};
  }

  .button-wrap {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .communication {
    width: 100%;
    font-family: Roboto, sans-serif;
    font-weight: normal;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(16)};
    text-align: center;
    color: ${colors.secondary.gray};
    margin-top: ${calcRem(10)};
  }

  .button {
    padding-right: ${calcRem(27)};
    padding-left: ${calcRem(27)};
    width: auto;
  }

  @media (pointer: fine) {
    .copy-icon-button:hover {
      color: ${colors.primary.darken15};
    }
  }

  ${above.mobile} {
    & {
      flex-direction: column;
      align-items: center;
      width: ${calcRem(260)};
    }

    .manager {
      text-align: center;
      margin-bottom: ${calcRem(40)};
    }

    .manager-name {
      margin-top: ${calcRem(12)};
    }

    .manager-name,
    .manager-position,
    .email {
      text-align: center;
    }

    .communication {
      & > span {
        display: block;
      }
    }

    .success-icon_small {
      position: absolute;
      bottom: 0;
      margin-top: ${calcRem(62)};
      width: ${calcRem(40)};
      height: ${calcRem(40)};
    }

    .counter {
      bottom: ${calcRem(8)};
      left: calc(50% + ${calcRem(32)});
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(32)};
      padding-right: 0;
      padding-bottom: 0;
      padding-left: 0;
      flex-direction: row;
      flex-wrap: wrap;
      width: ${calcRem(328)};
      background-color: white;
    }

    .manager {
      width: ${calcRem(212)};
    }

    .success-icon_big {
      margin-right: ${calcRem(16)};
    }

    .picture-container {
      margin-left: ${calcRem(9)};
      margin-bottom: ${calcRem(32)};
    }

    .manager-name {
      line-height: ${calcRem(16)};
    }

    .manager-name {
      margin-top: ${calcRem(4)};
    }

    .manager-position {
      margin-top: ${calcRem(4)};
    }

    .email-container {
      margin-top: ${calcRem(4)};
    }

    .communication {
      order: -1;
      margin-bottom: ${calcRem(4)};
    }

    .button-wrap {
      margin-top: ${calcRem(-30)};
      width: 100%;
    }

    .button {
      height: ${calcRem(40)};
      width: 100%;
      font-size: ${calcRem(12)};
      line-height: ${calcRem(24)};
    }

    .success-icon_small {
      display: none;
    }

    .success-icon_big {
      width: ${calcRem(76)};
      height: ${calcRem(76)};
    }

    .counter {
      top: ${calcRem(32)};
      right: ${calcRem(12)};
      line-height: ${calcRem(16)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .email:hover {
      color: ${colors.primary.darken15};
    }
  }
`

export default (props) => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
