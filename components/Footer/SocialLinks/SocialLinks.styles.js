import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ colors, breakpoints: { mobile, tablet, desktop } }) => css`
  & {
    margin-top: ${calcRem(32)};
    display: flex;
    list-style: none;
  }

  a {
    font-size: 0;
    color: ${colors.secondary.darken100};
    transition: color 200ms ease-out;

    &:hover {
      color: ${colors.primary.origin};
    }
  }

  ${desktop.all} {
    li:not(:first-of-type) {
      margin-left: 16px;
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

    li:not(:first-of-type) {
      margin-left: ${calcRem(16)};
    }
  }

  ${mobile.all} {
    margin-top: ${calcRem(41)};
    margin-left: auto;
    margin-right: auto;
    max-width: ${calcRem(168)};
    flex-wrap: wrap;

    li {
      font-size: 0;
    }

    li:not(:first-of-type):not(:nth-of-type(5)) {
      margin-left: ${calcRem(24)};
    }

    li:nth-of-type(n + 5) {
      margin-top: ${calcRem(32)};
    }
  }
`

export default props => {
  const colors = props.theme.colors
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ colors, breakpoints })}
  `
}
