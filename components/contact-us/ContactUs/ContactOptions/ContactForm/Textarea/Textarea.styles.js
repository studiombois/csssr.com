import { css } from '@emotion/core'
import { calcRem } from '../../../../../../utils/style/calcRem'

const base = ({ colors }) => css`

  & {
    position: relative;
    margin-top: ${calcRem(36)};
  }

  .textarea {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.darken100};
    border: none;
    border-bottom: ${calcRem(2)} solid #d4d4d4;
    background-color: transparent;
    padding-top: ${calcRem(4)};
    padding-left: ${calcRem(9)};
    padding-right: ${calcRem(9)};
    padding-bottom: ${calcRem(4)};
    height: ${calcRem(34)};
    width: 100%;
    resize: none;
  }

  .textarea:focus {
    border-bottom-color: ${colors.primary.origin};
  }

  .textarea._error {
    border-bottom-color: #d0021b;
  }

  .label {
    font-family: Roboto, sans-serif;
    pointer-events: none;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    position: absolute;
    top: ${calcRem(4)};
    left: ${calcRem(8)};
    color: ${colors.secondary.gray};

    > span {
      opacity: 0.4
    }
  }

  .textarea._error + .label {
    color: #d0021b;
  }

  .textarea:focus + .label,
  .label._active {
    transform: translateY(${calcRem(32)});
    color: ${colors.secondary.darken100};
    font-weight: 300;
    font-size: ${calcRem(12)};
    text-transform: lowercase;
  }
`

export default (props) => {
  const { colors } = props.theme

  return css`
    ${base({ colors })}
  `
}
