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
    font-size: 0;
    color: ${colors.secondary.darken100};
    transition: color 200ms ease-out;

    &:hover {
      color: ${colors.primary.origin};
    }
  }
`

export default props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}
