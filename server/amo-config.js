const getAuthQuery = (userLogin, userHash) => `USER_LOGIN=${userLogin}&USER_HASH=${userHash}`

module.exports = {
  SALES: {
    ORIGIN: 'https://csssr.amocrm.ru',
    AUTH_QUERY: getAuthQuery(process.env.AMO_CRM_SALES_USER_LOGIN, process.env.AMO_CRM_SALES_USER_HASH),
    PIPELINE_ID: 938752,
    FIRST_STATUS_ID: 21946756,

    // TODO при мёрдже задачи COM-920 про использование csssr-amo это надо внести в библиотеку
    PIPELINE_ID_EN: 1981756,
    FIRST_STATUS_ID_EN: 29378050,

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
  SCHOOL: {
    ORIGIN: 'https://csssrschool.amocrm.ru',
    AUTH_QUERY: getAuthQuery(process.env.AMO_CRM_SCHOOL_USER_LOGIN, process.env.AMO_CRM_SCHOOL_USER_HASH),
    PIPELINE_ID: 1511002,
    FIRST_STATUS_ID: 23311747,
    CONTACT_FIELDS: {
      PHONE: {
        ID: 7315,
        ENUM: '10841',
      },
      EMAIL: {
        ID: 7317,
        ENUM: '10849',
      },
      NEWSLETTER: {
        ID: 92481,
      },
    },
  },
}
