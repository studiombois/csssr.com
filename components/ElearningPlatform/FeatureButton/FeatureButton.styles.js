import { css } from '@emotion/core'

const base = css`

    & {
        width: 292px;
    }

    .no-wrap {
      white-space: nowrap;
    }

    .image {
        margin-bottom: -30px;
        display: block;
    }

    .image img{
        width: 100%;
        height: auto;
    }

    .wrapper {
        background-color: #ffffff;
        box-shadow: 0px 25px 50px rgba(78, 81, 144, 0.07), 0px 4px 7px rgba(78, 81, 144, 0.15);
        border-radius: 5px;
        padding-top: 42px;
        padding-bottom: 22px;
        padding-right: 32px;
        padding-left: 32px;
        border: 1px solid #FFFFFF;
    }

    &:hover .wrapper {
        box-shadow: 0px 25px 50px rgba(78, 81, 144, 0.07), 0px 4px 7px rgba(78, 81, 144, 0.4);

    }

    .wrapper-active {
        border: 1px solid #3B95FF;
    }

    .font-p-2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .font-p-4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .title {
        margin-bottom: 5px;
    }


    @media screen and (max-width: 944px) {
        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }

        &{
            width: 200px;
        }

        .image {
            margin-bottom: -30px;
            display: block;
        }

        .wrapper {
            padding-top: 40px;
            padding-bottom: 20px;
            padding-right: 30px;
            padding-left: 15px;
        }
    }

    @media screen and (max-width: 720px) {
        & {
            width: 70%;
            height: 350px;
            align-self: stretch;
        }

        &:not(:first-of-type ) {
            margin-left: 25px;
        }

        .wrapper {
            height: calc(100% - 90px);
        }

        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
    }

`

export default css`
  ${base}
`
