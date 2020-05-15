export default (...validators) => (value, translations) =>
  validators.reduce((error, validator) => {
    return error || (validator && validator(value, translations))
  }, undefined)
