import { css } from '@emotion/core'

const base = css`

    .no-wrap {
      white-space: nowrap;
    }

    & {
        grid-column: 2 / span 7;
        /* margin-top: 30px; */
        margin-bottom: 30px;
        transition: all 0.1s ease-in;
        border-bottom: 1px solid #FFFFFF;
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
    }

    .header-icon {
        display: inline;
        margin-right: 40px;
        margin-top: 10px;
    }

    .minus {
        display: none;
    }

    .plus {
        display: block;
    }

    .header h3 {
        display: inline;
    }

    .text {
        margin-left: 70px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 30px;
        justify-content: space-between;
        margin-bottom: 20px;
        max-height: 0;
        opacity: 0;
        transition: max-height 0.3s ease, opacity 0.2s ease;
    }

    .text p {
        flex: 1 60%;
    }

    .text-image {
        display: inline-block;
    }

    .text-image img {
        height: 175px;
        width: auto;
    }

    &:hover {
        cursor: pointer;
    }

    &.visible .text {
        opacity: 1;
        max-height: 500px;  /* нужно для плавного изменения высоты https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css */
        margin-bottom: 90px;
    }

    &.visible .plus{
        display: none;
    }

    &.visible .minus {
        display: block;
    }

    @media screen and (max-width: 1492px) {
        & {
            grid-column: 1 / span 7;
        }
    }


    @media screen and (max-width: 944px) {

    }

    @media screen and (max-width: 720px) {

    }

`

export default css`
  ${base}
`

