// const fetch = require('isomorphic-unfetch')
//
// const AMO_CRM_BASE_URL = 'https://csssr.amocrm.ru'
//
// const authQueryParams = `USER_LOGIN=${process.env.AMO_CRM_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_USER_HASH}`

module.exports = (a, b, c, d, e) => {
  console.log('\x1b[30m', 'a: ', a, '\x1b[0m')
  console.log('\x1b[31m', 'b: ', b, '\x1b[0m')
  console.log('\x1b[32m', 'c: ', c, '\x1b[0m')
  console.log('\x1b[33m', 'd: ', d, '\x1b[0m')
  console.log('\x1b[34m', 'e: ', e, '\x1b[0m')
}

// fetch(`${AMO_CRM_BASE_URL}/api/v2/contacts/?${authQueryParams}`, {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: 'sdssd',
// })
//   .then(response => response.json())
//   .then(data => {
//
//     console.log('Fields', JSON.stringify(data))
//   })
