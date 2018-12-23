export default maxLength => value => value && value.length > maxLength ? `Количество символов не должно превышать ${maxLength}` : undefined
