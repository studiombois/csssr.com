import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles, {
  stylesForCheckboxField,
  stylesForFileField,
  stylesForFirstHalfWidthField,
  stylesForFullWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
} from './CandidateInfoSection.styles'
import { css } from '@emotion/core'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ContactOptions from '../ContactOptions'
import ContactOptionsMobile from '../ContactOptionsMobile'
import TextField from '../../ui-kit/TextField/TextField'
import FileField from '../../ui-kit/FileField/FileField'
import TextareaField from '../../ui-kit/TextareaField/TextareaField'
import PrivacyPolicyCheckbox from '../../PrivacyPolicyCheckbox'
import getFileFieldText from '../../../utils/getFileFieldText'
import Grid from '../../ui-kit/core-design/Grid'

const CandidateInfoSection = (props) => {
  const { className, connection, vacancy, onFileFieldChange, t } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [
    {
      id: 'firstname',
      required: true,
      label: t('job:name'),
      css: css`
        ${stylesForFullWidthField}
        ${stylesForFirstHalfWidthField}
      `,
    },
    {
      id: 'lastname',
      required: true,
      label: t('job:lastname'),
      css: css`
        ${stylesForFullWidthField}
        ${stylesForSecondHalfWidthField}
      `,
    },
    {
      id: 'age',
      label: t('job:age'),
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'location',
      required: true,
      label: t('job:city'),
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'email',
      required: true,
      label: t('job:email'),
      type: 'email',
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'resume',
      required: true,
      label: t('job:resumeLink'),
      shouldShow: hasResume,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'portfolio',
      required: true,
      label: t('job:resumePortfolio'),
      shouldShow: hasPortfolio,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'github',
      label: t('job:resumeGithub'),
      shouldShow: hasGithub,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
  ]

  return (
    <Grid className={className}>
      <h2 className="font_h2-regular">{t('job:tellAboutYourself')}</h2>

      {!props.isMobile && <ContactOptions connection={connection} />}

      {commonFieldsData.map(({ id, label, css, type = 'text', shouldShow = true, required }) =>
        shouldShow ? (
          <Field
            key={id}
            id={id}
            name={id}
            className={`input-${id}`}
            css={css}
            component={TextField}
            type={type}
            label={label}
            kind="regular"
            aria-required={required}
            required={required}
          />
        ) : null,
      )}

      {hasFile && (
        <Field
          id="file"
          name="file"
          className="seventh-line"
          css={css`
            ${stylesForFileField}
          `}
          label={`${t('job:testQuest')} ${getFileFieldText(t)(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
          aria-required={true}
          required
        />
      )}

      {props.isMobile && <ContactOptionsMobile connection={connection} />}

      {hasComment && (
        <Fragment>
          <Field
            id="comment"
            name="comment"
            label={t('job:tellUsMoreAboutYourself')}
            className="line-nine"
            css={css`
              ${stylesForTextareaField}
            `}
            component={TextareaField}
            kind="regular"
          />
        </Fragment>
      )}

      <PrivacyPolicyCheckbox
        className="input-checkbox"
        required
        css={css`
          ${stylesForCheckboxField}
        `}
      />
    </Grid>
  )
}

export default translate(
  MsBrowserConsumer(styled(CandidateInfoSection)`
    ${styles}
  `),
)
