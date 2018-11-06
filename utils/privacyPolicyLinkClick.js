export default () => {
  document.documentElement.style.scrollBehavior = 'auto'

  const scrollStylesTimer = setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    clearTimeout(scrollStylesTimer)
  })
}
