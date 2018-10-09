import React, { Fragment } from 'react'

export default ({ title, text, images, style }) =>
  <Fragment>
    <section className='grid-container' style={style}>
      <h2 className='font_subhead-slab' dangerouslySetInnerHTML={{ __html: title }} />
      <p className='font_p16-regular'>
        {text}
      </p>

      <picture>
        <source media='(max-width: 1359px)'
                type='image/webp'
                srcset='../../static/images/1280/time@1x.webp,
                    ../../static/images/1280/time@2x.webp 2x,
                    ../../static/images/1280/time@3x.webp 3x'/>
        <source media='(max-width: 1359px)'
                srcset='../../static/images/1280/time@1x.png,
                    ../../static/images/1280/time@2x.png 2x,
                    ../../static/images/1280/time@3x.png 3x'/>
        <source media='(max-width: 1919px)'
                type='image/webp'
                srcset='../../static/images/1360/time@1x.webp,
                    ../../static/images/1360/time@2x.webp 2x,
                    ../../static/images/1920/time@3x.webp 3x'/>
        <source media='(max-width: 1919px)'
                srcset='../../static/images/1360/time@1x.png,
                    ../../static/images/1360/time@2x.png 2x,
                    ../../static/images/1360/time@3x.png 3x'/>
        <source type='image/webp'
                srcset='../../static/images/1920/time@1x.webp,
                    ../../static/images/1920/time@2x.webp 2x,
                    ../../static/images/1920/time@3x.webp 3x'/>
        <img srcset='../../static/images/1920/time@1x.png,
                 ../../static/images/1920/time@2x.png 2x,
                 ../../static/images/1920/time@3x.png 3x'
             src='../../static/images/1920/time@1x.png'
             alt={images.alt} />
      </picture>
    </section><style jsx>{`
      section {
        margin-left: auto;
        margin-right: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 9.5rem;
        width: 1888px;
      }

      h2 {
        grid-column: 3 / span 2;
        grid-row: 1;
      }

      picture {
        grid-column: 3 / span 8;
        grid-row: 1;
        z-index: -1;
        margin-top: 2rem;
        height: 568px;
      }

      img {
        height: 100%;
      }

      p {
        grid-column: 5 / span 6;
        grid-row: 2;
        margin-top: 3rem;
      }

      @media (min-width: 1360px) and (max-width: 1919px) {
        section {
          width: 1344px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }

      @media (max-width: 1359px) {
        section {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          width: 1248px;
        }

        h2 {
          grid-column: 3 / span 3;
        }
      }
    `}</style>
  </Fragment>
