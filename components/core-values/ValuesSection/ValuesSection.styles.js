import { css } from '@emotion/core'
import calcRem from '../../../utils/style/calcRem'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    margin-top: ${calcRem(114)};
  }

  article:nth-of-type(2) {
    margin-top: ${calcRem(329)};
  }

  article:nth-of-type(3) {
    margin-top: ${calcRem(329)};
  }

  article:nth-of-type(4) {
    margin-top: ${calcRem(358)};
  }

  article:nth-of-type(5) {
    margin-top: ${calcRem(377)};
    margin-bottom: ${calcRem(286)};
  }

  ${desktop.l} {
    article:nth-of-type(5) {
      margin-bottom: ${calcRem(422)};
    }
  }

  ${desktop.m} {
    & {
      margin-top: ${calcRem(151)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(313)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(313)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(335)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(312)};
      margin-bottom: ${calcRem(422)};
    }
  }

  ${desktop.s} {
    & {
      margin-top: ${calcRem(181)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(289)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(269)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(361)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(289)};
      margin-bottom: ${calcRem(366)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(161)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(225)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(196)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(225)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(225)};
      margin-bottom: ${calcRem(320)};
    }
  }

  ${mobile.all} {
    & {
      margin-top: ${calcRem(72)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(196)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(195)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(193)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(194)};
      margin-bottom: ${calcRem(119)};
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
