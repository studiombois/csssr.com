import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors, breakpoints: { tablet }, lng }) => css`
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
    transition: color 200ms ease-out;

    &:hover {
      color: ${colors.primary.origin};
    }
  }

  ${tablet.all} {
    margin-top: ${lng === 'ru' ? calcRem(72) : calcRem(50)};
  }
`

export default props => {
  const colors = props.theme.colors
  const breakpoints = props.theme.breakpoints
  const { lng }  = props

  return css`
    ${base({ colors, breakpoints, lng })}
  `
}
