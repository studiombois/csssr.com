import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile } }) => css`
  margin-bottom: ${calcRem(256)};
  margin-right: auto;
  margin-left: auto;
  width: 1792px;
  background-color: white;

  header {
    grid-column: 2 / span 3;
    padding-top: 13.5rem;
  }

  h1 {
    display: inline-block;
  }

  div {
    grid-column: 6 / span 6;
    padding-top: 14.5rem;
  }

  div > p:not(:last-of-type) {
    margin-bottom: 1.5rem;
  }

  section {
    padding-top: 2rem;
  }

  h3 + h4,
  h3 + p,
  section + section {
    margin-top: 0.5rem;
  }

  h4 + p,
  p + ul,
  ul + p {
    margin-top: 1rem;
  }

  .list-item {
    position: relative;
  }

  .list-item::before {
    position: absolute;
    top: 0;
    left: 0;
    content: attr(data-counter);
  }

  .list-item.list-item_level_1,
  .list-item.list-item_level_2 {
    padding-left: 2rem;
  }

  .list-item.list-item_level_3 {
    padding-left: 5rem;
  }

  .list-item.list-item_level_3::before {
    padding-left: 2rem;
  }

  .font_link-list_24 {
    margin-top: 0;
    padding-bottom: 0;
    font-size: inherit;
    line-height: inherit;
  }

  .font_p16-regular:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  ${tablet.all} {
    margin-bottom: ${calcRem(168)};
  }

  ${mobile.all} {
    margin-bottom: ${calcRem(144)};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    div {
      padding-top: 13.875rem;
    }
  }

  @media (max-width: 767px) {
    header {
      grid-column: 1 / span 6;
      padding-top: 5.5rem;
    }

    p {
      margin-top: 0.125rem;
    }

    div {
      padding-top: 2.1875rem;
      grid-column: 1 / span 6;
    }

    div > p:not(:last-of-type) {
      margin-bottom: 1rem;
    }

    section {
      padding-top: 2.3125rem;
    }

    h3 + h4,
    h3 + p,
    p + h4 {
      margin-top: 1rem;
    }

    section + section {
      margin-top: 0.1875rem;
    }

    p:not(.font_p24-strong) {
      margin-top: 0.125rem;
    }

    p.font_p16-regular + section {
      margin-top: -0.3125rem;
    }

    .font_p24-strong {
      margin-bottom: 1.3125rem !important;
    }

    .font_p16-regular {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .font_p16-regular:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    .font_link-list_16 {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
`

const ie11Styles = css`
  header {
    -ms-grid-column: 3;
    -ms-grid-column-span: 5;
  }

  div {
    -ms-grid-column: 11;
    -ms-grid-column-span: 11;
  }

  @media (max-width: 767px) {
    header {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    div {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}