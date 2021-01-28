import { css } from '@emotion/react'

const base = ({ breakpoints: { above, mobile } }) => css`
  & {
    display: flex;
    overflow: hidden;
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

const StyledContactUs = props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}

export default StyledContactUs
