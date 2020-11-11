import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }, colors }) => css`
  * {
    padding: 0;
    margin: 0;
  }

  padding-top: calc(${calcRem(205)} + 64px);
  margin-bottom: ${calcRem(256)};
  margin-right: auto;
  margin-left: auto;
  width: 1792px;
  background-color: white;


  .header {
    grid-column: 4 / span 6;
  }

  .title {
    font-family: 'Roboto Slab', serif;
    color: black;
  }

  h3, h4 {
    color: ${colors.secondary.darken100};
  }

  p {
    color: black;
  }

  h3 + h4,
  h4 + p,
  p + h4,
  h3 + p,
  p + ul,
  ul + p,
  ul .list-item_en:not(:first-of-type) {
    margin-top: ${calcRem(16)};
  }

  .cookie-h4 {
    margin-top: ${calcRem(32)};
  }

  section .text.font_p16-regular {
    margin-bottom: 0;
  }

  .title {
    display: inline-block;
    grid-column: 4 / span 6;
  }

  .date {
    font-family: 'Roboto Slab', serif;
    margin-top: ${calcRem(8)};
  }

  .adress {
    display: block;
  }

  .content {
    grid-column: 4 / span 6;
    margin-top: ${calcRem(43)};
  }

  .cookie-content {
    margin-top: ${calcRem(24)};
  }

  .content .description.font_p16-regular {
    margin-bottom: 0;

    &:not(:first-of-type) {
      margin-top: ${calcRem(15)};
    }
  }

  .content .font_p16-regular a {
    font-size: inherit;
    line-height: inherit;
  }

  .content .cookie-description {
    margin-top: ${calcRem(40)};
    margin-bottom: 0;
  }

  section {
    margin-top: ${calcRem(50)};
  }

  .cookie-section {
    margin-top: ${calcRem(40)};
  }

  .list-item {
    position: relative;
  }

  section .list-item_en.font_p16-regular {
    margin-bottom: 0;
  }

  .list-item::before {
    position: absolute;
    top: 0;
    left: 0;
    content: attr(data-counter);
  }

  .list-item_en {
    color: black;
  }

  section .list-item.list-item_level_2 {
    margin-top: ${calcRem(16)};
    margin-bottom: 0;
  }

  .list .list-item.text,
  section .list-item.list-item_level_3 {
    margin-top: ${calcRem(15)};
    margin-bottom: 0;
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

  ${desktop.all} {
    .title {
      font-size: ${calcRem(48)};
      line-height: ${calcRem(64)};
    }

    .cookie-content > .font_p24-strong {
      margin-bottom: ${calcRem(40)};
      font-weight: 300;
    }
  }

  ${desktop.m} {
    .header {
      grid-column: 3 / span 8;
    }

    .content {
      grid-column: 3 / span 8;
    }
  }

  ${desktop.s} {
    padding-top: calc(${calcRem(206)} + 64px);

    .header {
      grid-column: 3 / span 8;
    }

    .content {
      grid-column: 3 / span 8;
    }
  }

  ${tablet.all} {
    & {
      padding-top: calc(${calcRem(144)} + 64px);
      margin-bottom: ${calcRem(168)};
    }

    h3 + h4,
    h4 + p,
    p + h4,
    h3 + p,
    p + ul,
    ul + p,
    ul .list-item_en:not(:first-of-type) {
      margin-top: ${calcRem(8)};
    }

    .header {
      grid-column: 3 / span 8;
    }

    .date {
      margin-top: ${calcRem(10)};
    }

    .content {
      grid-column: 3 / span 8;
      margin-top: ${calcRem(30)};
    }

    section {
      margin-top: ${calcRem(30)};
    }

    .description {
      font-weight: normal;
    }

    section .list-item.list-item_level_2 {
      margin-top: ${calcRem(9)};
      margin-bottom: 0;
    }

    section .list-item.list-item_level_3 {
      margin-top: ${calcRem(8)};
      margin-bottom: 0;
    }

    .header .font_h1-regular {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .content .description.font_p16-regular {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .font_p16-regular {
      font-size: ${calcRem(14)};
      line-height: ${calcRem(24)};
    }

    .cookie-content > .font_p24-strong {
      margin-bottom: ${calcRem(40)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: calc(${calcRem(80)} + 56px);
      margin-bottom: ${calcRem(144)};
    }

    h3 + h4,
    h4 + p,
    p + h4,
    h3 + p,
    p + ul,
    ul + p,
    ul .list-item_en:not(:first-of-type) {
      margin-top: ${calcRem(8)};
    }

    .header {
      grid-column: 1 / span 6;
    }

    .date {
      margin-top: ${calcRem(10)};
    }

    .content {
      grid-column: 1 / span 6;
      margin-top: ${calcRem(30)};
    }

    section {
      margin-top: ${calcRem(30)};
    }

    .description {
      font-weight: normal;
    }

    .have-square-bullets li:before {
      top: ${calcRem(6)};
    }

    .list-item.list-item_level_1 {
      padding-left: ${calcRem(19)};
    }

    section .list-item.list-item_level_2 {
      margin-top: ${calcRem(14)};
      padding-left: ${calcRem(40)};

      &:before {
        left: ${calcRem(16)};
      }
    }

    section .list-item.list-item_level_3 {
      margin-top: ${calcRem(8)};
      padding-left: ${calcRem(66)};
    }

    .header .font_h1-regular {
      font-size: ${calcRem(24)};
      line-height: ${calcRem(32)};
    }

    .content .description.font_p16-regular {
      font-size: ${calcRem(16)};
      line-height: ${calcRem(24)};
    }

    .cookie-content > .font_p24-strong {
      margin-bottom: ${calcRem(16)};
    }
  }
`

const ie11Styles = css`
  .header {
    -ms-grid-column: 3;
    -ms-grid-column-span: 5;
  }

  div {
    -ms-grid-column: 11;
    -ms-grid-column-span: 11;
  }

  @media (max-width: 767px) {
    .header {
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
  const colors = props.theme.colors

  return css`
    ${base({ breakpoints, colors })}
    ${props.isIe11 && ie11Styles({ breakpoints })}
  `
}
