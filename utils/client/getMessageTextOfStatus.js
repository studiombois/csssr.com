import React, { Fragment } from 'react'
import { css } from '@emotion/core'

/* eslint-disable react/display-name */
export default ({ status, feedbackEmail, errorText, translations, tabIndex }) => {
  if (status === 'success') {
    return (
      <Fragment>
        {translations.common.form.message.success.intro}
        <br />
        {translations.common.form.message.success.body}
      </Fragment>
    )
  }

  return (
    <Fragment>
      {errorText}
      <br />

      <span>
        {translations.common.form.message.fail.body.textStart}
        {translations.common.form.message.fail.body.textForButton}
        {translations.common.form.message.fail.body.textBetweenButtonAndLink}
      </span>

      <a
        className="font_link-list_16"
        href={`mailto:${feedbackEmail}`}
        tabIndex={tabIndex}
        css={css`
          text-decoration: none;

          @media (max-width: 1279px) {
            font-size: 1rem;
            line-height: 1.5rem;
          }
        `}
      >
        {feedbackEmail}
      </a>
    </Fragment>
  )
}
/* eslint-enable react/display-name */
