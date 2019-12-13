import React from 'react'
import { string, bool, func } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import getMessageTextOfStatus from '../../../../utils/client/getMessageTextOfStatus'
import Button from '../../../ui-kit/Button'
import { statusMessageStyles, generateStatusMessageDynamicCSS, buttonCSS } from './styles'

const StatusMessage = ({ t, errorText, status, feedbackEmail, hasFailOrSuccessStatus, onClick }) => {
  const tabIndex = hasFailOrSuccessStatus ? '0' : '-1'
  const messageText = getMessageTextOfStatus({ status, feedbackEmail, errorText, t, tabIndex })
  const statusMessageDynamicCSS = generateStatusMessageDynamicCSS(hasFailOrSuccessStatus)

  return (
    <div className={statusMessageDynamicCSS.className}>
      { hasFailOrSuccessStatus &&
        <img
          src={require(`../../../../static/icons/button_${status}.svg`)}
          alt='Submit status icon'
        />
      }

      <p className='font_p16-regular'>
        {messageText}
      </p>

      <Button tabIndex={tabIndex} className={buttonCSS.className} onClick={onClick}>
        {t(`common:form.message.${status}.action`)}
      </Button>

      <style jsx>{statusMessageStyles}</style>
      {statusMessageDynamicCSS.styles}
      {buttonCSS.styles}
    </div>
  )
}

StatusMessage.propTypes = {
  status: string,
  hasFailOrSuccessStatus: bool,
  feedbackEmail: string,
  errorText: string,
  onClick: func,
}

export default translate()(StatusMessage)
