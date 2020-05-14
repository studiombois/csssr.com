import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors, breakpoints: { tablet, desktop } }) => css`
  & {
    margin-top: ${calcRem(32)};
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

  ${desktop.m} {
    & {
      margin-top: ${calcRem(46)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(46)};
    }
  }

  ${tablet.all} {
    margin-top: ${calcRem(48)};
  }
`

export default props => {
  const colors = props.theme.colors
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ colors, breakpoints })}
  `
}
