import { css } from '@emotion/core'

const base = ({ media }) => css`
  & {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2.265rem;
    background-color: #171717;
    color: #ffffff;
    transition: transform 200ms ease-out;
  }

  &.hide {
    transform: translateY(100%);
  }

  .wrap {
    max-width: 43.25rem;
  }

  .close {
    padding: 0;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 1rem;
    height: 1rem;
    color: #ffffff;
    cursor: pointer;
  }

  .cookies-text {
    color: #ffffff;
  }

  .cookies-link {
    text-decoration: underline;
    cursor: pointer;
  }

  ${media.from('1024px')} {
    & {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }

    .close {
      top: 1.25rem;
      right: 2rem;
      width: 1.5rem;
      height: 1.5rem;
    }

    .wrap {
      max-width: 46rem;
    }
  }
`

export default props => {
  const media = props.theme.media

  return css`
    ${base({media})}
  `
}
