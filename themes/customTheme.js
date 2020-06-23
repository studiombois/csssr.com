import color from 'color'

const primary = color('#0076ff')
const secondary = color('#4a4a4a')

let breakpoints = {
  xs: 360,
  s: 768,
  m: 1024,
  l: 1280,
  xl: 1360,
  xxl: 1920,
}
breakpoints.s_s = breakpoints.s - 1
breakpoints.s_m = breakpoints.m - 1
breakpoints.s_l = breakpoints.l - 1
breakpoints.s_xl = breakpoints.xl - 1
breakpoints.s_xxl = breakpoints.xxl - 1

const customTheme = {
  colors: {
    primary: {
      origin: primary.hex(),
      darken15: primary.darken(0.15).hex(),
      fade: '#80bbff',
    },
    secondary: {
      origin: secondary.hex(),
      darken100: '#18191B',
      lighten110: secondary.lighten(1.1).hex(),
      gray: '#9B9B9B',
      lightGray: '#C0C0C0',
    },
  },
  baseSize: 16,
  breakpoints: {
    mobile: {
      all: `@media (max-width: ${breakpoints.s_s}px)`,
    },
    tablet: {
      s: `@media (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.s_m}px)`,
      m: `@media (min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.s_l}px)`,
      all: `@media (min-width: ${breakpoints.s}px) and (max-width: ${breakpoints.s_l}px)`,
    },
    desktop: {
      s: `@media (min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.s_xl}px)`,
      m: `@media (min-width: ${breakpoints.xl}px) and (max-width: ${breakpoints.s_xxl}px)`,
      l: `@media (min-width: ${breakpoints.xxl}px)`,
      all: `@media (min-width: ${breakpoints.l}px)`,
    },
    below: {
      desktop: `@media (max-width: ${breakpoints.s_l}px)`,
    },
  },
  media: {
    points: breakpoints,
    from: function (width) {
      return `@media (min-width: ${width})`
    },
    to: function (width) {
      return `@media (max-width: ${width})`
    },
    from_to: function (minWidth, maxWidth) {
      return `@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`
    },
  },
}

export { customTheme }
export default customTheme
