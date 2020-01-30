import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`
  & {
    order: 2;
    height: 100%;
    flex-grow: 1;
  }

  .menu {
    padding-left: ${calcRem(32)};
    padding-right: ${calcRem(32)};
    display: flex;
    align-items: center;
    height: 100%;
  }

  .menu-item {
    color: white;
    letter-spacing: 0;

    &:not(:first-of-type) {
      margin-left: ${calcRem(17)};
    }

    &_active {
      color: #5695ED;
    }
  }

  @media (pointer: fine) {
    .menu-item:hover {
      color: #5695ED;
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(52)};
      height: auto;
      flex-grow: 0;
    }

    .menu {
      flex-direction: column;
      align-items: flex-start;
    }

    .menu-item {
      letter-spacing: ${calcRem(1)};
      border: none;
      background-color: transparent;

      &:not(:first-of-type) {
        margin-top: ${calcRem(16)};
        margin-left: ${calcRem(0)};
      }
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
