const Sentry = require('@sentry/node')
const { sales } = require('csssr-amo')
const { isProduction } = require('../utils/app-environment')
const validateFormFields = require('./validate-form-fields')

const amoSales = sales.init(process.env.AMO_CRM_SALES_USER_LOGIN, process.env.AMO_CRM_SALES_USER_HASH)

module.exports = async (req, res) => {
  const {
    name,
    phone,
    email,
    message,
    pageName,
    newsletter,
    gacid,
    language,
    privacyPolicy,
  } = req.body

  const validationResult = validateFormFields(req.i18n.t.bind(req.i18n), { name, email, privacyPolicy })

  if (validationResult.errors) {
    return res.status(400).send({ error: validationResult.errors })
  }

  const tagsArray = ['csssr.com'].concat(pageName)

  if (!isProduction) {
    tagsArray.push('TEST')
  }

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  tagsArray.push(language)

  const tags = tagsArray.join(',')

  const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.cookies

  try {
    const amoResponse = await amoSales.createLead({
      tags,
      name,
      phone,
      email,
      message,
      newsletter,
      gacid,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    })

    console.log('server/submit-form.js SUCCESS', JSON.stringify(amoResponse.contact), JSON.stringify(amoResponse.lead))

    return res.sendStatus(201)
  } catch (e) {
    console.error('server/submit-form.js ERROR', JSON.stringify(req.body), e)

    Sentry.withScope(scope => {
      scope.setExtra('reqBody', req.body)
      Sentry.captureException(e)
    })

    return res.status(400).send({ error: 'common:form.message.fail.intro' })
  }
}
