
import React, { Fragment } from 'react'

export default ({ status, feedbackEmail, errorText, t }) => {
  if (status === 'success') {
    return (
      <Fragment>
        {t('common:form.message.success.intro')}<br />
        {t('common:form.message.success.body')}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {t(errorText)}<br />

      <span>
        {t('common:form.message.fail.body.textStart')}
        {t('common:form.message.fail.body.textForButton')}
        {t('common:form.message.fail.body.textBetweenButtonAndLink')}
      </span>

      <a className='font_link-list_16' href={`mailto:${feedbackEmail}`}>
        {feedbackEmail}
      </a>

      <style jsx>{`
        a { 
          text-decoration: none; 
        }

        @media (max-width: 1279px) {
          a {
              font-size: 1rem;
              line-height: 1.5rem;
          }
        }
      `}</style>
    </Fragment>
  )
}
