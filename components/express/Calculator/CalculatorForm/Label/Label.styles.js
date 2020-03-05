import { css } from '@emotion/core'

export default {
  base: ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .label {
      margin: 0;
      margin-right: 0.5rem;

      &_price {
        font-weight: bold;
        margin-left: auto;
        color: ${theme.colors.secondary.gray};
        transition: color 0.1s ease;
      }

      &_label {
        margin-right: 0.8rem;
      }
    }
  `,
}
