import { css } from '@emotion/core'

const base = ({ breakpoints: { tablet, mobile, desktop } }) => css`
  & {
    display: flex;
  }

  .map-wrap {
    top: 0;
    left: 0;
    width: 41.25%;
  }


  ${desktop.all} {
    & {
      margin-top: 64px;
    }

    .map-wrap {
      height: calc(100vh - 64px);
    }
  }

  ${tablet.all} {
    & {
      margin-top: 4rem;
    }

    .map-wrap {
      height: calc(100vh - 4rem);
    }
  }

  ${mobile.all} {
    & {
      margin-top: 3.5rem;
      flex-direction: column;
    }

    .map-wrap {
      position: relative;
      width: 100%;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
