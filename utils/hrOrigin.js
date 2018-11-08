import getConfig from 'next/config'
const { publicRuntimeConfig: { HR_ORIGIN } } = getConfig()

export default (() => {
  if (HR_ORIGIN) {
    return HR_ORIGIN
  } else if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'
  }
  return 'https://hr.csssr.ru'
})()
