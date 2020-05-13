import { css } from '@emotion/core'

const base = css`
  & {
    margin-bottom: 0.5rem;
    width: 312px;
    height: 0;
    padding: 0;
    background-color: #fff;
    transition: height 0.3s ease-out, border 0.3s ease-out;
    overflow: hidden;
  }

  &.is_entering {
    height: 0
  }

  &.is_entered {
    padding-top: 0.9375rem;
    padding-bottom: 0.5rem;
    height: 11.5rem;
    border: 1px solid black;
  }

  &.is_appleDevice.is_entered {
    height: 17rem;
  }

  &.is_appleDevice li {
    margin: 0;
    border-top: 0.0625rem solid #cccccc;
    text-align: center;
    background-color: white;
  }

  &.is_appleDevice li:first-of-type {
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: none;
    border-radius: 0.375rem 0.375rem 0 0;
  }

  &.is_appleDevice li:last-child {
    margin-top: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-top: none;
    border-radius: 0.375rem;
  }

  &.is_appleDevice li:last-child button {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
    text-align: center;
    text-transform: uppercase;
    color: #4a4a4a;
  }

  &.is_appleDevice li:nth-child(4) {
    border-radius: 0 0 0.375rem 0.375rem;
  }

  &.is_appleDevice {
    margin-left: auto;
    margin-right: auto;
    width: 20.5rem;
    background-color: transparent;
  }

  li:first-of-type,
  li:last-child {
    padding: 0.5rem 1rem;
  }

  li:first-of-type {
    padding-top: 0;
    padding-bottom: 0.5rem;
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5rem;
    letter-spacing: normal;
    color: #4a4a4a;
  }

  li:last-child {
    display: none;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    & {
      width: 248px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1359px) {
    & {
      width: 14.5rem;
    }

    &.is_entered {
      height: 13rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    & {
      width: 14.5rem;
    }

    &.is_entered {
      height: 13rem;
    }
  }

  @media (max-width: 767px) {
    & {
      margin-bottom: 0;
      width: 100%;
      background-color: white;
    }

    &.is_entered {
      margin-top: auto;
      padding-top: 0;
      padding-bottom: 0.5rem;
      height: 20.5rem;
      border: none;
    }

    li:first-of-type {
      padding-top: 1.5rem;
      padding-bottom: 0;
      cursor: default;
    }

    li:last-child button {
      padding-top: 1.5rem;
      padding-bottom: 1rem;
      display: block;
      width: 100%;
      height: auto;
      font-family: 'Roboto', 'Arial', sans-serif;
      font-size: 1rem;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5rem;
      letter-spacing: normal;
      color: #a7a7a8;
      text-align: left;
      border: none;
      background-color: white;
      -webkit-tap-highlight-color: transparent;
    }

    li:last-child {
      margin: 0;
      display: block;
      background-color: white;
    }
  }
`

const dynamic = ({lng}) => css`
  @media (min-width: 1360px) and (max-width: 1919px) {
    &.is_entered {
      height: ${lng === 'ru' ? 13 : 11.5}rem;
    }
  }
`

export default props => css`
  ${base}
  ${dynamic(props)}
`
