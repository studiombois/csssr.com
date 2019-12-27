let isScrolling
const frequency = 66

export default callback => {
  const onScroll = () => {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
      callback()
      window.removeEventListener('scroll', onScroll, false)
    }, frequency)
  }
  window.addEventListener('scroll', onScroll, false)
}
