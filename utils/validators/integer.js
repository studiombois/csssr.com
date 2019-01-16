function isPositiveInteger(str) {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

export default t => value => {
  if (value && !isPositiveInteger(value)) {
    return t('common:formErrors.integer')
  }

  return undefined
}
