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
    margin-top: ${calcRem(329 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(3) {
    margin-top: ${calcRem(329 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(4) {
    margin-top: ${calcRem(358 - articlePaddingForHashLinks)};
  }

  article:nth-of-type(5) {
    margin-top: ${calcRem(377 - articlePaddingForHashLinks)};
  }

  ${desktop.l} {
    article:nth-of-type(4) {
      margin-top: ${calcRem(376 - articlePaddingForHashLinks)};
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(151)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(313 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(335 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(312 - articlePaddingForHashLinks)};
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
      margin-top: ${calcRem(269 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(361 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(264 - articlePaddingForHashLinks)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(122)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(225 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(196 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(225 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(225 - articlePaddingForHashLinks)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(81)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(196 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(195 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(193 - articlePaddingForHashLinks)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(194 - articlePaddingForHashLinks)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
