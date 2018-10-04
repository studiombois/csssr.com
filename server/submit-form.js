const fetch = require('isomorphic-unfetch')

const AMO_CRM_BASE_URL = 'https://csssr.amocrm.ru'

const tagsArray = ['csssr.com']
const tagFromEnv = process.env.AMO_CRM_SUBMIT_FORM_TAG
if (tagFromEnv) {
  tagsArray.push(tagFromEnv)
} else if (process.env.NODE_ENV !== 'production') {
  tagsArray.push('TEST')
}
const tags = tagsArray.join(',')

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    message,
  } = req.body

  const authQueryParams = `USER_LOGIN=${process.env.AMO_CRM_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_USER_HASH}`

  return fetch(`${AMO_CRM_BASE_URL}/api/v2/contacts/?${authQueryParams}`, {
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
          ],
        },
      ],
    }),
  })
    .then(response => response.json())
    .then(createContactData => {
      if (createContactData.response && createContactData.response.error) {
        console.log(JSON.stringify(createContactData))
        return res.status(400).send({ error: 'Произошла ошибка' })
      }

      return fetch(`${AMO_CRM_BASE_URL}/api/v2/leads/?${authQueryParams}`, {
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
            console.log(JSON.stringify(createLeadData))
            return res.status(400).send({ error: 'Произошла ошибка' })
          }
          return res.sendStatus(201)
        })
    })
}
