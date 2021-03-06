import { css } from '@emotion/react'
import { calcRem } from '../../../../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`

  & {
    display: block;
    font-family: Roboto, sans-serif;
    position: relative;
    margin-top: ${calcRem(20)};
    margin-left: ${calcRem(-4)};
    margin-right: ${calcRem(-4)};
    padding-left: ${calcRem(4)};
    padding-right: ${calcRem(4)};

    &._active {
      box-shadow: 0 4px 12px rgba(50, 60, 72, 0.05);
      z-index: 9;
    }
  }

  .button {
    position: relative;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    text-align: left;
    width: 100%;
    color: #18191b;
    background-color: transparent;
    border: none;
    border-bottom: ${calcRem(1)} solid #18191b;
    cursor: pointer;
    padding-left: ${calcRem(8)};
    padding-bottom: ${calcRem(3)};

    &._active {
      border-color: ${colors.primary.origin};
    }

    &::before {
      position: absolute;
      content: '';
      top: ${calcRem(10)};
      right: ${calcRem(8)};
      border: 4px solid transparent;
      transition: color 100ms ease-out;
      border-top: 4.5px solid #18191b;
    }

    &._active::before {
      border-top-color: ${colors.primary.origin};
      transform: scale(-1) translateY(${calcRem(5)});
    }

  }

  .label {
    font-weight: 300;
    font-size: ${calcRem(12)};
    line-height: ${calcRem(24)};
    width: 100%;
    color: #9b9b9b;
    padding-left: ${calcRem(8)};
    transform: translateY(${calcRem(-2)});
  }

  .popup {
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    bottom: 0;
    transform: translateY(100%);
    background: #ffffff;
    margin-left: ${calcRem(-4)};
    padding-left: ${calcRem(4)};
    padding-top: ${calcRem(10)};
    padding-bottom: ${calcRem(12)};
    box-shadow: 0 ${calcRem(4)} ${calcRem(12)} rgba(50, 60, 72, 0.05);
  }

  .popup-item {
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: #18191b;
    text-align: left;
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding-left: ${calcRem(8)};
    transition: color 100ms ease-out;

    &:disabled {
      color: #9b9b9b;
      pointer-events: none;
    }

    &:hover {
      color: ${colors.primary.origin};
    }
  }

  .popup-item + .popup-item {
    margin-top: ${calcRem(16)};
  }

  ${desktop.all} {
    & {
      margin-bottom: 46px;
    }
  }

  ${tablet.all} {
    & {
      margin-bottom: ${calcRem(30)};
    }
  }

  ${mobile.all} {
    & {
      margin-bottom: ${calcRem(32)};
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .button:hover {
      border-color: ${colors.primary.origin};

      &::before {
        border-top-color: ${colors.primary.origin};
      }
    }
  }
`
const StyledDropdown = props => {
  const { breakpoints, colors } = props.theme

  return css`
    ${base({ breakpoints, colors })}
  `
}
export default StyledDropdown
