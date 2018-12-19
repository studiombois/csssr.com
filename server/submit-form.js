const { AMO_CRM_BASE_URL, AUTH_QUERY_PARAMS } = require('../constants/amocrm')
const fetch = require('isomorphic-unfetch')

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    message,
    pageName,
    gacid,
    language,
  } = req.body

  const tagsArray = ['csssr.com'].concat(pageName)
  const tagFromEnv = process.env.AMO_CRM_SUBMIT_FORM_TAG

  if (tagFromEnv) {
    tagsArray.push(tagFromEnv)
  } else if (process.env.NODE_ENV !== 'production') {
    tagsArray.push('TEST')
  }

  tagsArray.push(language)

  const tags = tagsArray.join(',')

  return fetch(`${AMO_CRM_BASE_URL}/api/v2/contacts/?${AUTH_QUERY_PARAMS}`, {
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
              id: 143825,
              values: [
                {
                  value: phone,
                  enum: '303513',
                },
              ],
            },
            {
              id: 143827,
              values: [
                {
                  value: email,
                  enum: '303521',
                },
              ],
            },
            {
              id: 568629,
              values: [
                {
                  value: message,
                },
              ],
            },
            {
              id: 582127,
              values: [
                {
                  value: gacid,
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
        console.log('x1b[31m', 'server/submit-form.js ERROR', JSON.stringify(createContactData), 'x1b[0m')
        return res.status(400).send({ error: 'server/submit-form.js ошибка при создании контакта' })
      }

      return fetch(`${AMO_CRM_BASE_URL}/api/v2/leads/?${AUTH_QUERY_PARAMS}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          add: [
            {
              name: `${name} | Первичный запрос с csssr.com`,
              status_id: 21946756,
              pipeline_id: 938752,
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
            console.log('server/submit-form.js ERROR', JSON.stringify(createLeadData))
            return res.status(400).send({ error: 'server/submit-form.js ошибка при создании лида' })
          }

          console.log('server/submit-form.js SUCCESS', JSON.stringify(createContactData), JSON.stringify(createLeadData))
          return res.sendStatus(201)
        })
    })
}
