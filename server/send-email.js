const Sentry = require('@sentry/node')
const nodemailer = require('nodemailer')
const validateFormFields = require('./validate-form-fields')

module.exports = async (req, res) => {
  const { phone, name, email, message, privacyPolicy } = req.body
  const validationResult = validateFormFields(res.locals.l10n.translations, 'contactForm', {
    name,
    email,
    privacyPolicy,
  })

  if (validationResult.errors) {
    return res.status(400).send({ error: validationResult.errors })
  }

  try {
    const transport = {
      host: process.env.HR_MAIL_HOST,
      port: process.env.HR_MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.HR_MAIL_USER,
        pass: process.env.HR_MAIL_PASS,
      },
    }

    const transporter = nodemailer.createTransport(transport)
    const options = {
      from: `CSSSR COM <${process.env.HR_MAIL_FROM}>`,
      to: process.env.HR_MAIL_TO,
      cc: process.env.HR_MAIL_CC,
      subject: 'Работа в CSSSR | Заявка со страницы contact-us',
      text: `телефон: ${phone}\nemail: ${email}\n\n\n${message}`,
    }

    await transporter.sendMail(options)
    console.log('server/send-email.js ERROR')

    return res.sendStatus(201)
  } catch (e) {
    console.error('server/send-email.js ERROR', JSON.stringify(req.body), e)

    Sentry.withScope((scope) => {
      scope.setExtra('reqBody', req.body)
      Sentry.captureException(e)
    })

    return res
      .status(400)
      .send({ error: res.locals.l10n.translations.common.form.message.fail.intro })
  }
}
