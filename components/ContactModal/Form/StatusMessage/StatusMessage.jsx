import React from 'react'
import styled from '@emotion/styled'
import { bool, func, string } from 'prop-types'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import getMessageTextOfStatus from '../../../../utils/client/getMessageTextOfStatus'
import Button from '../../../ui-kit/core-design/Button'
import styles from './StatusMessage.styles'

const StatusMessage = ({
  className,
  errorText,
  status,
  feedbackEmail,
  hasFailOrSuccessStatus,
  onClick,
  l10n: { translations },
}) => {
  const tabIndex = hasFailOrSuccessStatus ? '0' : '-1'
  const messageText = getMessageTextOfStatus({
    status,
    feedbackEmail,
    errorText,
    translations,
    tabIndex,
  })

  return (
    <div className={className}>
      {hasFailOrSuccessStatus && (
        <img
          src={require(`../../../../static/icons/button_${status}.svg`).default}
          alt="Submit status icon"
        />
      )}

      <p className="font_p16-regular status_text">{messageText}</p>

      <Button tabIndex={tabIndex} onClick={onClick}>
        {hasFailOrSuccessStatus && translations.common.form.message[status].action}
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

export default styled(L10nConsumer(StatusMessage))`
  ${styles}
`
