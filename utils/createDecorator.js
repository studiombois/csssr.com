import createDecorator from 'final-form-calculate'
import { valuesByFieldNames, multiplier, calcLayoutSum } from '../data/express/valuesByFieldNames'

export default createDecorator({
  field: /parceForm_/,
  updates: {
    total: (ignoredValue, { ...allValuesExceptTotal }) => {
      const isHotProject = allValuesExceptTotal.parceForm_hotProject

      let total = Object.keys(allValuesExceptTotal).reduce((sum, fieldName) => {
        const fieldValue = allValuesExceptTotal[fieldName]

        if (fieldName === 'parceForm_hotProject') {
          return sum
        }

        if (fieldName === 'parceForm_numberOfPages') {
          return sum + Number(multiplier(fieldValue) || 0)
        }

        if (fieldName === 'parceForm_designPerPage') {
          return (
            sum +
            Number(calcLayoutSum(fieldValue, allValuesExceptTotal.parceForm_numberOfPages) || 0)
          )
        }

        if (fieldName === 'parceForm_retina' || fieldName === 'parceForm_additionalOptions') {
          return sum + Number(valuesByFieldNames[fieldValue] || 0)
        }

        return fieldValue ? sum + Number(valuesByFieldNames[fieldName] || 0) : sum
      }, 0)

      if (isHotProject) {
        total = Math.round(total * 1.3)
      }

      return total >= 0 ? total : 0
    },
  },
})
