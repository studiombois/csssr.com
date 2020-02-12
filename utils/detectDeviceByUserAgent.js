export const detectMobileByUserAgent = userAgent =>
  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent)
export const detectTabletByUserAgent = userAgent => /iPad|Tablet/i.test(userAgent)
