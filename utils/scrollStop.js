let isScrolling
const frequency = 66

export default (window, callback) => {
  window.addEventListener('scroll', () => {
    window.clearTimeout( isScrolling )
    isScrolling = setTimeout(callback, frequency)
  }, false)
}
