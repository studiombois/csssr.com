import { css } from '@emotion/core'

const base = ({ breakpoints: { desktop, tablet, mobile }}) => css`
  & {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 10000;
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .fix-width {
    width: 880px;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-height: calc(100vh - 4rem);
    background-color: #ffffff;
    z-index: 2;
  }

  .content {
    position: relative;
    max-height: calc(100vh - 12rem);
    overflow: hidden;
  }

  .close {
    position: absolute;
    z-index: 2;
    top: 1rem;
    right: 1rem;
    height: 24px;
    width: 24px;
    border: none;
    color: #4a4a4a;
    background: none;
    cursor: pointer;
  }

  ${mobile.all} {
    .wrapper {
      padding-bottom: 3.5rem;
      max-width: calc(
        100% - 2rem
      );
      /* -2rem потому что по макетам слева и справа от модала отступы */
    }
  }

  ${tablet.all} {
    .wrapper {
      max-width: calc(
        100% - 2rem
      );
      /* -2rem потому что по макетам слева и справа от модала отступы */
      max-width: 784px;
    }

    .fix-width {
      width: calc(
        100% - 2rem
      );
      /* -2rem потому что по макетам слева и справа от модала отступы */
      max-width: 784px;
    }
  }

  ${desktop.s}{
    .fix-width {
      width: 816px;
    }
  }

  ${desktop.m} {
    .fix-width {
      width: 880px;
    }
  }
`

export default props => {
  const breakpoints = props.theme.breakpoints

  return css`
    ${base({ breakpoints })}
  `
}
