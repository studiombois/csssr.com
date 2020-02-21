import { css } from '@emotion/core'

const base = css`
  & {
    position: relative;
    padding-top: 16rem;
    overflow-x: hidden;
  }

  blockquote {
    grid-column: 9 / span 3;
    grid-row: 1;
    margin-top: 3rem;
  }

  h1 {
    grid-column: 3 / span 6;
    grid-row: 1;
    margin-bottom: 3rem;
  }

  p {
    margin-bottom: 1rem;
  }

  span {
    padding-top: 1rem;
    display: block;
  }

  footer {
    font-weight: bold;
  }

  picture {
    grid-column: 1 / span 12;
    grid-row: 3;
    z-index: 0;
    margin-top: -9rem;
    margin-left: -4rem;
    width: 1920px;
  }

  img {
    display: block !important;
    height: auto;
  }

  :global(#main) {
    background-image: url('${require('../../../static/images/dev/1920/dev_line@1x.png')}');
    background-size: 1920px 640px;
    background-position: 50% 24rem;
    background-repeat: repeat-x;
  }

  :global(html.webp #main) {
    background-image: url('${require('../../../static/images/dev/1920/dev_line@1x.webp')}');
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1920/dev_line@2x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1920/dev_line@2x.webp')}');
    }
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1920/dev_line@3x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1920/dev_line@3x.webp')}');
    }
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      padding-top: 12rem;
    }

    picture {
      margin-left: -1rem;
      width: 1360px;
    }

    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@1x.png')}');
      background-size: 1360px 640px;
      background-position: 50% 20rem;
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@1x.webp')}');
    }
  }

  @media
  screen and (min-width: 1360px) and (max-width: 1919px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@2x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@2x.webp')}');
    }
  }

  @media
  screen and (min-width: 1360px) and (max-width: 1919px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@3x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1360/dev_line@3x.webp')}');
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      padding-top: 12rem;
    }

    picture {
      margin-top: -14rem;
      margin-left: -1.5rem;
      width: 1280px;
    }

    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@1x.png')}');
      background-size: 1280px 640px;
      background-position: 50% 20rem;
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@1x.webp')}');
    }
  }

  @media
  screen and (min-width: 1280px) and (max-width: 1359px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@2x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@2x.webp')}');
    }
  }

  @media
  screen and (min-width: 1280px) and (max-width: 1359px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@3x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1280/dev_line@3x.webp')}');
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      padding-top: 10rem;
    }

    h1 {
      grid-column: 3 / span 4;
      margin-bottom: 3.8125rem;
    }

    span {
      padding-top: 1.6875rem;
    }

    blockquote {
      margin-top: 1.3125rem;
    }

    picture {
      margin-top: -4.5rem;
      margin-left: -2.5rem;
      width: 1024px;
      height: 480px;
    }

    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@1x.png')}');
      background-size: 1024px 480px;
      background-position: 50% 22rem;
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@1x.webp')}');
    }
  }

  @media
  screen and (min-width: 768px) and (max-width: 1279px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@2x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@2x.webp')}');
    }
  }

  @media
  screen and (min-width: 768px) and (max-width: 1279px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@3x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/1024/dev_line@3x.webp')}');
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    picture {
      width: 64rem;
      height: 30rem;
    }

    :global(#main) {
      background-size: 80rem 30rem;
    }
  }

  @media (max-width: 767px) {
    & {
      padding-top: 5rem;
      height: auto;
    }

    h1 {
      grid-column: 1 / span 6;
      grid-row: 1;
      margin-bottom: 1.375rem;
      text-align: center;
    }

    span {
      padding-top: 0.6875rem;
    }

    blockquote {
      grid-column: 2 / span 5;
      grid-row: 3;
      margin-top: 1.9375rem;
    }

    p {
      margin-bottom: 0.5rem;
    }

    picture {
      grid-column: 1 / span 6;
      grid-row: 2;
      margin-top: 0;
      margin-left: -1rem;
      width: 22.5rem;
    }

    :global(#main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@1x.png')}');
      background-size: 22.5rem 10.5rem;
      background-position: 50% 18rem;
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@1x.webp')}');
    }
  }

  @media
  screen and (max-width: 767px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@2x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@2x.webp')}');
    }
  }

  @media
  screen and (max-width: 767px),
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    :global(#main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@3x.png')}');
    }

    :global(html.webp #main) {
      background-image: url('${require('../../../static/images/dev/360/dev_line@3x.webp')}');
    }
  }
`

const ie11Styles = css`
  blockquote {
    -ms-grid-column: 17;
    -ms-grid-column-span: 5;
    -ms-grid-row: 1;
  }

  h1 {
    -ms-grid-column: 5;
    -ms-grid-column-span: 11;
    -ms-grid-row: 1;
  }

  picture {
    display: block !important;
    -ms-grid-column: 1;
    -ms-grid-column-span: 23;
    -ms-grid-row: 3;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h1 {
      -ms-grid-column: 5;
      -ms-grid-column-span: 7;
    }
  }

  @media (max-width: 767px) {
    picture {
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
      -ms-grid-row: 2;
    }
  }
`

export default ({ isIe11 }) => css`
  ${base}
  ${isIe11 && ie11Styles}
`
