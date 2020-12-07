import { isProduction } from './app-environment'

export default () => {
  if (!isProduction) {
    return '17171975'
  }

  return '17999667'
}
