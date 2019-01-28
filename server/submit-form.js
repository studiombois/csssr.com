const fetch = require('isomorphic-unfetch')
const {
  SALES: {
    ORIGIN,
    AUTH_QUERY,
    PIPELINE_ID,
    FIRST_STATUS_ID,
    CONTACT_FIELDS: {
      PHONE,
      EMAIL,
      COMMENT,
      NEWSLETTER,
      GOOGLE_CID,
    },
    LEAD_FIELDS: {
      UTM_SOURCE,
      UTM_MEDIUM,
      UTM_CAMPAIGN,
      UTM_TERM,
      UTM_CONTENT,
    },
  },
} = require('./amo-config')

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    message,
    pageName,
    newsletter,
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

  if (newsletter) {
    tagsArray.push('Подписчик')
  }

  tagsArray.push(language)

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
              id: COMMENT.ID,
              values: [
                {
                  value: message,
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
            {
              id: GOOGLE_CID.ID,
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

      const { utm_source, utm_medium, utm_campaign, utm_term, utm_content } = req.cookies

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
              custom_fields: [
                {
                  id: UTM_SOURCE.ID,
                  values: [
                    {
                      value: utm_source,
                    },
                  ],
                },
                {
                  id: UTM_MEDIUM.ID,
                  values: [
                    {
                      value: utm_medium,
                    },
                  ],
                },
                {
                  id: UTM_CAMPAIGN.ID,
                  values: [
                    {
                      value: utm_campaign,
                    },
                  ],
                },
                {
                  id: UTM_TERM.ID,
                  values: [
                    {
                      value: utm_term,
                    },
                  ],
                },
                {
                  id: UTM_CONTENT.ID,
                  values: [
                    {
                      value: utm_content,
                    },
                  ],
                },
              ],
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
