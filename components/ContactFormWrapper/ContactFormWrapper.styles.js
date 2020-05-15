import { css } from '@emotion/core'
import calcRem from '../../utils/style/calcRem'

const base = ({ breakpoints: { mobile }}) => css`

  & {
    background-color: #ffffff;
  }

  .form {
    padding-top: ${calcRem(256)};
    padding-bottom: ${calcRem(160)};
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(160)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

const coreValues = ({ breakpoints: { desktop, tablet, mobile }}) => css`

  & {
      background-color: #ffffff;
  }

  .form {
    padding-top: ${calcRem(256)};
    padding-bottom: ${calcRem(160)};
  }

  ${desktop.l} {
    .form {
      padding-top: ${calcRem(313)};
    }
  }

  ${desktop.m} {
    .form {
      padding-top: ${calcRem(313)};
    }
  }

  ${desktop.s} {
    .form {
      padding-top: ${calcRem(289)};
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(249)};
    }
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(153)};
    }

    .button {
      grid-column: 1 / span 6;
    }
  }
`

const mvp = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  & {
    background-color: #ffffff;
  }

  ${desktop.l} {
    .form {
      padding-top: 263px
    }
  }

  ${desktop.m} {
    .form {
      padding-top: 186px;
    }
  }

  ${desktop.s} {
    .form {
      padding-top: 226px;
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(298)};
    }
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(164)};
    }
  }
`

const outsourcingFrontEnd = ({ breakpoints: { tablet }}) => css`
  & {
    background-color: #ffffff;
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(160)};
    }
  }
`

const project = ({ breakpoints: { desktop, tablet, mobile, }}) => css`
  & {
    background-color: #ffffff;
  }

  ${desktop.all} {
    .form {
      padding-top: 256px
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(256)};
    }
  }

  ${mobile.all} {
    .form {
      padding-top: ${calcRem(160)};
    }
  }
`

const eLearningPlatform = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    background-color: #ffffff;
  }

  .form {
    padding-top: ${calcRem(200)};
    padding-bottom: ${calcRem(160)};
  }

  ${desktop.l} {
    .form {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.m} {
    .form {
      padding-top: ${calcRem(200)};
    }
  }

  ${desktop.s} {
    .form {
      padding-top: ${calcRem(200)};
    }
  }

  ${tablet.all} {
    .form {
      padding-top: ${calcRem(120)};
    }
  }

  ${mobile.all} {
    .form {
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
