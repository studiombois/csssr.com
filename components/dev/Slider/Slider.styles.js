import { css } from '@emotion/core'

const base = css`
  .slider {
    margin-top: 1.5rem;
    position: relative;
    display: flex;
    font-size: 0;
  }

  .slider::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    transition: background-color 200ms ease;
    pointer-events: all;
  }

  .slider:hover::after,
  :global(.outline) .slider::after {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .slider:hover button,
  .slider:hover a,
  a:focus,
  button:focus {
    pointer-events: auto;
    color: #fff;
  }

  .slider:hover button:hover,
  .slider:hover a:hover {
    color: #345eff;
  }

  .image-container {
    position: relative;
    display: flex;
    height: 25.5rem;
    overflow: hidden;
  }

  .controls {
    position: absolute;
    z-index: 1;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    top: 50%;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2.125rem;
    transform: translateY(-50%);
  }

  img {
    display: block;
    width: 100%;
    flex-shrink: 0;
    transition: transform 200ms linear;
  }

  button {
    width: 1.375rem;
    height: 2.125rem;
    border: none;
    text-align: left;
    color: transparent;
    background: none;
    cursor: pointer;
    pointer-events: none;
  }

  button:last-child {
    transform: rotate(180deg);
  }

  button.is_invisible {
    opacity: 0;
    pointer-events: none;
    cursor: default;
  }

  a {
    position: absolute;
    z-index: 1;
    bottom: 1.125rem;
    right: 1.125rem;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    color: transparent;
    cursor: pointer;
    pointer-events: none;
  }

  button,
  a {
    transition: color 200ms linear;
  }

  h4 {
    margin-top: 1.8125rem;
  }

  p {
    margin-top: 0.125rem;
  }

  h4,
  p {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .image-container {
      height: 19rem;
    }

    h4 {
      margin-top: 1.75rem;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    .image-container {
      height: 17.5rem;
    }

    h4 {
      margin-top: 1.6875rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    h4 {
      margin-top: 1.0625rem;
    }

    p {
      margin-top: 0.6875rem;
    }

    h4,
    p {
      text-align: center;
    }

    .slider,
    img {
      height: 22rem;
    }

    .image-container {
      overflow-x: scroll;
    }

    .slider {
      overflow: hidden;
    }

    .controls {
      display: none;
    }

    .slider::after {
      background-color: rgba(0, 0, 0, 0.15);
      pointer-events: none;
    }

    a {
      color: #fff;
      pointer-events: auto;
    }
  }
`

export default css`
  ${base}
`
