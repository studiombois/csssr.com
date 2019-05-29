const Sentry = require('@sentry/node')
const fetch = require('isomorphic-unfetch')
const { isProduction } = require('../utils/app-environment')
const { SCHOOL: { ORIGIN, AUTH_QUERY, PIPELINE_ID, FIRST_STATUS_ID, CONTACT_FIELDS: { PHONE, EMAIL, NEWSLETTER } } } = require('./amo-config')

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    newsletter,
    course,
  } = req.body

  const tagsArray = ['csssr.com']

  if (!isProduction) {
    tagsArray.push('TEST')
  }

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  if (course) {
    tagsArray.push(course)
  }

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
        console.error('server/submit-form.js ERROR', JSON.stringify(req.body), JSON.stringify(createContactData))

        Sentry.withScope(scope => {
          scope.setExtra('createContactData', createContactData)
          scope.setExtra('reqBody', req.body)
          Sentry.captureException(createContactData.response.error)
        })
        return res.status(400).send({ error: 'common:form.message.fail.intro' })
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
