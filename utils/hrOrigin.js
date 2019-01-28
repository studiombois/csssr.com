import getConfig from 'next/config'
import { isDevelopment } from './app-environment'
const { publicRuntimeConfig } = getConfig()

export default (() => {
  if (publicRuntimeConfig && publicRuntimeConfig.HR_ORIGIN) {
    return publicRuntimeConfig.HR_ORIGIN
  } else if (isDevelopment) {
    return 'http://localhost:3030'
  }
  return 'https://hr.csssr.ru'
})()
