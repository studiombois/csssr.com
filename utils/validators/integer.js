function isPositiveInteger(str) {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

export default (translations) => (value) => {
  if (value && !isPositiveInteger(value)) {
    return translations.common.form.errors.integer
  }

  return undefined
}
