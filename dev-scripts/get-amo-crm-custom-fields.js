// Этот скрипт не используется в проекте, но может использоваться для получения
// мета информации об AmoCRM аккаунте (кастомные поля, воронки, что-то ещё).

const fetch = require('isomorphic-unfetch')
const { SALES: { ORIGIN, AUTH_QUERY } } = require('../server/amo-config')

// Используется API https://www.amocrm.com/developers/content/api/account
fetch(`${ORIGIN}/api/v2/account/?with=custom_fields,users,pipelines,groups,note_types,task_types&${AUTH_QUERY}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(JSON.stringify(data))
  })
