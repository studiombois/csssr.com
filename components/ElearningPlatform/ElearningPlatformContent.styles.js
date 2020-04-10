import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = css`
    & {
        margin-top: ${calcRem(-89)};
    }

    .no-wrap {
      white-space: nowrap;
    }
    
    .greeting {
        margin-top: 160px;
    }

    .greeting-text{
        grid-column: 2 / span 5;
    }

    .greeting-perforator {
        text-transform: uppercase;
    }

    .greeting h1 {
        margin-top: 20px;
    }

    .greeting-description {
        margin-top: 70px;
    }

    .greeting-image {
        grid-column: 7 / span 5;
    }

    .greeting-image img {
        max-width: 100%;
        height: auto;
    }
    
    .modules {
        margin-top: 150px;
    }

    .modules-heading {
        grid-column: 1 / span 12;
        text-align: center;
    }

    .module-image-left {
        grid-column: 2 / span 3;
        margin-top: 60px;
        display: block;
    }   

    .module-image-right {
        grid-column: 7 / span 4;
        margin-top: 120px;
    }

    .module-image img {
        max-width: 100%;
        height: auto;
    }

    .module-title {
        margin-top: 113px;
    }

    .module-title-right {
        grid-column: 5 / span 5;
    }

    .module-title-left {
        margin-top: 160px;
        grid-column: 3 / span 4;
    }

    .module-title p{
        margin-top: 20px;
    }

    .module-subdescription-right {
        grid-column: 5 / span 6;
    }

    .module-subdescription-left {
        grid-column: 4 / span 5;
    }

    .subdescription-first {
        margin-top: 0px;
    }

    .subdescription-next {
        margin-top: 20px;
    }

    .features {
        margin-top: 160px;
    }

    .features-heading {
        text-align: center;
        grid-column: 1 / span 12;
        margin-bottom: 70px;
    }

    .features-lines {
        grid-column: 1 / span 2;
    }

    .features-lines img {
        max-width: 100%;
        height: auto;
    }

    .features-line-management {
        margin-top: 20px;
    }

    .features-line-administration,
    .features-line-learning {
        margin-top: 80px;
    }

    .features-description {
        grid-column: 4 / span 3;
    }

    .features-description-second,
    .features-description-third {
        margin-top: 72px;
    }

    .features-list-second,
    .features-list-third {
        margin-top: 72px;
    }

    .features-list {
        /* margin-top: 24px; */
        grid-column: 8 / span 3;
    }

    .features-list li:not(:first-child) {
        margin-top: 16px;
    }

    .design {
        margin-top: 100px;
        padding-top: 70px;
        padding-bottom: 80px;
        background-color: #EEf0f6;
    }

    .design-content {

        grid-column: 2 / span 4;
    }


    .design-desription {
        margin-top: 40px;
    }

    .design-description-second {
        margin-top: 0px;
    }

    .design-buttons {
        margin-top: 44px;
    }

    .design-buttons-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .design-buttons-row:last-child {
        margin-top: 25px;
    }

    .design-button:nth-child(even) {
        margin-left: 25px;
        
    }

    .design-image {
        grid-column: 6 / span 7;
        margin-top: 40px;
    }

    .design-image img {
        max-width: 100%;
        height: auto;
    }

    .banner {
        margin-top: 80px;
        margin-bottom: 120px;
    }

    .banner-title {
        grid-column: 3 / span 4;
        text-align: center;
    }

    .banner-button {
        padding-bottom: 15px;
        padding-top: 16px;
        grid-column: 7 / span 4;
        text-align: center;
        text-decoration: none;
        border: 1px solid #4a4a4a;
    }

    .banner-button:hover {
        border: 1px solid #000;
        cursor: pointer;
    }

    .team-subheading {
        grid-column: 1 / span 12;
        text-align: center;
    }

    .team-title {
        margin-top: 14px;
        margin-bottom: 12px;
        grid-column: 1 / span 12;
        text-align: center;
    }

    .team-image img {
        /* height: 350px; */
        width: 100%;
    }

    .team-description {
        grid-column: 4 / span 6;
    }

    .team-specialists {
        margin-top: 80px;
        grid-column: 5 / span 1;
    }

    .team-projects {
        margin-top: 80px;
        grid-column: 8 / span 1;
    }

    .team-specialists img,
    .team-projects img {
        max-width: 100%;
        height: auto;
    }

    .advanced-features {
        margin-top: 80px;
        padding-top: 80px;
        padding-bottom: 80px;
        background-color: #EEf0f6;
    }

    .advanced-features-title {
        grid-column: 2 / span 4;
    }

    .advanced-feature-image {
        margin-top: 90px;
        grid-column: 2 / span 5;
        /* grid-row: 2; */
    }

    .advanced-feature-image img {
        max-width: 100%;
        height: auto;
    }

    .advanced-feature-description {
        margin-top: 125px;
        grid-column: 7 / span 5;
        /* grid-row: 2; */
    }

    .advanced-feature-description p {
        margin-top: 24px;
    }

    .advanced-feature-buttons {
        
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .advanced-feature-buttons > div {
        margin-top: 150px;
        transition: all 0.1s ease-out;
    }

    .advanced-feature-buttons > div:hover {
        margin-top: 130px;
    }

    @media screen and (max-width: 1492px) {
      
    }

    @media screen and (max-width: 1232px) {
       
    }

    @media screen and (max-width: 944px) {
       
    }

    @media screen and (max-width: 768px) {
        & {
           margin-top: ${calcRem(56)};
        }
    }

    @media screen and (max-width: 720px) {
       
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
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-2 {
        font-family: "Roboto Slab", serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 64px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-3 {
        font-family: "Roboto", sans-serif;
        font-weight: 800;
        font-size: 40px;
        line-height: 56px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-4 {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-heading-5 {
        font-family: "Roboto Slab", serif;
        font-weight: 300;
        font-size: 32px;
        line-height: 48px;
        color: #000000;
        letter-spacing: 0;
    }

    .font-p-1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 40px;
        color: #000000;
    }

    .font-p-2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .font-p-3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
        color: #000000;
    }

    .font-p-4 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    .font-p-5 {
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        letter-spacing: 1px;
    }




    @media screen and (max-width: 944px) {
        .font-heading-1 {
            font-size: 2rem;
            line-height: 3rem;
        }
        .font-heading-2 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
        .font-heading-3 {
            font-size: 2rem;
            line-height: 2.5rem;
        }
        .font-heading-4 {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
        .font-heading-5 {
            font-size: 1.125rem;
            line-height: 2rem;
        }
        .font-p-1 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-3 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-5 {
            font-size: 1rem;
            line-height: 1.5rem;
        }

    }

    @media screen and (max-width: 720px) {
        .font-heading-1 {
            font-size: 2rem;
            line-height: 3rem;
        }
        .font-heading-2 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
        .font-heading-3 {
            font-size: 2rem;
            line-height: 2.5rem;
        }
        .font-heading-4 {
            font-size: 1.125rem;
            line-height: 1.5rem;
        }
        .font-heading-5 {
            font-size: 1.125rem;
            line-height: 2rem;
        }
        .font-p-1 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-2 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-3 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
        .font-p-4 {
            font-size: 0.875rem;
            line-height: 1.5rem;
        }
        .font-p-5 {
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }
`

export default css`
  ${base}
  ${grid}
  ${fonts}
`
