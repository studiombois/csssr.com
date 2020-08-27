import { useLazy } from '../hooks'

const LazyLoad = ({ children, options }) => {
  const {
    props: { className },
    type,
  } = children

  useLazy({
    className,
    type,
    options,
  })

  return children
}

export default LazyLoad
