import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { mobile } }) => css`
  & {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: ${calcRem(153)};
    background-image: url(${require('../../../static/icons/header/viruses.svg').default});
    background-color: #87DCB7;
    background-position: 50%;
    transition: transform 125ms ease-out;
    transform-origin: top;
    overflow: hidden;
  }

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};

    text-align: right;
    letter-spacing: ${calcRem(1.6)};
    text-transform: uppercase;

    color: #000000;
  }

  .subtitle {
    margin-left: ${calcRem(39)};
    padding-left: ${calcRem(39)};
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: ${calcRem(20)};
    line-height: ${calcRem(33)};
    border-left:  ${calcRem(1)} solid #000000;
  }

  a {
    margin-left: ${calcRem(163)};
    padding: ${calcRem(12)} ${calcRem(32)};
    display: block;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: ${calcRem(16)};
    line-height: ${calcRem(24)};
    color: #000000;

    text-align: center;
    letter-spacing: ${calcRem(1.6)};
    text-transform: uppercase;

    background: #FFFFFF;
    border: ${calcRem(2)} solid #000000;
  }

  ${mobile.all} {
    & {
      background-position: 90%;
      height: ${calcRem(80)};
    }

    .title,
    .subtitle {
      display: none;
    }

    a {
      margin-left: auto;
      margin-right: auto;
      padding: ${calcRem(12)} ${calcRem(24)};
      font-size: ${calcRem(14)};
    }
  }
`

const dynamic = invisible => css`
  & {
    transform: ${ invisible ? 'scaleY(0)' : 'scaleY(1)'};
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const invisible = props.invisible

  return css`
    ${base({ breakpoints })}
    ${dynamic(invisible)}
  `
}
