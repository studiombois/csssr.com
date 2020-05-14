import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`

  & {
    padding-top: ${calcRem(256)};
    padding-bottom: ${calcRem(160)};
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(160)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

const coreValues = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  & {
    padding-top: ${calcRem(256)};
    padding-bottom: ${calcRem(160)};
  }

  ${desktop.l} {
    & {
      padding-top: ${calcRem(313)};
    }
  }

  ${desktop.m} {
    & {
      padding-top: ${calcRem(313)};
    }
  }

  ${desktop.s} {
    & {
      padding-top: ${calcRem(289)};
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(249)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(153)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

const mvp = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  ${desktop.l} {
    & {
      padding-top: 263px
    }
  }

  ${desktop.m} {
    & {
      padding-top: 186px;
    }
  }

  ${desktop.s} {
    & {
      padding-top: 226px;
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(298)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(164)};
    }
  }
`

const outsourcingFrontEnd = ({ breakpoints: { tablet }}) => css`
  ${tablet.all} {
    & {
      padding-top: ${calcRem(160)};
    }
  }
`

const project = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  ${desktop.all} {
    & {
      padding-top: 256px
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(256)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(160)};
    }
  }
`

const eLearningPlatform = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  & {
    padding-top: ${calcRem(200)};
    padding-bottom: ${calcRem(160)};
  }

  ${desktop.l} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.m} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.s} {
    & {
      padding-top: ${calcRem(200)};
    }
  }

  ${tablet.all} {
    & {
      padding-top: ${calcRem(120)};
    }
  }

  ${mobile.all} {
    & {
      padding-top: ${calcRem(80)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

const styles = {
  base,
  coreValues,
  mvp,
  outsourcingFrontEnd,
  project,
  eLearningPlatform,
}

export default props => {
  const breakpoints = props.theme.breakpoints

  const style = styles[props.pageName] || styles.base

  return css`
    ${style({ breakpoints })}
  `
}
