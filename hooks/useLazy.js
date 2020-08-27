import { useEffect } from 'react'

export const useLazy = ({ className, type, options = {} }) => {
  useEffect(() => {
    const lazyElements = document.querySelectorAll(`.${className}`)

    const callback = (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          if (type === 'video') {
            for (const source in target.children) {
              const videoSource = target.children[source]

              if (videoSource.tagName === 'SOURCE') {
                videoSource.src = videoSource.dataset.src
              }
            }

            target.load()
          } else {
            target.src = target.dataset.src
          }

          target.classList.remove(`${className}`)
          observer.unobserve(target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)

    lazyElements.forEach((element) => {
      observer.observe(element)
    })

    // use callback once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
