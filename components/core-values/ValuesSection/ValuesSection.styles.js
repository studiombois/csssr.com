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
      margin-top: ${calcRem(335)};
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
      margin-top: ${calcRem(289)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(264)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(361)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(313)};
      margin-bottom: ${calcRem(366)};
    }
  }

  ${tablet.all} {
    & {
      margin-top: ${calcRem(122)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(225)};
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
      margin-top: ${calcRem(72)};
    }

    article:nth-of-type(2) {
      margin-top: ${calcRem(198)};
    }

    article:nth-of-type(3) {
      margin-top: ${calcRem(186)};
    }

    article:nth-of-type(4) {
      margin-top: ${calcRem(186)};
    }

    article:nth-of-type(5) {
      margin-top: ${calcRem(186)};
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
