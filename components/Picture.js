import React from 'react'

const altTextByImageKey = {
  geometry: 'geometric figures showing the range of our services: a triangle with the text "MVP", a circle with the text "Support the development of high load web applications" and a square with the text "Stack migration"',
  time: 'a man on a bike with a jet pack, showing how quickly we do our job with the text "We care about time to market metrics"',
  perfect: 'a man who neatly and meticulously cuts geometric bonsai, showing our desire to do everything perfectly with the text "We born with a gene of perfectionism"',
}

export default ({ className, imagesKey }) => <picture className={className}>
  <source media='(max-width: 1359px)'
    type='image/webp'
    srcSet={`../static/images/1280/${imagesKey}@1x.webp,
                  ../static/images/1280/${imagesKey}@2x.webp 2x,
                  ../static/images/1280/${imagesKey}@3x.webp 3x`}/>
  <source media='(max-width: 1359px)'
    srcSet={`../static/images/1280/${imagesKey}@1x.png,
                  ../static/images/1280/${imagesKey}@2x.png 2x,
                  ../static/images/1280/${imagesKey}@3x.png 3x`}/>
  <source media='(max-width: 1919px)'
    type='image/webp'
    srcSet={`../static/images/1360/${imagesKey}@1x.webp,
                  ../static/images/1360/${imagesKey}@2x.webp 2x,
                  ../static/images/1920/${imagesKey}@3x.webp 3x`}/>
  <source media='(max-width: 1919px)'
    srcSet={`../static/images/1360/${imagesKey}@1x.png,
                  ../static/images/1360/${imagesKey}@2x.png 2x,
                  ../static/images/1360/${imagesKey}@3x.png 3x`}/>
  <source type='image/webp'
    srcSet={`../static/images/1920/${imagesKey}@1x.webp,
                  ../static/images/1920/${imagesKey}@2x.webp 2x,
                  ../static/images/1920/${imagesKey}@3x.webp 3x`}/>
  <img srcSet={`../static/images/1920/${imagesKey}@1x.png,
               ../static/images/1920/${imagesKey}@2x.png 2x,
               ../static/images/1920/${imagesKey}@3x.png 3x`}
  src={`../static/images/1920/${imagesKey}@1x.png`}
  alt={altTextByImageKey[imagesKey]}/>
</picture>
