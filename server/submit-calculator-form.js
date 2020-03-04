const Sentry = require('@sentry/node')
const { express, TEST_TAG } = require('@csssr/csssr-amo')
const { isProduction } = require('../utils/app-environment')
const validateFormFields = require('./validate-form-fields')
const {
  retinaRadioButtons,
  additionalOptionsRadioButtons,
} = require('../data/express/radioButtonsData')

const amoExpress = express.init(
  process.env.AMO_CRM_SALES_USER_LOGIN,
  process.env.AMO_CRM_SALES_USER_HASH,
)

module.exports = async (req, res) => {
  const {
    name,
    phone,
    email,
    message,
    newsletter,
    messenger,
    pageName,
    design,
    formName,
    parceForm_numberOfPages,
    parceForm_hotProject,
    parceForm_ie9,
    parceForm_ie10,
    parceForm_ie11,
    parceForm_androidBrowser,
    parceForm_iosChromeBrowser,
    additional_browsers,
    parceForm_designPerPage,
    parceForm_retina,
    parceForm_additionalOptions,
    total,
    gacid,
    language,
  } = req.body

  const validationResult = validateFormFields(req.i18n.t.bind(req.i18n), formName, {
    name,
    email,
    design,
  })

  if (validationResult.errors) {
    return res.status(400).send({ error: validationResult.errors })
  }

  const tagsArray = ['csssr.express', 'calc'].concat(pageName)

  if (!isProduction) {
    tagsArray.push(TEST_TAG)
  }

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  tagsArray.push(language)

  const tags = tagsArray.join(',')

  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.cookies

  const retiaLabelTextByValue = retinaRadioButtons.reduce((acc, radio) => {
    acc[radio.id] = radio.labelText
    return acc
  }, {})
  const additionalOptionsTextByValue = additionalOptionsRadioButtons.reduce((acc, radio) => {
    acc[radio.id] = radio.labelText
    return acc
  }, {})
  const retina = req.i18n.t.bind(req.i18n)(retiaLabelTextByValue[parceForm_retina])
  const interactive = req.i18n.t.bind(req.i18n)(
    additionalOptionsTextByValue[parceForm_additionalOptions],
  )

  try {
    const amoResponse = await amoExpress.createLead(language, {
      tags,
      name,
      phone,
      email,
      message,
      messenger,
      pageName,
      design,
      formName,
      parceForm_numberOfPages,
      parceForm_hotProject,
      parceForm_ie9,
      parceForm_ie10,
      parceForm_ie11,
      parceForm_androidBrowser,
      parceForm_iosChromeBrowser,
      additional_browsers,
      parceForm_designPerPage,
      retina,
      interactive,
      total,
      gacid,
      language,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    })

    console.log(
      'server/submit-calculator-form.js SUCCESS',
      JSON.stringify(amoResponse.contact),
      JSON.stringify(amoResponse.lead),
    )

    return res.sendStatus(201)
  } catch (e) {
    console.error('server/submit-calculator-form.js ERROR', JSON.stringify(req.body), e)

    Sentry.withScope(scope => {
      scope.setExtra('reqBody', req.body)
      Sentry.captureException(e)
    })

    return res
      .status(400)
      .send({ error: req.i18n.t.bind(req.i18n)('common:form.message.fail.intro') })
  }
}
