import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors, lng }) => css`
  & {
    margin-left: auto;
    padding-top: ${calcRem(55)};
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  .nav-item:nth-of-type(4) {
    width: 100px;
  }

  .title {
    display: block;
    color: ${colors.secondary.darken100};
  }

  ${desktop.l} {
    & {
      width: ${lng === 'ru' ? '588px' : '738px'};
    }
  }

  ${desktop.m} {
    & {
      width: ${lng === 'ru' ? '622px' : '752px'};
    }
  }

  ${desktop.s} {
    & {
      margin-right: 50px;
      width: ${lng === 'ru' ? '655px' : '785px'};
    }
  }

  ${tablet.all} {
    & {
      margin-right: ${calcRem(3)};
      width: ${lng === 'ru' ? calcRem(522) : calcRem(652)};
    }
  }

  ${mobile.all} {
    display: none;
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors
  const lng = props.lng

  return css`
    ${base({ breakpoints, colors, lng })}
  `
}
