import { css } from '@emotion/core'

const base = ({ colors }) => css`
  .fact-number {
    font-weight: normal;
  }
  
  .fact-text {
    color: ${colors.secondary.darken100};
  }
`

export default props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}
