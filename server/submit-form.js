const fetch = require('isomorphic-unfetch')

const AMO_CRM_BASE_URL = 'https://csssr.amocrm.ru'

const tags = ['csssr.com']
if (process.env.NODE_ENV !== 'production') {
  tags.push('ТЕСТ')
}

module.exports = (req, res) => {
  const {
    name,
    phone,
    email,
    message,
  } = req.body

  const authQueryParams = `USER_LOGIN=${process.env.USER_LOGIN}&USER_HASH=${process.env.USER_HASH}`

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
          tags: tags.join(','),
          custom_fields: [
            {
              id: '143825',
              values: [
                {
                  value: phone,
                  enum: '303513',
                },
              ],
            },
            {
              id: '143827',
              values: [
                {
                  value: email,
                  enum: '303521',
                },
              ],
            },
            {
              id: '568629',
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
    .then(data => {
      if (data.response && data.response.error) {
        console.log(JSON.stringify(data))
        return res.status(400).send('Произошла ошибка')
      }
      return res.sendStatus(201)
    })
}
