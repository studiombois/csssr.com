// Этот скрипт не используется в проекте, но может использоваться для получения
// мета информации об AmoCRM аккаунте (кастомные поля, воронки, что-то ещё).

const fetch = require('isomorphic-unfetch')
const { SCHOOL: { ORIGIN } } = require('../server/amo-config')

const authQueryParams = `USER_LOGIN=${process.env.AMO_CRM_SCHOOL_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_SCHOOL_USER_HASH}`

// Используется API https://www.amocrm.com/developers/content/api/account
fetch(`${ORIGIN}/api/v2/account/?with=custom_fields,users,pipelines,groups,note_types,task_types&${authQueryParams}`, {
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
