import css from 'styled-jsx/css'

export default css`
  article {
    margin-bottom: 31rem;
    margin-right: auto;
    margin-left: auto;
    width: 1792px;
    background-color: white;
  }

  header {
    // IE-11 styles
    -ms-grid-column: 3;
    -ms-grid-column-span: 5;

    // Other browsers styles
    grid-column: 2 / span 3;
    padding-top: 13.5rem;
  }

  h2 {
    display: inline-block;
  }

  div {
    // IE-11 styles
    -ms-grid-column: 11;
    -ms-grid-column-span: 11;

    // Other browsers styles
    grid-column: 6 / span 6;
    padding-top: 14.5rem;
  }

  .font_p16-regular:not(:last-of-type) {
    margin-bottom: 1rem;
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

  @media (min-width: 1360px) and (max-width: 1919px) {
    article {
      width: 1328px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    article {
      width: 1232px;
    }
  }

  @media (min-width: 1023px) and (max-width: 1279px) {
    article {
      width: 944px;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    article {
      width: 59rem;
    }

    div {
      padding-top: 13.875rem;
    }
  }

  @media (max-width: 767px) {
    article {
      margin-bottom: 13.5rem;
      width: 20.5rem;
    }

    header {
      // IE-11 styles
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;

      // Other browsers styles
      grid-column: 1 / span 6;
      padding-top: 5.5rem;
    }

    p {
      margin-top: 0.125rem;
    }

    div {
      // IE-11 styles
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;

      // Other browsers styles

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

    .font_link-list_24 {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`
