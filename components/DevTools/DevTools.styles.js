import { css } from '@emotion/core'

const base = css`
  & {
    display: none;
    position: absolute;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  & {
    width: 1792px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.layout-columns-on:after {
    top: 0;
    right: 0;
  }

  &.grid-on {
    display: block;
    background-size: 8px 8px;
    background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
      linear-gradient(to bottom, lightgrey 1px, transparent 1px);
    opacity: 0.5;
  }

  &.layout-columns-on {
    display: block;
    background-size: 152px;
    background-image: linear-gradient(
      90deg,
      #f6d3c3 120px,
      transparent 120px,
      transparent 32px
    );
    opacity: 0.5;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      width: 1328px;
    }

    &.layout-columns-on {
      background-size: 112px;
      background-image: linear-gradient(
        90deg,
        #f6d3c3 96px,
        transparent 96px,
        transparent 16px
      );
      opacity: 0.5;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      width: 1232px;
    }

   &.layout-columns-on {
      background-size: 104px;
      background-image: linear-gradient(
        90deg,
        #f6d3c3 88px,
        transparent 88px,
        transparent 16px
      );
    }
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    &{
      width: 944px;
    }

    &.layout-columns-on {
      background-size: 80px;
      background-image: linear-gradient(
        90deg,
        #f6d3c3 64px,
        transparent 64px,
        transparent 16px
      );
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    & {
      width: 59rem;
    }

    &.layout-columns-on {
      background-size: 5rem;
      background-image: linear-gradient(
        90deg,
        #f6d3c3 4rem,
        transparent 4rem,
        transparent 1rem
      );
    }
  }

  @media (max-width: 1023px) {
    &.grid-on {
      background-size: 0.5rem 0.5rem;
      background-image: linear-gradient(to right, lightgrey 0.0625rem, transparent 0.0625rem),
        linear-gradient(to bottom, lightgrey 0.0625rem, transparent 0.0625rem);
    }
  }

  @media (max-width: 767px) {
    &{
      width: 20.5rem;
    }

    &.layout-columns-on {
      background-size: 3.5rem;
      background-image: linear-gradient(
        90deg,
        #f6d3c3 3rem,
        transparent 3rem,
        transparent 0.5rem
      );
    }
  }
`

export default css`
  ${base}
`
