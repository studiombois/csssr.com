const getAuthQuery = (userLogin, userHash) => `USER_LOGIN=${userLogin}&USER_HASH=${userHash}`

module.exports = {
  SALES: {
    ORIGIN: 'https://csssr.amocrm.ru',
    AUTH_QUERY: getAuthQuery(
      process.env.AMO_CRM_SALES_USER_LOGIN,
      process.env.AMO_CRM_SALES_USER_HASH,
    ),
    PIPELINE_ID: 938752,
    FIRST_STATUS_ID: 21946756,
    CONTACT_FIELDS: {
      PHONE: {
        ID: 143825,
        ENUM: '303513',
      },
      EMAIL: {
        ID: 143827,
        ENUM: '303521',
      },
      COMMENT: {
        ID: 568629,
      },
      NEWSLETTER: {
        ID: 584019,
      },
      GOOGLE_CID: {
        ID: 582127,
      },
    },
    LEAD_FIELDS: {
      UTM_SOURCE: {
        ID: 585863,
      },
      UTM_MEDIUM: {
        ID: 585865,
      },
      UTM_CAMPAIGN: {
        ID: 585867,
      },
      UTM_TERM: {
        ID: 585869,
      },
      UTM_CONTENT: {
        ID: 585871,
      },
    },
  },
}
