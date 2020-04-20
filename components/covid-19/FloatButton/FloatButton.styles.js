import { css } from '@emotion/core'

const base = css`

    .no-wrap {
      white-space: nowrap;
    }

    & {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        transition: all 0.1s ease-in;
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 50;
    }

    img {
        margin-bottom: -40px;
        margin-right: 20px;
        display: block;
        float: right;
    }

    .img {
        height: 100%;
        width: auto;
        z-index: 51;
    }

    .wrapper {
        width: 420px;
        height: 100px;
        padding-top: 20px;
        padding-left: 50px;
        background-color: #0076FF;
        border: 1px solid transparent;
        border-radius: 3px;
        transition: all 0.1s ease-in;
    }

    &:hover {
        bottom: 65px;
        cursor: pointer;
    }

    &:hover .wrapper {
        background-color: #3557FF;
    }

    .text-top {
        margin-top: 5px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 18px;
        line-height: 18px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .text-bottom {
        margin-top: 10px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        color: #ffffff;
        text-decoration: underline;
        letter-spacing: 0;
    }


    @media screen and (max-width: 944px) {
        .text-top {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }

        .wrapper {
            width: 380px;
            height: 100px;
            padding-top: 15px;
            padding-left: 30px;
        }
    }

    @media screen and (max-width: 720px) {
        & {
            left: 50%;
            transform: translateX(-50%);
            right: 0;
            bottom: 0;
        }

        .wrapper {
            height: 100px;
            padding-top: 30px;
            padding-left: 60px;
            border-radius: 0px;
        }

        .text-top {
            font-size: 12px;
            line-height: 12px;
        }

        .text-bottom {
            margin-top: 5px;
            font-size: 16px;
            line-height: 16px;
        }
        
        img {
            display: none;
        }
    }

`

export default css`
  ${base}
`

