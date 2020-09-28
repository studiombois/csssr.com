import { css } from '@emotion/core'

const base = css`

    .no-wrap {
      white-space: nowrap;
    }

    .font-p-4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    & {
        width: 120px;
        height: 72px;
        display: flex;
        flex-wrap: nowrap;
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.1s ease-in;
        border: 1px solid #FFFFFF;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        /* border: 1px solid #0076FF; */
        box-shadow: 0px 25px 50px rgba(78, 81, 144, 0.07), 0px 4px 7px rgba(78, 81, 144, 0.15);
    }

    img {
        margin-right: 10px;
        width: auto;
        height: auto;
    }

    @media screen and (max-width: 944px) {
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }

        & {
            height: 56px;
        }

    }

    @media screen and (max-width: 720px) {
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }

        & {
            width: 300px;
        }

    }

`

export default css`
  ${base}
`
