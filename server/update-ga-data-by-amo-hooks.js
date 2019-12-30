const fetch = require('isomorphic-unfetch')
const getGaId = require('../utils/getGaId')
const {
  SALES: {
    ORIGIN,
    AUTH_QUERY,
    PIPELINE_ID,
    CONTACT_FIELDS: { GOOGLE_CID },
  },
} = require('./amo-config')

// это вебхук для amoCRM, почитать про их вебхуки можно тут:
// https://www.amocrm.ru/developers/content/api/webhooks

module.exports = (req, res) => {
  const { leads } = req.body

  // Определяем язык, что бы выбрать правильный Google Analytics ID
  // TODO могут быть проблемы если нет тега
  const language = leads.update[0].tags.find(({ name }) => name === 'ru' || name === 'en').name
  const gaId = getGaId(language)

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
    //
    // дока о сделках:
    // https://www.amocrm.ru/developers/content/api/leads
    fetch(`${ORIGIN}/api/v2/leads/?id=${leads.update[0].id}&${AUTH_QUERY}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(leadData =>
        Promise.all([
          // Получаем инфу о цифрофых воронках
          //
          // дока о воронках:
          // https://www.amocrm.ru/developers/content/api/pipelines
          fetch(`${ORIGIN}/api/v2/pipelines/?id=${leads.update[0].pipeline_id}&${AUTH_QUERY}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }),
          // Получаем инфу о главном контакте сделки по его id
          //
          // дока о контактах:
          // https://www.amocrm.ru/developers/content/api/contacts
          //
          // eslint-disable-next-line
        fetch(`${ORIGIN}/api/v2/contacts/?id=${leadData._embedded.items[0].main_contact.id}&${AUTH_QUERY}`, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            },
          ),
        ]),
      )
      .then(response => Promise.all(response.map(r => r.json())))
      .then(([piplelineData, contactData]) => {
        /* eslint-disable */
        const statusesInfoById = piplelineData._embedded.items[PIPELINE_ID].statuses
        const leadStatusName = statusesInfoById[leads.update[0].status_id].name
        const leadContactCid = contactData._embedded.items[0].custom_fields.find(({id}) => id === GOOGLE_CID.ID).values[0].value
        const leadPrice = leads.update[0].price || 0
        /* eslint-enable */

        return { leadStatusName, leadContactCid, leadPrice }
      })
      .then(({ leadStatusName, leadContactCid, leadPrice }) => {
        // по google measurment protocol обращаемся к GA и передаём ей нужные
        // данные ввиде специальных параметров
        //
        // тут можно почитать про google measurment protocol:
        // https://developers.google.com/analytics/devguides/collection/protocol/v1/?hl=ru
        //
        // тут справка про его параметры:
        // https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters?hl=ru
        //
        // тут про так как им пользоваться и как передавать параметры:
        // https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide?hl=ru
        const params = {
          v: 1,
          t: 'pageview',
          dl: 'https://csssr.com',
          tid: gaId,
          cid: leadContactCid,
          cd1: leadContactCid,
          cd2: leadStatusName,
          cd3: leadPrice,
        }
        // TODO создать поля cd1
        // TODO Проверить лимит 500

        const query = Object.keys(params)
          .map(k => `${k}=${encodeURIComponent(params[k])}`)
          .join('&')

        fetch(`https://www.google-analytics.com/collect?${query}`, {
          method: 'POST',
        })
      })
      .then(() => res.status(201).send())
      .catch(() => res.status(400).send())
  }
}
