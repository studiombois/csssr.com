import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = css`
    & {
        margin-top: ${calcRem(-89)};
    }

    .no-wrap {
      white-space: nowrap;
    }
    /* Greeting */
    .greeting {
        margin-top: 190px;
    }

    .greeting-text {
        grid-column: 2 / span 5;
    }

    .greeting-red-box {
        margin-top: 60px;
    }

    .greeting-red-box img {
        max-width: 100%;
        height: auto;
    }

    .greeting-image-mobile {
        display: none;
    }

    .greeting-image-mobile img {
        max-width: 100%;
        height: auto;
    }

    .greeting-image {
        grid-column: 7 / span 6;
        /* margin-top: 60px; */
        display: block;
    }

    .greeting-image img {
        max-width: 100%;
        height: auto;
    }

    .greeting-description {
        grid-column: 3 / span 7;
        margin-top: 100px;
        z-index: 1;
        background-color: transparent;
    }

    /* Crisis */

    .crisis h2 {
        margin-top: 150px;
        grid-column: 4 / span 6;
        text-align: center;
        z-index: 3;
        background-color: transparent;
    }

    .crisis-lines {
        grid-column: 3 / span 1;
        margin-top: -90px;
        display: block;
    }

    .crisis-lines img {
        max-width: 100%;
        height: auto;
    }

    .crisis-image {
        margin-top: -80px;
        grid-column: 9 / span 3;
        z-index: 0;
        display: block;
    }

    .crisis-image img {
        max-width: 100%;
        height: auto;
    }

    /* Benefits */

    .benefits {
        margin-top: 60px;
        margin-bottom: 200px;
    }

    .benefit-3-title:hover a{
        display: block;
        color: #DF4976;
        cursor: pointer;
    }

    .benefit-3-title a {
        text-decoration: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        color: #fff;
    }

    .benefit-3-image {
        position: relative;
        display: inline-block;
    }

    .benefit-3-image-hover{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }

    .benefit-image-hover-active {
        display: inline;
    }

    .benefits-description {
        grid-column: 10 / span 3;
        grid-row: 1 / span 4;
        font-family: "Roboto", sans-serif;
        font-weight: 100;
        font-size: 24px;
        line-height: 32px;
        color: #ffffff;
        letter-spacing: 0;
        margin-bottom: 0;
    }

    /*  5 Benefit */

    .benefit-3-title {
        margin-top: 270px;
        grid-column: 3 / span 5;
        text-align: left;
    }

    .benefit-3-title-redbox {
        color: #DF4976;
    }

    .benefit-3-description {
        grid-column: 6 / span 6;
        margin-top: 40px
    }

    .benefit-3-image {
        grid-column: 3 / span 10;
        margin-top: 40px;
    }

    .benefit-3-image img {
        max-width: 100%;
        height: auto;
    }

    @media screen and (max-width: 1492px) {
        .greeting-text {
            grid-column: 2 / span 6;
        }

        .greeting-image {
            grid-column: 8 / span 5;
        }

        .crisis h2 {
            margin-bottom: 100px;
        }

        .crisis-lines {
            margin-top: -190px;
        }

        .benefit-3-title {
            grid-column: 3 / span 6;
            margin-top: 150px;
        }

        .benefits-description {
            grid-column: 9 / span 4;
        }
    }

    @media screen and (max-width: 1232px) {
        .greeting-text {
            grid-column: 1 / span 7;
            /* margin-top: 80px; */
        }
        .crisis h2 {
            grid-column: 1 / span 12;
        }
        .crisis-lines {
            grid-column: 2 / span 1;
        }

        .benefit-3-title {
            grid-column: 3 / span 7;
        }
        .benefit-3-description {
            grid-column: 6 / span 7;
        }
        .benefit-3-image {
            grid-column: 2 / span 10;
        }

    }

    @media screen and (max-width: 944px) {
        .greeting {
            margin-top: 120px;
        }

        .greeting-image {
            grid-column: 8 / span 5;
            margin-top: 100px;
        }
        .greeting-text {
            grid-column: 1 / span 7;
            margin-top: 40px;
        }
        .greeting-red-box {
            margin-top: 30px;
        }
        .greeting-red-box img {
            height: 20px;
        }

        .crisis h2 {
            margin-top: 70px;
            grid-column: 1 / span 12;
            margin-bottom: 10px;
        }
        .crisis-lines {
            grid-column: 2 / span 1;
            margin-top: -70px;
        }

        .benefits {
            margin-top: 20px;
            margin-bottom: 100px;
        }

        .benefits-description {
            grid-column: 1 / span 12;
            grid-row: 1;
            margin-bottom: 50px;
        }

        .benefit-3-title {
            margin-top: 80px;

        }

    }

    @media screen and (max-width: 768px) {
        & {
           margin-top: ${calcRem(56)};
        }
    }

    @media screen and (max-width: 720px) {
        .greeting {
            margin-top: 40px;
        }
        .greeting-text {
            margin-top: 0;
            grid-column: 1 / span 6;
        }

        .greeting-image {
            grid-column: 1 / span 6;
            margin-top: 40px;
            margin-bottom: 40px;
            display: none;
        }
        .greeting-image-mobile {
            display: block;
            grid-column: 1 / span 6;
            margin-top: 40px;
        }

        .benefits {
            margin-top: 0;
        }
        .crisis-lines {
            display: none;
        }
        .crisis h2 {
            grid-column: 1 / span 6;
            margin-top: 40px;
            text-align: left;
            margin-bottom: 40px;
        }

        .benefits-description {
            font-size: 16px;
            line-height: 24px;
        }

        .benefit-3-title {
            grid-column: 1 / span 6;
        }
        .benefit-3-description {
            grid-column: 1 / span 6;
        }
        .benefit-3-image {
            grid-column: 1 / span 6;
        }
    }
`

const grid = css`
  .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: 16px;
      margin-right: auto;
      margin-left: auto;
      width: 1492px;
  }

  @media screen and (max-width: 1492px) {
      .grid {
          width: 1232px;
      }
  }

  @media screen and (max-width: 1232px) {
      .grid {
          width: 944px;
      }
  }

  @media screen and (max-width: 944px) {
      .grid {
          width: 720px;
      }
  }

  @media screen and (max-width: 720px) {
      .grid {
          grid-template-columns: repeat(6, 1fr);
          width: 328px;
      }
  }
`

const fonts = css`
    .font-heading-1 {
        font-family: 'Roboto Slab', serif;
        font-weight: 400;
        font-size: 64px;
        line-height: 80px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .font-heading-2 {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 64px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .font-heading-3 {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 54px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .font-heading-4 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 32px;
        line-height: 48px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .font-heading-5 {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 48px;
        line-height: 60px;
        color: #ffffff;
        letter-spacing: 0;
    }

    .font-p-1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 24px;
        line-height: 40px;
        color: #FFFFFF;
    }

    .font-p-list {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 24px;
        line-height: 40px;
        color: #FFFFFF;
    }

    .font-color-blue {
        color: #DF4976;
    }

    .font-button {
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }

    .font-p-link {
        text-decoration: underline;
        color: #FFFFFF;
    }

    .font-p-link:hover {
        background-color: #B24372;
        color: #FFFFFF;
    }

    .link-big {
        font-family: "Roboto", sans-serif;
        font-size: 48px;
        color: #3557FF;
    }

    a:hover {
        color: #B24372;
    }

    @media screen and (max-width: 944px) {
        .font-heading-1 {
            font-size: 40px;
            line-height: 60px;
        }
        .font-heading-2 {
            font-size: 32px;
            line-height: 48px;
        }
        .font-heading-3 {
            font-size: 24px;
            line-height: 36px;
        }
        .font-heading-4 {
            font-size: 20px;
            line-height: 30px;
        }
        .font-heading-5 {
            font-size: 32px;
            line-height: 48px;
        }
        .font-p-1 {
            font-size: 16px;
            line-height: 24px;
        }
        .font-p-list {
            font-size: 16px;
            line-height: 24px;
        }
        .link-big {
            font-size: 32px;
        }
    }

    @media screen and (max-width: 720px) {
        .font-heading-1 {
            font-size: 32px;
            line-height: 48px;
        }
        .font-heading-2 {
            font-size: 28px;
            line-height: 42px;
        }
        .font-heading-3 {
            font-size: 20px;
            line-height: 30px;
        }
        .font-heading-4 {
            font-size: 16px;
            line-height: 24px;
        }
        .font-heading-5 {
            font-size: 28px;
            line-height: 42px;
        }
        .font-p-1 {
            font-size: 16px;
            line-height: 24px;
        }
        .font-p-list {
            font-size: 14px;
            line-height: 20px;
        }
        .link-big {
            font-size: 28px;
        }
    }
`

export default css`
  ${base}
  ${grid}
  ${fonts}
`
