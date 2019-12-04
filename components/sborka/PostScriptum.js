import React, { Fragment } from 'react'
import translate from '../../utils/translate-wrapper'

const PostScriptum = ({ t }) =>
  <Fragment>
    <article className='grid-container'>
      <h2
        className='font_h2-slab'
        dangerouslySetInnerHTML={{ __html: t('sborka:postScriptum.title') }} />

      <p
        className='font_subhead-regular'
        dangerouslySetInnerHTML={{ __html: t('sborka:postScriptum.text') }}
      />

      <span
        className='font_subhead-slab'
        dangerouslySetInnerHTML={{ __html: t('sborka:postScriptum.tagline') }}
      />

    </article>
    <div />
    <style jsx>{`
      article {
        margin-top: 9rem;
        margin-right: auto;
        margin-left: auto;
        width: 1792px;
      }

      h2,
      p,
      span {
        text-align: center;
      }

      h2 {
        grid-column: 3 / span 8;
      }

      p {
        margin-top: 0.875rem;
        grid-column: 2 / span 10;
      }

      span {
        margin-top: 4.8175rem;
        grid-column: 4 / span 6;
      }

      div {
        margin-top: 4.5rem;
        margin-bottom: 3.0625rem;
        height: 368px;
        background-image: url('${require('../../static/images/sborka/1920/orbits@1x.png')}');
        background-size: 1920px 368px;
        background-position: 50%;
        background-repeat: repeat-x;
      }

      :global(html.webp) div {
        background-image: url('${require('../../static/images/sborka/1920/orbits@1x.webp')}');
      }

      @media
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1920/orbits@2x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1920/orbits@2x.webp')}');
        }
      }

      @media
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 3dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1920/orbits@3x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1920/orbits@3x.webp')}');
        }
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        article {
          width: 1328px;
        }

        div {
          margin-top: 6.5rem;
          margin-bottom: 6.625rem;
          height: 280px;
          background-image: url('${require('../../static/images/sborka/1360/orbits@1x.png')}');
          background-size: 1360px 280px;
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1360/orbits@1x.webp')}');
        }
      }

      @media
      screen and (min-width: 1360px) and (max-width: 1919px),
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1360/orbits@2x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1360/orbits@2x.webp')}');
        }
      }

      @media
      screen and (min-width: 1360px) and (max-width: 1919px),
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 3dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1360/orbits@3x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1360/orbits@3x.webp')}');
        }
      }

      @media (min-width: 1280px) and (max-width: 1359px) {
        article {
          width: 1232px;
        }

        div {
          margin-top: 6rem;
          margin-bottom: 6.625rem;
          height: 288px;
          background-image: url('${require('../../static/images/sborka/1280/orbits@1x.png')}');
          background-size: 1280px 288px;
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1280/orbits@1x.webp')}');
        }
      }

      @media
      screen and (min-width: 1280px) and (max-width: 1359px),
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1280/orbits@2x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1280/orbits@2x.webp')}');
        }
      }

      @media
      screen and (min-width: 1280px) and (max-width: 1359px),
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 3dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1280/orbits@3x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1280/orbits@3x.webp')}');
        }
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        article {
          margin-top: 6.5rem;
          width: 944px;
        }

        p {
          margin-top: 2.125rem;
        }

        span {
          margin-top: 2.625rem;
        }

        div {
          margin-top: 8.8125rem;
          margin-bottom: 9.5rem;
          height: 12.5rem;
          background-image: url('${require('../../static/images/sborka/1024/orbits@1x.png')}');
          background-size: 59rem 12.5rem;
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1024/orbits@1x.webp')}');
        }
      }

      @media
      screen and (min-width: 768px) and (max-width: 1279px),
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1024/orbits@2x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1024/orbits@2x.webp')}');
        }
      }

      @media
      screen and (min-width: 768px) and (max-width: 1279px),
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 3dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/1024/orbits@3x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/1024/orbits@3x.webp')}');
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        article {
          width: 59rem;
        }
      }

      @media (max-width: 767px) {
        article, h2, p, span, div {
          grid-column: 1 / span 6;
        }

        article {
          margin-top: 3.365rem;
          width: 20.5rem;
        }

        p {
          margin-top: 0.625rem;
        }

        span {
          margin-top: 0.125rem;
        }

        div {
          margin-top: 3.625rem;
          margin-bottom: 3.4375rem;
          height: 6rem;
          background-image: url('${require('../../static/images/sborka/360/orbits@1x.png')}');
          background-size: 20.5rem 6rem;
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/360/orbits@1x.webp')}');
        }
      }

      @media
      screen and (max-width: 767px),
      only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/360/orbits@2x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/360/orbits@2x.webp')}');
        }
      }

      @media
      screen and (max-width: 767px),
      only screen and (-webkit-min-device-pixel-ratio: 3),
      only screen and (min-resolution: 288dpi),
      only screen and (min-resolution: 3dppx) {
        div {
          background-image: url('${require('../../static/images/sborka/360/orbits@3x.png')}');
        }

        :global(html.webp) div {
          background-image: url('${require('../../static/images/sborka/360/orbits@3x.webp')}');
        }
      }
    `}</style>
    <style jsx>{`
      :global(.ie11) h2 {
        -ms-grid-column: 5;
        -ms-grid-column-span: 15;
        -ms-grid-row: 1;
      }

      :global(.ie11) p {
        -ms-grid-column: 3;
        -ms-grid-column-span: 19;
        -ms-grid-row: 2;
      }

      :global(.ie11) span {
        display: block;
        -ms-grid-column: 7;
        -ms-grid-column-span: 11;
        -ms-grid-row: 3;
      }

      @media (max-width: 767px) {
        :global(.ie11) article, h2, p, span, div {
          -ms-grid-column: 1;
          -ms-grid-column-span: 11;
        }
      }
    `}</style>
  </Fragment>

export default translate()(PostScriptum)
