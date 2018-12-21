const getAuthQuery = (userLogin, userHash) => `USER_LOGIN=${userLogin}&USER_HASH=${userHash}`

module.exports = {
  SALES: {
    ORIGIN: 'https://csssr.amocrm.ru',
    AUTH_QUERY: getAuthQuery(process.env.AMO_CRM_SALES_USER_LOGIN, process.env.AMO_CRM_SALES_USER_HASH),
    PIPELINE_ID: 938752,
    FIRST_STATUS_ID: 21946756,
    FIELDS: {
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
      GOOGLE_CID: {
        ID: 582127,
      },
    },
  },
  SCHOOL: {
    ORIGIN: 'https://csssrschool.amocrm.ru',
    AUTH_QUERY: getAuthQuery(process.env.AMO_CRM_SCHOOL_USER_LOGIN, process.env.AMO_CRM_SCHOOL_USER_HASH),
    PIPELINE_ID: 1511002,
    FIRST_STATUS_ID: 23311747,
    FIELDS: {
      PHONE: {
        ID: 7315,
        ENUM: '10841',
      },
      EMAIL: {
        ID: 7317,
        ENUM: '10849',
      },
    },
  },
}
