import { css } from '@emotion/core'

const base = ({ breakpoints: { above, mobile } }) => css`
  & {
    display: flex;
  }

  ${above.mobile} {
    & {
      margin-top: 4rem;
    }
  }

  ${mobile.all} {
    & {
      margin-top: 3.5rem;
      flex-direction: column;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
