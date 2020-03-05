const valuesByFieldNames = {
  parceForm_recommendations: 0,
  parceForm_ie11: 30,
  parceForm_ie10: 45,
  parceForm_ie9: 60,
  parceForm_androidBrowser: 30,
  parceForm_iosChromeBrowser: 30,
  retina_1: 0,
  retina_2: 50,
  retina_3: 100,
  'additional-option_1': 0,
  'additional-option_2': 250,
  'additional-option_3': 500,
}

const multiplier = num => {
  return Number(num * 200)
}

const calcLayoutSum = (numberOfLayouts, numberOfPages) => {
  if (numberOfLayouts <= 1) return 0

  return (numberOfLayouts - 1) * (multiplier(numberOfPages) * 0.15)
}

export { valuesByFieldNames, multiplier, calcLayoutSum }
