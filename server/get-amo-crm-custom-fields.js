const request = require('request')

const AMO_CRM_BASE_URL = 'https://csssr.amocrm.ru'

request({
  method: 'GET',
  url: `${AMO_CRM_BASE_URL}/private/api/v2/json/accounts/current/?USER_LOGIN=${process.env.AMO_CRM_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_USER_HASH}`,
  json: true,
}, function (error, response, body) {
  // Где-то внутри этого объекта есть custom_fields интересующие нас, а именно:
  // [{
  //   "id": "143825",
  //   "name": "Телефон",
  //   "code": "PHONE",
  //   "multiple": "Y",
  //   "type_id": "8",
  //   "disabled": "0",
  //   "sort": 4,
  //   "is_required": false,
  //   "is_deletable": true,
  //   "is_visible": true,
  //   "enums": {
  //     "303509": "WORK",
  //     "303511": "WORKDD",
  //     "303513": "MOB",
  //     "303515": "FAX",
  //     "303517": "HOME",
  //     "303519": "OTHER"
  //   }
  // }, {
  //   "id": "143827",
  //   "name": "Email",
  //   "code": "EMAIL",
  //   "multiple": "Y",
  //   "type_id": "8",
  //   "disabled": "0",
  //   "sort": 6,
  //   "is_required": false,
  //   "is_deletable": true,
  //   "is_visible": true,
  //   "enums": {
  //     "303521": "WORK",
  //     "303523": "PRIV",
  //     "303525": "OTHER"
  //   }
  // }, {
  //   "id": "568629",
  //   "name": "Комментарий",
  //   "code": "",
  //   "multiple": "N",
  //   "type_id": "9",
  //   "disabled": "0",
  //   "sort": 508,
  //   "is_required": false,
  //   "is_deletable": true,
  //   "is_visible": true
  // }]
  // Если эти поля поменяются, то их надо перезапросить от AmoCRM и поменять хард код в submit-form.js

  console.log('Fields', JSON.stringify(body))
})
