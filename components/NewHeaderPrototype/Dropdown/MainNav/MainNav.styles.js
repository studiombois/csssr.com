import { css } from '@emotion/core'
import calcRem from '../../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }, colors}) => css`
  ${mobile.all} {
    & {
      padding-top: ${calcRem(24)};
      padding-bottom: ${calcRem(24)};
      z-index: 3;
      width: 100%;
      height: calc(100% - ${calcRem(49)});
      background-color: ${colors.secondary.darken100};
      overflow: auto;
    }

    .main-nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      &:not(:first-of-type) {
        margin-top: ${calcRem(40)};
      }
    }

    .main-nav-item-button {
      display: block;
      width: 40px;
      height: 40px;
      background: none;
      background-color: #434343;
      transition: transform 75ms ease-in;
      border: none;
    }


    .main-nav-item.is_active {
      .main-nav-item-button {
        transform: scale(1.4);
        border: 3px solid #0054D7;
      }

      .main-nav-item-title {
        transform: translateY(${calcRem(4)});
      }
    }

    .main-nav-item-title {
      margin-top: ${calcRem(4)};
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: ${calcRem(8)};
      line-height: ${calcRem(16)};
      text-align: center;
      letter-spacing: ${calcRem(1)};
      text-transform: uppercase;
      color: #9B9B9B;
      transition: transform 75ms ease-in;
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
