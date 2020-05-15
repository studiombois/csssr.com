const plural = (count, options, language) => {
  if (language === 'ru') {
    count = Math.abs(count) % 100
    const rest = count % 10

    if (count > 10 && count < 20) {
      return options[2]
    }

    if (rest > 1 && rest < 5) {
      return options[1]
    }

    if (rest === 1) {
      return options[0]
    }

    return options[2]
  } else if (language === 'en') {
    if (count === 1) {
      return options[0]
    } else {
      return options[1]
    }
  }
}

// Combine interpolate and pluralize functionality
export default (str, value, language) => {
  const correctPluralForm = Array.isArray(str) ? plural(value, str, language) : str

  return correctPluralForm.replace(`{{count}}`, value)
}
