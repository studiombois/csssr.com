import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  &,
  .post-title,
  .post-description {
    color: ${colors.secondary.darken100};
  }

  &:not(:last-of-type) {
    padding-bottom: 37px;
    border-bottom: 4px solid ${colors.secondary.darken100};
    color: ${colors.secondary.darken100};
  }

  &:not(:first-of-type) {
    margin-top: 46px;
  }

  .post-description {
    margin-top: 25px;
  }

  .post-link {
    display: inline-block;
    margin-top: 16px;

    &::after {
      display: none !important;
    }
  }

  ${tablet.all} {
    &:not(:last-of-type) {
      padding-bottom: ${calcRem(29)};
      border-bottom: ${calcRem(4)} solid ${colors.secondary.darken100};
    }

    &:not(:first-of-type) {
      margin-top: ${calcRem(34)};
    }

    .post-description {
      margin-top: ${calcRem(14)};
    }

    .post-link {
      margin-top: ${calcRem(8)};
    }
  }

  ${mobile.all} {
    .post-description {
      display: none;
    }

    &:not(:last-of-type) {
      padding-bottom: ${calcRem(28)};
      border-bottom: ${calcRem(4)} solid ${colors.secondary.darken100};
    }

    &:not(:first-of-type) {
      margin-top: ${calcRem(32)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
  `
}
