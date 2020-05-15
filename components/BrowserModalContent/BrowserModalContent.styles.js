import { css } from '@emotion/core'

const base = ({ breakpoints: { desktop, tablet, mobile }})=> css`
  & {
    margin-left: 7rem;
    margin-right: 9rem;
    margin-top: 1.5rem;
  }

  .title {
    margin-bottom: 0.5rem;
  }

  .text1 {
    margin-bottom: 1rem;
  }

  .text2 {
    margin-bottom: 2rem;
  }

  .browsers-box {
    vertical-align: middle;
    margin-bottom: 2.7rem;
  }

  .browser {
    display: inline-block;
    width: 5rem;
    margin-right: 3rem;
  }

  .browser img {
    display: block;
    width: 100%;
  }

  .browser:last-child {
    margin-right: 0;
  }

  ${mobile.all} {
    & {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    .browser {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1.5rem;
    }

    .browser:last-child {
      margin-right: 0;
    }

    .title {
      margin-bottom: 1rem;
    }

    .text1 {
      margin-bottom: 0.5rem;
    }

    .text2 {
      margin-bottom: 1rem;
    }

    .browsers-box {
      margin-bottom: 1.25rem;
      margin-right: -1rem;
    }
  }

  ${tablet.m} {
    & {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }

  ${desktop.s} {
    & {
      margin-left: 6.5rem;
      margin-right: 6.5rem;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
