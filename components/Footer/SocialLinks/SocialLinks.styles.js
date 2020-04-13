import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    margin-top: ${calcRem(50)};
    display: flex;
    list-style: none;
  }

  li:not(:first-of-type) {
    margin-left: ${calcRem(16)};
  }

  a {
    color: ${colors.secondary.darken100};
  }
`

export default props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}
