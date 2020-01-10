import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import styled from '@emotion/styled'
import styles, {
  stylesForFullWidthField,
  stylesForFirstHalfWidthField,
  stylesForSecondHalfWidthField,
  stylesForTextareaField,
  stylesForCheckboxField,
  stylesForFileField,
} from './CandidateInfoSection.styles'
import { css } from '@emotion/core'
import withI18next from '../../../utils/withI18next'
import ContactOptions from '../ContactOptions'
import ContactOptionsMobile from '../ContactOptionsMobile'
import TextField from '../../ui-kit/TextField/TextField'
import FileField from '../../ui-kit/FileField/FileField'
import TextareaField from '../../ui-kit/TextareaField/TextareaField'
import PrivacyPolicyCheckbox from '../../PrivacyPolicyCheckbox'
import getFileFieldText from '../../../utils/getFileFieldText'
import Grid from '../../ui-kit/core-design/Grid'

const CandidateInfoSection = props => {
  const { className, connection, vacancy, onFileFieldChange, t } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [
    {
      id: 'firstname',
      label: t('job:name'),
      css: css`
        ${stylesForFullWidthField}
        ${stylesForFirstHalfWidthField}
      `,
    },
    {
      id: 'lastname',
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
      label: t('job:city'),
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'email',
      label: t('job:email'),
      type: 'email',
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'resume',
      label: t('job:resumeLink'),
      shouldShow: hasResume,
      css: css`
        ${stylesForFullWidthField}
      `,
    },
    {
      id: 'portfolio',
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

      {commonFieldsData.map(({ id, label, css, type = 'text', shouldShow = true }) =>
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
        />
      )}

      {props.isMobile && <ContactOptionsMobile connection={connection} />}

      {hasComment && (
        <Fragment>
          <Field
            id="comment"
            name="comment"
            label={t('job:tellUsMoreAboutYourself')}
            className="seventh-line"
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
        css={css`
          ${stylesForCheckboxField}
        `}
      />
    </Grid>
  )
}

export default styled(withI18next(['job'])(CandidateInfoSection))`
  ${styles}
`
