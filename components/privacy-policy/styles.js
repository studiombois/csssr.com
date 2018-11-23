import css from 'styled-jsx/css'

export default css`
  div {
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
    content: attr(data-counter)
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

  @media (min-width: 768px) and (max-width: 1023px) {
    div {
      padding-top: 13.875rem;
    }
  }

  @media (max-width: 767px) {
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

    .font_p16-regular {
      margin-top: 0;
      padding-bottom: 0;
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .font_p16-regular:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`
