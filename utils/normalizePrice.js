const normalizePrice = originValue => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })

  return '~' + formatter.format(originValue)
}

export default normalizePrice
export { normalizePrice }
