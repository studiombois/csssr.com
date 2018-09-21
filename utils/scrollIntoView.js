// import smoothscroll from 'smoothscroll-polyfill'

// smoothscroll.polyfill() // Next.js пытается выполнить сей код на сервере в результате чего ReferenceError: window is not defined

export default href => event => {
  const scrollOptions = { block: 'start', inline: 'nearest', behavior: 'smooth' }

  event.preventDefault() // из-за этой строки клика по сылке не происходит, в результате чего url в браузере не меняется. Если её убрать, то плавный скролл не работает.
  document.querySelector(href).scrollIntoView(scrollOptions)
}
