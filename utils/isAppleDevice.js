export default () => {

  const appleDevices = [
    'iPad',
    'iPhone',
  ]

  if (typeof window !== 'undefined' && window.navigator && window.navigator.platform) {

    return appleDevices.some(appleDevice => window.navigator.platform === appleDevice)
  }
}
