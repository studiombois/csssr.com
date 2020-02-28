import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    margin-top: ${calcRem(40)};
    display: flex;
  }

  li:not(:first-of-type) {
    margin-left: ${calcRem(16)};
  }

  .link {
    text-decoration: none;
  }

  .link-text {
    color: ${colors.primary.origin};
  }
`

export default props => {
  const colors = props.theme.colors

  return css`
    ${base({ colors })}
  `
}
