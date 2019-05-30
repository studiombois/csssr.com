const Sentry = require('@sentry/node')
const fetch = require('isomorphic-unfetch')
const { isProduction } = require('../utils/app-environment')
const validateFormFields = require('./validate-form-fields')
const { SCHOOL: { ORIGIN, AUTH_QUERY, PIPELINE_ID, FIRST_STATUS_ID, CONTACT_FIELDS: { PHONE, EMAIL, NEWSLETTER } } } = require('./amo-config')

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    newsletter,
    course,
    privacyPolicy,
  } = req.body

  const validationResult = validateFormFields(req.i18n.t.bind(req.i18n), { name: null, email, privacyPolicy })

  if (validationResult.errors) {
    return res.status(400).send({ error: validationResult.errors })
  }

  const tagsArray = ['csssr.com']

  if (!isProduction) {
    tagsArray.push('TEST')
  }

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  tagsArray.push(course || 'Без курса')

  const tags = tagsArray.join(',')

  return fetch(`${ORIGIN}/api/v2/contacts/?${AUTH_QUERY}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      add: [
        {
          name,
          tags,
          custom_fields: [
            {
              id: PHONE.ID,
              values: [
                {
                  value: phone,
                  enum: PHONE.ENUM,
                },
              ],
            },
            {
              id: EMAIL.ID,
              values: [
                {
                  value: email,
                  enum: EMAIL.ENUM,
                },
              ],
            },
            {
              id: NEWSLETTER.ID,
              values: [
                {
                  value: newsletter,
                },
              ],
            },
          ],
        },
      ],
    }),
  })
    .then(response => response.json())
    .then(createContactData => {
      if (createContactData.response && createContactData.response.error) {
        Sentry.withScope(scope => {
          scope.setExtra('createContactData', createContactData)
          scope.setExtra('reqBody', req.body)
          Sentry.captureException(createContactData.response.error)
        })
        return res.status(400).send({ error: 'Ошибка при создании контакта' })
      }

      return fetch(`${ORIGIN}/api/v2/leads/?${AUTH_QUERY}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          add: [
            {
              name: `${name} | Первичный запрос с csssr.com`,
              pipeline_id: PIPELINE_ID,
              status_id: FIRST_STATUS_ID,
              // eslint-disable-next-line no-underscore-dangle
              contacts_id: createContactData._embedded.items[0].id,
              tags,
            },
          ],
        }),
      })
        .then(response => response.json())
        .then(createLeadData => {
          if (createLeadData.response && createLeadData.response.error) {
            Sentry.withScope(scope => {
              scope.setExtra('createLeadData', createLeadData)
              scope.setExtra('reqBody', req.body)
              Sentry.captureException(createLeadData.response.error)
            })
            return res.status(400).send({ error: 'Ошибка при создании лида' })
          }

          console.log('server/school-submit-form.js SUCCESS', JSON.stringify(createContactData), JSON.stringify(createLeadData))
          return res.sendStatus(201)
        })
    })
}
