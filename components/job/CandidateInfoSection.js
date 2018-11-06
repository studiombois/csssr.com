import React, { Fragment } from 'react'
import { Field } from 'react-final-form'
import css from 'styled-jsx/css'
import ContactOptions from './ContactOptions'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'
import FileField from '../ui-kit/FileField'
import TextareaField from '../ui-kit/TextareaField'
import getFileFieldText from '../../utils/getFileFieldText'

const stylesForFullWidthField = css.resolve`
  div {
    margin-top: 2.5rem;
    grid-column: 2 / span 6;
  }
`

const stylesForFirstHalfWidthField = css.resolve`
  div {
    margin-top: 3.0625rem;
    grid-column: 2 / span 3;
  }
`

const stylesForSecondHalfWidthField = css.resolve`
  div {
    margin-top: 3.0625rem;
    grid-column: 5 / span 3;
  }
`

const stylesForTextareaField = css.resolve`
  div {
    margin-top: 2.0625rem;
    grid-column: 2 / span 6;
  }
`

const stylesForCheckboxField = css.resolve`
  span {
    margin-top: 3.4375rem;
    grid-column: 2 / span 6;
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
`

const CandidateInfoSection = props => {
  const { connection, vacancy, onFileFieldChange } = props
  const { hasComment, hasGithub, hasPortfolio, hasResume, hasFile, fileExt } = vacancy
  const commonFieldsData = [{
    id: 'firstname',
    className: `${stylesForFullWidthField.className} ${stylesForFirstHalfWidthField.className}`,
    label: 'Имя',
  }, {
    id: 'lastname',
    label: 'Фамилия',
    className: `${stylesForFullWidthField.className} ${stylesForSecondHalfWidthField.className}`,
  }, {
    id: 'age',
    label: 'Возраст',
  }, {
    id: 'location',
    label: 'Город',
  }, {
    id: 'email',
    label: 'E-mail',
    type: 'email',
  }, {
    id: 'resume',
    label: 'Ссылка на резюме',
    shouldShow: hasResume,
  }, {
    id: 'portfolio',
    label: 'Ссылка на портфолио',
    shouldShow: hasPortfolio,
  }, {
    id: 'github',
    label: 'Ссылка на github',
    shouldShow: hasGithub,
  }]

  return (
    <div className='grid-container'>
      <h2 className='font_h2-regular'>Расскажите о себе</h2>

      <ContactOptions connection={connection}/>

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
          className={`${stylesForFileField.className}`}
          label={`Тестовый квест ${getFileFieldText(fileExt)}`}
          fileAccept={fileExt}
          component={FileField}
          onFileFieldChange={onFileFieldChange}
        />
      }

      {hasComment &&
        <Fragment>
          <p className='font_p16-regular'>Хотите добавить что-то о себе?</p>
          <Field
            id='message'
            name='message'
            className={stylesForTextareaField.className}
            component={TextareaField}
            theme='regular'
          />
        </Fragment>
      }

      <Field
        id='privacyPolicyCheckbox'
        name='consents'
        className={stylesForCheckboxField.className}
        value='privacyPolicy'
        type='checkbox'
        component={Checkbox}
      >
        Я даю CSSSR своё согласие на обработку введённых мною персональных данных на условиях, изложенных политике конфиденциальности
      </Field>
      <style jsx>{`
        div {
          margin-top: 6.5rem;
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

        @media (min-width: 368px) and (max-width: 1279px) {
          div {
            width: 944px;
          }

          @media (max-width: 1023px) {
            div {
              width: 59rem;
            }
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
