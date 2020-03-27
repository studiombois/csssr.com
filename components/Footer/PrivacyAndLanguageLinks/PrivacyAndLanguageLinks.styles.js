import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors }) => css`
  & {
    margin-top: ${calcRem(52)};
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & > li {
      display: flex;
    }
  }

  .link {
    text-decoration: none;
  }

  .lng-link {
    margin-left: ${calcRem(50)};
  }

  .policy-link {
    margin-left: 16px;
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
