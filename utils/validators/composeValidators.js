export default (...validators) => (value, t) =>
  validators.reduce((error, validator) => {
    return error || (validator && validator(value, t))
  }, undefined)
