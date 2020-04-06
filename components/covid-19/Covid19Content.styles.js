import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = css`
    & {
        margin-top: ${calcRem(-153)};
    }
    /* Greeting */
    .greeting {
        margin-top: 190px;
    }

    .greeting h1 {
        grid-column: 2 / span 6;
    }

    .greeting-red-box {
        grid-column: 10 / span 2;
        margin-top: 30px;
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
        grid-column: 3 / span 8;
        margin-top: 60px;
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
        grid-column: 1 / span 1;
        margin-top: -100px;
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
    }

    .benefit-1-image,
    .benefit-2-image,
    .benefit-4-image,
    .benefit-5-image {
        display: block;
    }

    .benefit-1-image-mobile,
    .benefit-2-image-mobile,
    .benefit-5-image-mobile,
    .benefit-4-image-mobile {
        display: none;
    }

    .benefit-1-title:hover a,
    .benefit-2-title:hover a,
    .benefit-3-title:hover a,
    .benefit-4-title:hover a,
    .benefit-5-title:hover a {
        display: block;
        color: #DF4976;
        cursor: pointer;
    }

    .benefit-1-title a,
    .benefit-2-title a,
    .benefit-3-title a,
    .benefit-4-title a,
    .benefit-5-title a {
        text-decoration: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        color: #fff;
    }

    .benefit-1-image,
    .benefit-2-image,
    .benefit-3-image,
    .benefit-4-image,
    .benefit-5-image {
        position: relative;
        display: inline-block;
    }

    .benefit-1-image-hover,
    .benefit-2-image-hover,
    .benefit-3-image-hover,
    .benefit-4-image-hover,
    .benefit-5-image-hover {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }

    .benefit-image-hover-active {
        display: inline;
    }

    /*  1 Benefit */

    .benefit-1-description {
        grid-column: 6 / span 5;
        margin-top: 110px;
    }

    .benefit-1-description p {
        margin-top: 30px;
    }

    .benefit-1-image {
        position: relative;
        display: inline-block;
        margin-top: 80px;
        grid-column: 2 / span 3;
    }

    .benefit-1-image img {
        max-width: 100%;
        height: auto;
    }

    /*  2 Benefit */

    .benefit-2-image {
        margin-top: 120px;
        grid-column: 8 / span 4;
    }

    .benefit-2-image img {
        max-width: 100%;
        height: auto;
    }

    .benefit-2-description {
        margin-top: 174px;
        grid-column: 2 / span 5;
    }

    .benefit-2-title h3 {
        display: inline-block;
    }

    .benefit-2-description p {
        margin-top: 30px;
    }

    .benefit-2-text-bold {
        font-weight: 600;
        background-color: transparent;
    }

    /*  3 Benefit */

    .benefit-4-description {
        grid-column: 6 / span 5;
        margin-top: 180px;
    }

    .benefit-4-description p {
        margin-top: 30px;
    }

    .benefit-4-image {
        margin-top: 180px;
        grid-column: 2 / span 3;
    }

    .benefit-4-image img {
        max-width: 100%;
        height: auto;
    }

    /*  4 Benefit */

    .benefit-5-image {
        margin-top: 174px;
        grid-column: 8 / span 4;
    }

    .benefit-5-image img {
        max-width: 100%;
        height: auto;
    }

    .benefit-5-description {
        margin-top: 174px;
        grid-column: 2 / span 5;
    }

    .benefit-5-title h3 {
        display: inline-block;
    }

    .benefit-5-description p {
        margin-top: 30px;
    }

    .benefit-5-text-bold {
        font-weight: 600;
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

    /*  Contact */

    .contact {
        margin-top: 200px;
        margin-bottom: 250px;
    }

    .wrapper {
        grid-column: 3 / span 5;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        border: 4px solid #3557FF;
        padding: 20px 20px 20px 40px;
        position: relative;
    }

    .contact p, .contact a {
        background-color: transparent;
        z-index: 1;
    }

    .wrapper:hover .link-big {
        background-color: transparent;
        color: #B24372;
    }

    .contact-image {
        grid-column: 7 / span 2;
        margin-top: -100px;
        display: block;
        position: absolute;
        right: -150px;
        top: -10px;
        background-color: #18191b;
    }

    .contact-image img {
        z-index: 10;
        max-width: 100%;
        height: auto;
    }

    @media screen and (max-width: 1492px) {
        .greeting-red-box {
            grid-column: 9 / span 3;
            /* margin-top: 100px; */
        }
        .greeting-description {
            grid-column: 3 / span 7;
            margin-top: 80px;
        }
        .crisis h2 {
            background-color: transparent;
        }
        .crisis-image {
            margin-top: -80px;
        }
        .benefit-2-image-mobile, .benefit-5-image-mobile {
            display: none;
        }
        .benefit-1-image, .benefit-2-image, .benefit-4-image, .benefit-5-image {
            display: block;
        }
        .benefit-3-title {
            grid-column: 3 / span 6;
        }
        .wrapper {
            grid-column: 3 / span 6;
        }
    }

    @media screen and (max-width: 1232px) {
        .greeting h1 {
            grid-column: 1 / span 7;
        }
        .greeting-red-box {
            grid-column: 10 / span 3;
        }
        .greeting-description {
            grid-column: 3 / span 8;
            margin-top: 80px;
        }
        .crisis h2 {
            grid-column: 1 / span 12;
        }
        .crisis-image {
            margin-top: -30px;
        }
        .benefit-2-image-mobile, .benefit-5-image-mobile {
            display: none;
        }
        .benefit-1-image, .benefit-2-image, .benefit-4-image, .benefit-5-image {
            display: block;
        }
        .benefit-1-description {
            grid-column: 6 / span 7;
        }
        .benefit-1-image, .benefit-4-image {
            grid-column: 1 / span 3;
        }
        .benefit-1-image {
            margin-top: 120px;
        }
        .benefit-2-image {
            margin-top: 170px;
        }
        .benefit-2-image, .benefit-5-image {
            grid-column: 9 / span 4;
        }
        .benefit-2-description, .benefit-5-description {
            grid-column: 1 / span 6;
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
        .wrapper {
            grid-column: 3 / span 8;
        }
    }

    @media screen and (max-width: 944px) {
        .greeting-red-text, .alert-red-text, .experience-description-virus-text {
            font-size: 16px;
            line-height: 24px;
        }
        .greeting {
            margin-top: 120px;
        }
        .greeting-red-box {
            grid-column: 9 / span 4;
            margin-top: 10px;
        }
        .greeting-image {
            grid-column: 3 / span 7;
            margin-top: 0;
        }
        .greeting-description {
            grid-column: 3 / span 8;
            margin-top: 40px;
        }
        .crisis h2 {
            margin-top: 70px;
            grid-column: 1 / span 12;
        }
        .crisis-image {
            margin-top: -50px;
            grid-column: 9 / span 4;
        }
        .crisis-lines {
            grid-column: 1 / span 1;
            margin-top: -100px;
        }
        .benefit-2-image-mobile, .benefit-5-image-mobile {
            display: none;
        }
        .benefit-1-image, .benefit-2-image, .benefit-4-image, .benefit-5-image {
            display: block;
        }
        .benefit-1-description, .benefit-1-image {
            margin-top: 40px;
        }
        .benefit-2-description, .benefit-4-description, .benefit-5-description, .benefit-2-image, .benefit-4-image, .benefit-5-image {
            margin-top: 80px;
        }
        .benefit-1-description p, .benefit-2-description p, .benefit-4-description p, .benefit-5-description p {
            margin-top: 15px;
        }
        .benefit-3-title {
            margin-top: 80px;
        }
        .contact {
            margin-top: 150px;
            margin-bottom: 100px;
        }
        .wrapper {
            grid-column: 3 / span 7;
        }
        .contact-image {
            grid-column: 7 / span 1;
            z-index: 0;
            margin-top: -70px;
            right: -150px;
            top: -40px;
        }
    }

    @media screen and (max-width: 720px) {
        .greeting-red-text, .alert-red-text, .experience-description-virus-text {
            font-size: 12px;
            line-height: 12px;
        }
        .greeting {
            margin-top: 80px;
        }
        .greeting h1 {
            grid-column: 1 / span 6;
        }
        .greeting-red-box {
            grid-column: 1 / span 2;
            margin-top: 15px;
        }
        .greeting-red-box {
            grid-column: 1 / span 2;
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
        .greeting-description {
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
        }
        .crisis-image {
            grid-column: 2 / span 4;
            display: none;
        }
        .benefit-1-image-mobile, .benefit-2-image-mobile, .benefit-4-image-mobile, .benefit-5-image-mobile {
            grid-column: 1 / span 3;
            display: block;
            margin-top: 60px;
            margin-bottom: 0;
        }
        .benefit-1-image, .benefit-2-image, .benefit-5-image, .benefit-4-image {
            display: none;
        }
        .benefit-1-image-mobile img, .benefit-2-image-mobile img, .benefit-4-image-mobile img, .benefit-5-image-mobile img {
            max-width: 100%;
            height: auto;
        }
        .benefit-1-description, .benefit-2-description, .benefit-4-description, .benefit-5-description {
            grid-column: 1 / span 6;
            margin-top: 10px;
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
        .contact p, .contact a {
            grid-column: 1 / span 6;
            text-align: left;
        }
        .contact-image {
            /* display: none; */
            grid-column: 5 / span 1;
            /* margin-top: -120px; */
            right: -20px;
            top: 30px;
        }
        .contact-image img {
            width: 100px;
        }
        .wrapper {
            grid-column: 1 / span 6;
            padding: 10px 15px 10px 15px;
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
