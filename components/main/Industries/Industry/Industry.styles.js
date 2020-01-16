import { css } from '@emotion/core'
import getGridValueForMs from '../../../../utils/style/getGridValueForMs'
import calcRem from '../../../../utils/style/calcRem'


const base = ({ breakpoints: { tablet, mobile }, colors }) => css`
  & {
    margin-top: 76px;
    grid-column-end: span 4;
    cursor: pointer;
  }

  &:nth-of-type(2n+1) {
    grid-column-start: 2;
  }

  &:nth-of-type(2n) {
    grid-column-start: 8;
  }

  &:nth-of-type(n + 3) {
    margin-top: 81px;
  }

  .title,
  .description {
    text-align: left;
    color: ${colors.secondary.darken100};
  }

  .title {
    margin-top: 32px;
  }

  .description {
    margin-top: 15px;
    width: 75%;
  }

  .title,
  .icon {
    display: inline-block;
  }

  .icon {
    margin-left: 16px;
    opacity: 0;
    transition: opacity 100ms ease-out;
  }

  @media (pointer: fine) {
    &:hover .icon {
      opacity: 1;
    }
  }

  ${tablet.all} {
    &,
    &:nth-of-type(n + 3) {
      margin-top: ${calcRem(56)};
    }

    .title {
      margin-top: ${calcRem(22)};
    }

    .description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }

    .icon {
      display: none;
    }
  }

  ${mobile.all} {
    &,
    &:nth-of-type(2n+1),
    &:nth-of-type(2n) {
      grid-column: 1 / span 6;
    }

    & {
      margin-top: ${calcRem(31)};
    }

    &:not(:first-of-type) {
      margin-top: ${calcRem(73)};
    }

    .title {
      margin-top: ${calcRem(22)};
    }

    .description {
      margin-top: ${calcRem(9)};
      width: 100%;
    }

    .icon {
      display: none;
    }
  }
`

const ie11Styles = ({ breakpoints: { mobile }}) => css`
  .title {
    & {
      -ms-grid-column-span: ${getGridValueForMs(4)};
    }

    &:nth-of-type(2n+1) {
      -ms-grid-column: ${getGridValueForMs(2)};
    }

    &:nth-of-type(2n) {
      -ms-grid-column: ${getGridValueForMs(8)};
    }
  }

  ${mobile.all} {
    &,
    &:nth-of-type(2n+1),
    &:nth-of-type(2n) {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
