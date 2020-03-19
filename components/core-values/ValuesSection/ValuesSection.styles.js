import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

// Часть отсупа между блоками переносим в padding,
// чтобы при переходах на хэш якоря был приятный отступ сверху
// и контент не перекрывался выплывающим хедером.
const articlePaddingForHashLinks = 64

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(114)};
  }
  
  article:not(:first-of-type) {
    padding-top: ${calcRem(articlePaddingForHashLinks)};
  }

  article:nth-of-type(2) {
    margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(3) {
    margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(4) {
    margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(5) {
    margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(150)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(181)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(289 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(289 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(289 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(289 - articlePaddingForHashLinks)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(161)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(249 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(249 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(249 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(249 - articlePaddingForHashLinks)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(123)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(217 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(217 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(217 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(217 - articlePaddingForHashLinks)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
