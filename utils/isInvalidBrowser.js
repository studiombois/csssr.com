const VALID_DEVICES = {
  // OS Android and browser version
  android: '76',

  // OS iOS and OS version
  ios: '10.0',
}

/**
 * Method for check layout features
 * @returns {Boolean}
 */
function validateLayoutFeatures() {
  if (process.browser && window.CSS && window.CSS.supports) {
    return CSS.supports('display', 'flex') && CSS.supports('display', 'grid')
  }

  return false
}

/**
 * @param {String} name - Browser or OS name
 * @param {String} version - Browser or OS version
 * @returns {Boolean}
 */
export function checkIsInvalidDevice(name, version) {
  if (!name || !version) {
    return false
  }

  const validDeviceOrBrowser = VALID_DEVICES[name]
  if (!validDeviceOrBrowser) {
    return false
  }

  return Number(validDeviceOrBrowser) >= Number(version.replace(/(\d+)\.+(\d+)\.+(\d+)/, '$1.$2'))
}

/**
 * Browser features request method
 * @param {BrowserInfo} browserOptions
 * @returns {Boolean}
 */
export const checkIsInvalidBrowser = () => {
  return !validateLayoutFeatures()
}

/**
 * @typedef BrowserInfo
 * @property {String} name
 * @property {String} version
 * @property {String} [os]
 */
