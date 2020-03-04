import { css } from '@emotion/core'

export default {
  base: props => {
    const { tablet, mobile } = props.theme.breakpoints

    return css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;

      ${tablet.s} {
        flex-flow: column;
        margin-bottom: 2.5rem;
      }

      ${mobile.all} {
        flex-flow: column;
        margin-bottom: 2.5rem;
      }

      .radio-item {
        width: 28%;

        ${tablet.s} {
          width: 100%;

          &:not(:last-of-type) {
            margin-bottom: 1rem;
          }
        }

        ${mobile.all} {
          width: 100%;

          &:not(:last-of-type) {
            margin-bottom: 1rem;
          }
        }
      }
    `
  },
}
