import testEmail from '../utils/testEmail'

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

  const validationResult = validateFormFields(res.locals.l10n.translations, formName, {
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

  const retinaLabelTextByValue = retinaRadioButtons.reduce((acc, radio) => {
    acc[radio.id] = radio.labelText
    return acc
  }, {})
  const additionalOptionsTextByValue = additionalOptionsRadioButtons.reduce((acc, radio) => {
    acc[radio.id] = radio.labelText
    return acc
  }, {})
  const retina = retinaLabelTextByValue[parceForm_retina](res.locals.l10n.translations)
  const interactive = additionalOptionsTextByValue[parceForm_additionalOptions](
    res.locals.l10n.translations,
  )

  const isTestEmail = email === testEmail
  try {
    const amoResponse = await amoExpress.createLead(isTestEmail ? TEST_TAG : language, {
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

    Sentry.withScope((scope) => {
      scope.setExtra('reqBody', req.body)
      Sentry.captureException(e)
    })

    return res
      .status(400)
      .send({ error: res.locals.l10n.translations.common.form.message.fail.intro })
  }
}
