import css from 'styled-jsx/css'

export const listItemStyles = css`
  li:not(:first-child) {
    margin-top: 1rem;
  }

  @media (max-width: 1279px) {
    li:not(:first-child) {
      margin-top: 0.3125rem;
    }

    li:before {
      top: 0.25rem !important;
    }
  }
`

export const modalContentStyles = css`
  h3 {
    margin-top: 2.8125rem;
  }

  ul {
    margin-top: 1rem;
  }

  .wrapper {
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .title {
    width: 100%;
    text-align: center;
    height: 7.9375rem;
    background-color: #d8d8d8;
    line-height: 8.875rem;
    vertical-align: middle;
  }

  .columnsWrapper {
    width: 100%;
    height: 100%;
    padding-bottom: 2.5rem;
  }

  .columnStudy, .columnNeedKnow {
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding-left: 6.5rem;
  }

  .columnNeedKnow {
    padding-left: 0.5rem;
    padding-right: 5rem;
  }

  .buttonWrapper {
    margin-top: auto;
    text-align: center;
  }

  .button_register {
    display: inline-block;
    width: 19.5rem;
  }

  @media (max-width: 1279px) {
    h3 {
      margin-top: 2.9375rem;
      margin-bottom: 1rem;
    }

    ul {
      margin-top: 1.5rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .columnStudy {
      padding-left: 5rem;
    }
  }

  @media (max-width: 767px) {
    .wrapper {
      padding-bottom: 4rem;
    }

    .title {
      height: 7.5rem;
      line-height: 8rem;
    }

    .columnsWrapper {
      width: 100%;
      height: 100%;
      padding-bottom: 0;
    }

    .columnStudy, .columnNeedKnow {
      display: block;
      width: 100%;
      vertical-align: top;
      padding: 0 1rem;
    }

    .columnNeedKnow h3 {
      margin-top: 2.5rem;
    }

    .buttonWrapper {
      margin-top: 3.5rem;
    }
  }
`

export const titleBackgroundStyles = css`
  h2 {
    background-image: url(/static/images/school/1280/juniorModalCover@1x.png);
    background-size: 1024px 128px;
    background-position: 50% 0;
    background-repeat: repeat-x;
  }

  :global(html.webp) h2 {
    background-image: url(/static/images/school/1280/juniorModalCover@1x.webp);
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    h2 {
      background-image: url(/static/images/school/1280/juniorModalCover@2x.png);
    }

    :global(html.webp) h2 {
      background-image: url(/static/images/school/1280/juniorModalCover@2x.webp);
    }
  }

  @media
  only screen and (-webkit-min-device-pixel-ratio: 3),
  only screen and (min-resolution: 288dpi),
  only screen and (min-resolution: 3dppx) {
    h2 {
      background-image: url(/static/images/school/1280/juniorModalCover@3x.png);
    }

    :global(html.webp) h2 {
      background-image: url(/static/images/school/1280/juniorModalCover@3x.webp);
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h2 {
      background-image: url(/static/images/school/1024/juniorModalCover@1x.png);
      background-size: 49rem 8rem;
    }

    :global(html.webp) h2 {
      background-image: url(/static/images/school/1024/juniorModalCover@1x.webp);
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
      h2 {
        background-image: url(/static/images/school/1024/juniorModalCover@2x.png);
      }

      :global(html.webp) h2 {
        background-image: url(/static/images/school/1024/juniorModalCover@2x.webp);
      }
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 3),
    only screen and (min-resolution: 288dpi),
    only screen and (min-resolution: 3dppx) {
      h2 {
        background-image: url(/static/images/school/1024/juniorModalCover@3x.png);
      }

      :global(html.webp) h2 {
        background-image: url(/static/images/school/1024/juniorModalCover@3x.webp);
      }
    }
  }

  @media (max-width: 767px) {
    h2 {
      background-image: url(/static/images/school/360/juniorModalCover@1x.png);
      background-size: 22.5rem 7.5rem;
    }

    :global(html.webp) h2 {
      background-image: url(/static/images/school/360/juniorModalCover@1x.webp);
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
      h2 {
        background-image: url(/static/images/school/360/juniorModalCover@2x.png);
      }

      :global(html.webp) h2 {
        background-image: url(/static/images/school/360/juniorModalCover@2x.webp);
      }
    }

    @media
    only screen and (-webkit-min-device-pixel-ratio: 3),
    only screen and (min-resolution: 288dpi),
    only screen and (min-resolution: 3dppx) {
      h2 {
        background-image: url(/static/images/school/360/juniorModalCover@3x.png);
      }

      :global(html.webp) h2 {
        background-image: url(/static/images/school/360/juniorModalCover@3x.webp);
      }
    }
  }
`

export const modalStyles = css`
  .modalWrapper {
    position: fixed;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.3);
    z-index: 10000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .modalContent {
    position: relative;
    background: #FFF;
    margin: 0 auto;
    width: 1024px;
    height: 100%;
    overflow: auto;
  }

  button {
    position: absolute;
    color: white;
    z-index: 1;
    top: 1.25rem;
    right: 3rem;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 1279px) {
    .modalContent {
      width: 49rem;
    }

    button {
      top: 2.5rem;
      right: 3.25rem;
    }
  }

  @media (max-width: 767px) {
    .modalContent {
      width: 22.5rem;s
    }

    button {
      top: 1rem;
      right: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      color: #4a4a4a;
    }
  }
`
