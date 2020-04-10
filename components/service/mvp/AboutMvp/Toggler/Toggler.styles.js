import { css } from '@emotion/core'

const base = ({ activeIndex }) => css`
  & {
    position: relative;
    display: inline-flex;
    height: 3rem;
    background-color: #cecece;
  }

  &::after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    display: block;
    width: 50%;
    height: 100%;
    content: '';
    background: #0076ff;
    transition: transform 0.3s ease-out;
    transform: translateX(${100 * activeIndex}%);
  }

  button {
    position: relative;
    z-index: 2;
    padding: 0;
    display: block;
    width: 50%;
    border: none;
    font-size: 0.875rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 900;
    letter-spacing: 0.0625rem;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    background: none;
  }
`

export default props => css`
  ${base(props)}
`
