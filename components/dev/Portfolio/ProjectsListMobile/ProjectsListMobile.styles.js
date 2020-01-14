import { css } from '@emotion/core'

const base = css`
  display: grid;
  grid-gap: 0 0.5rem;
  margin-top: 1rem;

  img {
      width: 100%;
      height: 9.5rem;
  }

  h4 {
    margin-top: 0.8125rem;
  }

  p {
    margin-top: 0.3125rem;
  }

  h4, p {
    text-align: left;
  }

`

const dynamic = ({ projects }) => {
  const gridColumns = 5 * projects.length

  return css`
    grid-template-columns: repeat(${gridColumns}, 3rem);
    grid-column: 1 / span ${gridColumns};

    /** 3rem занимает каждая колонка
     *  0.5rem занимает расстояние между ними
     *  9rem это сумма паддингов
    */
    width: ${gridColumns * 3 + 0.5 * (gridColumns - 1) + 1}rem;
    -ms-grid-columns: (3rem)[${gridColumns}];
    -ms-grid-column: 1;
    -ms-grid-column-span: ${gridColumns};
  `
}

export default props => css`
  ${base}
  ${dynamic(props)}
`
