import React from 'react'
import styled from '@emotion/styled'
import { string, bool, func } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import getMessageTextOfStatus from '../../../../utils/client/getMessageTextOfStatus'
import Button from '../../../ui-kit/core-design/Button'
import styles from './StatusMessage.styles'

const StatusMessage = ({
  className,
  t,
  errorText,
  status,
  feedbackEmail,
  hasFailOrSuccessStatus,
  onClick,
}) => {
  const tabIndex = hasFailOrSuccessStatus ? '0' : '-1'
  const messageText = getMessageTextOfStatus({ status, feedbackEmail, errorText, t, tabIndex })

  return (
    <div className={className}>
      {hasFailOrSuccessStatus && (
        <img
          src={require(`../../../../static/icons/button_${status}.svg`).default}
          alt="Submit status icon"
        />
      )}

      <p className="font_p16-regular">{messageText}</p>

      <Button tabIndex={tabIndex} onClick={onClick}>
        {t(`common:form.message.${status}.action`)}
      </Button>
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

export default styled(translate(StatusMessage))`
  ${styles}
`
