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
    border-bottom: ${calcRem(1)} solid #d4d4d4;
    background-color: transparent;
    padding-top: ${calcRem(4)};
    padding-left: ${calcRem(9)};
    padding-right: ${calcRem(9)};
    padding-bottom: ${calcRem(4)};
    min-height: ${calcRem(34)};
    max-height: ${calcRem(224)};
    width: 100%;
    resize: vertical;
  }

  .textarea:focus {
    border-bottom-color: ${colors.primary.origin};
  }

  .textarea._error {
    border-bottom-color: #d0021b;
  }

  .label {
    position: absolute;
    top: ${calcRem(4)};
    left: ${calcRem(8)};
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: ${colors.secondary.gray};
    pointer-events: none;

    > span {
      opacity: 0.4
    }
  }

  .textarea._error + .label {
    color: #d0021b;
  }

  .textarea:focus + .label,
  .label._active {
    display: none;
  }
`

export default (props) => {
  const { colors } = props.theme

  return css`
    ${base({ colors })}
  `
}
