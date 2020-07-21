import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { tablet, mobile, desktop, above } }) => css`
  & {
    display: flex;
  }

  .map-wrap {
    top: 0;
    left: 0;
    width: 41.25%;
    height: 100vh;
  }

  ${desktop.all} {
    & {
      margin-top: 64px;
    }

    .map-wrap {
      height: calc(100vh - 64px);
    }
  }

  ${tablet.all} {
    & {
      margin-top: 4rem;
    }

    .map-wrap {
      height: calc(100vh - 4rem);
    }
  }

  ${above.mobile} {
    .form-wrap {
      display: flex
    }

    .book-a-call {
      margin-top: ${calcRem(379)}; /* TODO: Тупой хак, что бы просто показать вёрстку заказчику, удалить потом */
      margin-left: ${calcRem(72)};
      margin-right: ${calcRem(20)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: 3.5rem;
      flex-direction: column;
    }

    .book-a-call {
      display: none;
    }

    .map-wrap {
      order: 1;
      position: relative;
      width: 100%;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
