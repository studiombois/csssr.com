const normalizeNumberOfPages = (value) => {
  const regExpObj = /[^\d]/g
  if (value < 1 || !value || (value.length === 1 && regExpObj.test(value))) return 1

  return typeof value === 'string' ? Number(value.replace(regExpObj, '')) : value
}

export default normalizeNumberOfPages
export { normalizeNumberOfPages }
