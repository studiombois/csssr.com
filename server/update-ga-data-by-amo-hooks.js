const fetch = require('isomorphic-unfetch')

const AMO_CRM_BASE_URL = 'https://csssr.amocrm.ru'

const authQueryParams = `USER_LOGIN=${process.env.AMO_CRM_USER_LOGIN}&USER_HASH=${process.env.AMO_CRM_USER_HASH}`
const frontendSalesPipelineId = '938752'
const googleCidFieldId = 582127
const gaIdByLanguage = {
  en: 'UA-122976231-2',
  ru: 'UA-122976231-1',
}

module.exports = (req, res) => {
  const { leads } = req.body

  // Определяем язык, что бы выбрать правильный Google Analytics ID
  const language = leads.update[0].tags.find(({ name }) => name === 'ru' || name === 'en').name
  const GA_ID = process.env.NODE_ENV === 'production' ? gaIdByLanguage[language] : 'UA-122976231-3'

  // console.log('\x1b[32m', 'xxx: ', JSON.stringify(req.body, null, 2), '\x1b[0m')
  // При разных операциях внутри объекта leads лежат разные поля с одинаковыми
  // данными:
  // — leads.status;
  // — leads.update;
  // — leads.add.
  //
  // Однако, любая операция cо сделками считается за обновление объекта сделки,
  // поэтому поле update будет присутствовать в leads при любой операции со
  // сделкой

  if (leads.update) {
    // Получаем информацию о сделке
    fetch(`${AMO_CRM_BASE_URL}/api/v2/leads/?id=${leads.update[0].id}&${authQueryParams}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(leadData => Promise.all([
        // Получаем инфу о цифрофых воронках
        fetch(`${AMO_CRM_BASE_URL}/api/v2/pipelines/?id=${leads.update[0].pipeline_id}&${authQueryParams}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }),
        // Получаем инфу о главном контакте сделки по его id
        //
        // eslint-disable-next-line
        fetch(`${AMO_CRM_BASE_URL}/api/v2/contacts/?id=${leadData._embedded.items[0].main_contact.id}&${authQueryParams}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }),
      ]))
      .then(response => Promise.all(response.map(r => r.json())))
      .then(([piplelineData, contactData]) => {
        /* eslint-disable */
        const statusesInfoById = piplelineData._embedded.items[frontendSalesPipelineId].statuses
        const leadStatusName = statusesInfoById[leads.update[0].status_id].name
        const leadContactCid = contactData._embedded.items[0].custom_fields.find(({id}) => id === googleCidFieldId).values[0].value
        const leadPrice = leads.update[0].price || 0
        /* eslint-enable */

        // console.log('\x1b[35m', 'leadStatusName: ', leadStatusName, '\x1b[0m')
        // console.log('\x1b[36m', 'leadContactCid: ', leadContactCid, '\x1b[0m')
        // console.log('\x1b[37m', 'leadPrice: ', leadPrice || 0, '\x1b[0m')

        return ({ leadStatusName, leadContactCid, leadPrice })
      })
      .then(({ leadStatusName, leadContactCid, leadPrice }) => {
        const params = {
          v: 1,
          t: 'pageview',
          dl: 'https://csssr.com',
          tid: GA_ID,
          cid: leadContactCid,
          cd1: leadStatusName,
          cd3: leadPrice,
        }

        const query = Object
          .keys(params)
          .map(k => `${k}=${encodeURIComponent(params[k])}`)
          .join('&')

        fetch(`https://www.google-analytics.com/collect?${query}`, {
          method: 'POST',
          // headers: {
          //   Accept: 'application/json',
          //   'Content-Type': 'application/x-www-form-urlencoded',
          // },
        })
      })
      .then(() => res.status(201).send())
      .catch(() => res.status(400).send())
  }
}
