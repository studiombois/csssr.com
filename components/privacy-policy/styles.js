import css from 'styled-jsx/css'

export default css`
  div {
    grid-column: 6 / span 6;
    padding-top: 14.5rem;
  }

  h2,
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

  li {
    position: relative;
    padding-left: 1rem;
  }

  li:before {
    content: '';
    position: absolute;
    top: 0.5625rem;
    left: 0;
    box-sizing: border-box;
    width: 0.5rem;
    height: 0.5rem;
    border: 0.125rem solid black;
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

  @media (min-width: 368px) and (max-width: 1279px) {
    div {
      padding-top: 13.875rem;
    }
  }
`
