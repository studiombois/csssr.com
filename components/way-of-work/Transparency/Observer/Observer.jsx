import React, { useRef, useEffect } from 'react'

const Observer = ({ children, name, handleActive, className }) => {
  const itemRef = useRef()

  useEffect(() => {
    const callback = function ([entry]) {
      if (entry.isIntersecting) handleActive(name)
    }

    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: [0],
    }
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(callback, options)
      observer.observe(itemRef.current)

      return () => {
        observer.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <li ref={itemRef} className={className}>
      {children}
    </li>
  )
}

export default Observer
