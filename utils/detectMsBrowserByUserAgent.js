export const detectIe11 = userAgent => /(MSIE|Trident)/.test(userAgent)
export default userAgent => /(MSIE|Trident|Edge)/.test(userAgent)
