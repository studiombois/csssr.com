import { css } from '@emotion/core'

const getThemeStyle = props => {
  const orangeTheme = `
    border: 1px solid #ffe0a2;
    background-color: #fff6e3;
  `

  const grayTheme = `
    border: 1px solid #dedede;
    background-color: #f9f9f9;
  `
  return props.colorTheme === 'primary' ? orangeTheme : grayTheme
}

export default {
  base: props => {
    const color = props.theme.colors
    const breakpoints = props.theme.breakpoints

    return css`
      .note {
        line-height: 1rem;
        padding: 1rem;
        margin: 0;
        ${getThemeStyle(props)};

        ${breakpoints.desktop.all} {
          font-size: 0.875rem;
        }

        ${breakpoints.below.desktop} {
          font-size: 0.75rem;
        }
      }

      .contact-link {
        color: ${color.primary.origin} !important;
        font-weight: bold;
      }
    `
  },
}
