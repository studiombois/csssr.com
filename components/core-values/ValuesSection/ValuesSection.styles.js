import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(106)};
  }

  article:nth-of-type(2) {
    margin-top: ${calcRem(329)};
  }

  article:nth-of-type(3) {
    margin-top: ${calcRem(340)};
  }

  article:nth-of-type(4) {
    margin-top: ${calcRem(377)};
  }

  article:nth-of-type(5) {
    margin-top: ${calcRem(415)};
    margin-bottom: ${calcRem(286)};
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(151)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(313)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(327)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(404)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(346)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(181)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(265)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(269)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(313)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(313)};
      margin-bottom: ${calcRem(286)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(122)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(230)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(192)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(225)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(225)};
      margin-bottom: ${calcRem(221)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(80)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(193)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(193)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(193)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(193)};
      margin-bottom: ${calcRem(71)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
