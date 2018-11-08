import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default (() => {
  if (publicRuntimeConfig && publicRuntimeConfig.HR_ORIGIN) {
    return publicRuntimeConfig.HR_ORIGIN
  } else if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'
  }
  return 'https://hr.csssr.ru'
})()
