import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import css from 'styled-jsx/css'
import withI18next from '../../utils/withI18next'
import ContactOptions from './ContactOptions'
import ContactOptionsMobile from './ContactOptionsMobile'
import TextField from '../ui-kit/TextField'
import FileField from '../ui-kit/FileField'
import TextareaField from '../ui-kit/TextareaField'
import PrivacyPolicyCheckbox from '../PrivacyPolicyCheckbox'
import getFileFieldText from '../../utils/getFileFieldText'

const stylesForFullWidthField = css.resolve`
  div {
    margin-top: 2.5rem;
    grid-column: 2 / span 6;
  }

  @media (max-width: 767px) {
    div {
      grid-column: 1 / span 6;
    }
  }
`

const stylesForFirstHalfWidthField = css.resolve`
  div {
    margin-top: 3.0625rem;
    grid-column: 2 / span 3;
  }

  @media (max-width: 767px) {
    div {
      margin-top: 1.5rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForSecondHalfWidthField = css.resolve`
  div {
    margin-top: 3.0625rem;
    grid-column: 5 / span 3;
  }

  @media (max-width: 767px) {
    div {
      margin-top: 2.5625rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForTextareaField = css.resolve`
  div {
    margin-top: 2.0625rem;
    grid-column: 2 / span 6;
  }

  @media (max-width: 767px) {
    div {
      grid-column: 1 / span 6;
    }
  }
`

const stylesForCheckboxField = css.resolve`
  span {
    margin-top: 3.4375rem;
    grid-column: 2 / span 6;
  }

  @media (max-width: 767px) {
    span {
      margin-top: 4.125rem;
      grid-column: 1 / span 6;
    }
  }
`

const stylesForFileField = css.resolve`
  div {
    margin-top: 2.5rem;
    grid-column: 2 / span 4;
  }

  .button {
    margin-top: 3rem;
    grid-column: 6 / span 2;
  }

  @media (max-width: 767px) {
    div {
      grid-column: 1 / span 6;
    }

    .button {
      margin-top: 2rem;
      grid-column: 2 / span 4;
    }
  }
`

const CandidateInfoSection = props => {
  const { connection, vacancy, onFileFieldChange, t } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [{
    id: 'firstname',
    className: `${stylesForFullWidthField.className} ${stylesForFirstHalfWidthField.className}`,
    label: t('job:name'),
  }, {
    id: 'lastname',
    label: t('job:lastname'),
    className: `${stylesForFullWidthField.className} ${stylesForSecondHalfWidthField.className}`,
  }, {
    id: 'age',
    label: t('job:age'),
  }, {
    id: 'location',
    label: t('job:city'),
  }, {
    id: 'email',
    label: t('job:email'),
    type: 'email',
  }, {
    id: 'resume',
    label: t('job:resumeLink'),
    shouldShow: hasResume,
  }, {
    id: 'portfolio',
    label: t('job:resumePortfolio'),
    shouldShow: hasPortfolio,
  }, {
    id: 'github',
    label: t('job:resumeGithub'),
    shouldShow: hasGithub,
  }]

  return (
    <div className='grid-container'>
      <h2 className='font_h2-regular'>{t('job:tellAboutYourself')}</h2>

      {!props.isMobile &&
        <ContactOptions connection={connection}/>
      }

      {commonFieldsData.map(({ id, label, className = stylesForFullWidthField.className, type = 'text', shouldShow = true }) =>
        shouldShow
          ? <Field
            key={id}
            id={id}
            name={id}
            className={className}
            component={TextField}
            type={type}
            label={label}
            theme='regular'
          />
          : null
      )}

      {hasFile &&
        <Field
          id='file'
          name='file'
          className={stylesForFileField.className}
          label={`${t('job:testQuest')} ${getFileFieldText(t)(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
        />
      }

      {props.isMobile &&
        <ContactOptionsMobile connection={connection} />
      }

      {hasComment &&
        <Fragment>
          <Field
            id='comment'
            name='comment'
            label={t('job:tellUsMoreAboutYourself')}
            className={stylesForTextareaField.className}
            component={TextareaField}
            theme='regular'
          />
        </Fragment>
      }

      <PrivacyPolicyCheckbox className={stylesForCheckboxField.className} />

      <style jsx>{`
        div {
          margin-top: 6.9375rem;
          margin-right: auto;
          margin-left: auto;
          width: 1792px;
        }

        h2,
        p {
          grid-column: 2 / span 6;
        }

        p {
          margin-top: 2.9375rem;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          div {
            width: 1328px;
          }
        }

        @media (min-width: 1280px) and (max-width: 1359px) {
          div {
            width: 1232px;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          div {
            width: 944px;
          }

          @media (max-width: 1023px) {
            div {
              width: 59rem;
            }
          }
        }

        @media (max-width: 767px) {
          div {
            margin-top: 3.5625rem;
            width: 20.5rem;
          }

          h2,
          p {
            grid-column: 1 / span 6;
          }

          p {
            padding-bottom: 0;
            font-size: 0.875rem;
            line-height: 1.5rem;
          }
        }
      `}</style>
      {stylesForFullWidthField.styles}
      {stylesForFirstHalfWidthField.styles}
      {stylesForSecondHalfWidthField.styles}
      {stylesForTextareaField.styles}
      {stylesForCheckboxField.styles}
      {stylesForFileField.styles}
    </div>
  )
}

export default withI18next(['job'])(CandidateInfoSection)
