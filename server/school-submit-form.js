const fetch = require('isomorphic-unfetch')
const { SCHOOL: { ORIGIN, PIPELINE_ID, FIRST_STATUS_ID, FIELDS: { PHONE, EMAIL } } } = require('./amo-config')

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
  } = req.body

  const authQueryParams = `USER_LOGIN=${process.env.AMO_CRM_SCHOOL_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_SCHOOL_USER_HASH}`

  return fetch(`${ORIGIN}/api/v2/contacts/?${authQueryParams}`, {
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
          ],
        },
      ],
    }),
  })
    .then(response => response.json())
    .then(createContactData => {
      if (createContactData.response && createContactData.response.error) {
        console.log('server/school-submit-form.js ERROR', JSON.stringify(createContactData))
        return res.status(400).send({ error: 'Произошла ошибка' })
      }

      return fetch(`${ORIGIN}/api/v2/leads/?${authQueryParams}`, {
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
            console.log('server/school-submit-form.js ERROR', JSON.stringify(createLeadData))
            return res.status(400).send({ error: 'Произошла ошибка' })
          }

          console.log('server/school-submit-form.js SUCCESS', JSON.stringify(createContactData), JSON.stringify(createLeadData))
          return res.sendStatus(201)
        })
    })
}
