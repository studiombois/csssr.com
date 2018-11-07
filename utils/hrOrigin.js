export default (() => {
  if (process.env.HR_ORIGIN) {
    return process.env.HR_ORIGIN
  } else if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'
  }
  return 'https://hr.csssr.ru'
})()
