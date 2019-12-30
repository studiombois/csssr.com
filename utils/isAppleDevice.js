export default () => {
  const appleDevices = ['iPad', 'iPhone']

  if (typeof window !== 'undefined' && window.navigator && window.navigator.platform) {
    return appleDevices.includes(window.navigator.platform)
  }

  // Данная проверка сделана что работать только на фронте
  // если потребуется что бы она работала и на беке расскоменть код ниже.
  // import request from 'request'
  //
  // else {
  //   const userAgent = request.headers['user-agent']
  //
  //   return appleDevices.some(device => userAgent.includes(device))
  // }

  return false
}
