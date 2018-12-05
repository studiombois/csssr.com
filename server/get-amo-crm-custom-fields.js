import { AMO_CRM_BASE_URL, AUTH_QUERY_PARAMS } from '../constants/amocrm'

const fetch = require('isomorphic-unfetch')

fetch(`${AMO_CRM_BASE_URL}/api/v2/contacts/?${AUTH_QUERY_PARAMS}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => {
    // Где-то внутри этого объекта есть custom_fields для сущности contact интересующие нас, а именно:
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
    //
    // Также, там есть массив leads_statuses:
    // {
    //   "id": 21946756,
    //   "name": "Заявка",
    //   "pipeline_id": 938752,
    //   "sort": 10,
    //   "color": "#99ccff",
    //   "editable": "Y"
    // }
    //
    // И поле Google CID:
    // {
    //   "id": 582127,
    //     "name": "Google CID",
    //     "values": [{
    //       "value": *какое-то значение cid*,
    //   }
    // }
    //     'Google CID': ,
    //
    // Если эти поля поменяются, то их надо перезапросить от AmoCRM и поменять хард код в submit-form.js

    console.log('Fields', JSON.stringify(data, null, 2))
  })
