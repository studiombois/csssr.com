import { css } from '@emotion/core'

const base = css`

    &{
        /* position: absolute; */
        width: 292px;
    }

    .no-wrap {
      white-space: nowrap;
    }

    img {
        margin-bottom: -30px;
        display: block;
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
    }

    @media screen and (max-width: 720px) {
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

