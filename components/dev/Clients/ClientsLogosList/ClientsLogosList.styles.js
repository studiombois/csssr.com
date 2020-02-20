import { css } from '@emotion/core'

const base = css`
  grid-column: 3 / span 8;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  transition: height 100ms linear;

  li {
    width: 17rem;
    height: 9.5rem;
  }

  li:not(:nth-child(4n)) {
    margin-right: 2rem;
  }

  li:nth-child(n + 5) {
    margin-top: 1.5rem;
  }

  li:last-child {
    margin-right: 0;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    li {
      width: 13rem;
      height: 7.5rem;
    }

    li:not(:nth-child(4n)) {
      margin-right: 1rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    li {
      width: 12rem;
      height: 7rem;
    }

    li:not(:nth-child(4n)) {
      margin-right: 1rem;
    }
  }

  @media (max-width: 1279px) {
    margin-top: 1.5rem;

    li {
      width: 9rem;
      height: 5rem;
    }

    li:not(:nth-child(4n)) {
      margin-right: 1rem;
    }

    li:nth-child(n + 5) {
      margin-top: 1rem;
    }
  }
`

const ie11Styles = css`
    -ms-grid-column: 5;
    -ms-grid-column-span: 15;
    -ms-grid-row: 4;
`

const dynamic = clients => {
  const numberOfRows = Math.ceil(clients.length / 4)

  return css`
    // высоту строки умножаем на количеество строк
    // и прибавляем высоту отступа между строк
    height: ${9.5 * numberOfRows + 1.5 * (numberOfRows - 1)}rem;

    @media (min-width: 1360px) and (max-width: 1919px) {
      height: ${7.5 * numberOfRows + 1.5 * (numberOfRows - 1)}rem;
    }

    @media (min-width: 1280px) and (max-width: 1359px) {
      height: ${7 * numberOfRows + 1.5 * (numberOfRows - 1)}rem;
    }

    @media (max-width: 1279px) {
      height: ${5 * numberOfRows + 1 * (numberOfRows - 1)}rem;
    }
  `
}

export default ({ clients, isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
  ${dynamic(clients)}
`
