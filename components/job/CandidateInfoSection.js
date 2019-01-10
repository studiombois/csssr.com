import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import css from 'styled-jsx/css'
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
  const { connection, vacancy, onFileFieldChange } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [{
    id: 'firstname',
    className: `${stylesForFullWidthField.className} ${stylesForFirstHalfWidthField.className}`,
    label: 'Имя',
    errorShouldBeShown: true,
  }, {
    id: 'lastname',
    label: 'Фамилия',
    className: `${stylesForFullWidthField.className} ${stylesForSecondHalfWidthField.className}`,
    errorShouldBeShown: true,
  }, {
    id: 'age',
    label: 'Возраст',
    errorShouldBeShown: true,
  }, {
    id: 'location',
    label: 'Город',
    errorShouldBeShown: true,
  }, {
    id: 'email',
    label: 'E-mail',
    type: 'email',
    errorShouldBeShown: true,
  }, {
    id: 'resume',
    label: 'Ссылка на резюме',
    shouldShow: hasResume,
    errorShouldBeShown: true,
  }, {
    id: 'portfolio',
    label: 'Ссылка на портфолио',
    shouldShow: hasPortfolio,
    errorShouldBeShown: true,
  }, {
    id: 'github',
    label: 'Ссылка на github',
    shouldShow: hasGithub,
    errorShouldBeShown: true,
  }]

  return (
    <div className='grid-container'>
      <h2 className='font_h2-regular'>Расскажите о себе</h2>

      {!props.isMobile &&
        <ContactOptions connection={connection}/>
      }

      {commonFieldsData.map(({ id, label, className = stylesForFullWidthField.className, type = 'text', shouldShow = true, errorShouldBeShown = false }) =>
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
            errorShouldBeShown={errorShouldBeShown}
          />
          : null
      )}

      {hasFile &&
        <Field
          id='file'
          name='file'
          className={stylesForFileField.className}
          label={`Тестовый квест ${getFileFieldText(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
          errorShouldBeShown
        />
      }

      {props.isMobile &&
        <ContactOptionsMobile connection={connection} />
      }

      {hasComment &&
        <Fragment>
          <p className='font_p16-regular'>Хотите добавить что-то о себе?</p>
          <Field
            id='comment'
            name='comment'
            className={stylesForTextareaField.className}
            component={TextareaField}
            theme='regular'
            errorShouldBeShown
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

        @media (min-width: 768px) and (max-width: 1280px) {
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

export default CandidateInfoSection
