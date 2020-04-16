import { css } from '@emotion/core'

const base = css`
  margin-top: 3.125rem;

  &:nth-child(odd) {
    grid-column: 2 / span 5;
  }

  &:nth-child(even) {
    grid-column: 7 / span 5;
  }

  // У элементов списка с заголовком маргин меньше
  &.smaller-margin-top:nth-child(n + 3) {
    margin-top: 6rem;
  }

  // У первых двух элементов списка с заголовком самый маленький маргин
  &.smaller-margin-top:nth-child(-n + 2) {
    margin-top: 1.5625rem;
  }

  // У элементов списка, у которых на строке есть заголовок, маргин больше
  &.bigger-margin-top:nth-child(n + 3) {
    margin-top: 7.5625rem;
  }

  h3 {
    margin-bottom: 1.5625rem;
    text-transform: uppercase;
  }

  p {
    text-align: left;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    grid-column: 3 / span 8 !important;

    h3 {
      grid-column: 3 / span 8;
      margin-top: 1rem;
      text-align: center;
    }

    &:first-child:not(.smaller-margin-top) {
      margin-top: 4.125rem;
    }

    &.smaller-margin-top:not(:first-child) {
      margin-top: 3.675rem;
    }

    &:not(:first-child):not(.smaller-margin-top),
    &:nth-child(n + 3):not(.smaller-margin-top) {
      margin-top: 2.25rem !important;
    }
  }
`

const ie11Styles = css`
  & {
    display: block;
  }

  &:nth-of-type(odd) {
    -ms-grid-column: 3;
    -ms-grid-column-span: 9;
  }

  &:nth-of-type(even) {
    -ms-grid-column: 13;
    -ms-grid-column-span: 9;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h3 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 15;
    }

    & {
      -ms-grid-column: 5 !important;
      -ms-grid-column-span: 15 !important;
    }
  }
`

const dynamic = index => css`
  @media (max-width: 1279px) {
    & {
      -ms-grid-row: ${Math.ceil(index + 1)};
    }
  }

  @media (min-width: 1280px) {
    & {
      -ms-grid-row: ${Math.ceil((index + 1) / 2)};
    }
  }
`

export default ({ index, isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
  ${dynamic(index)}
`
