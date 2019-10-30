import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import { string, arrayOf, bool, func } from 'prop-types'
import css from 'styled-jsx/css'
import { Field, FormSpy } from 'react-final-form'
import translate from '../utils/translate-wrapper'
import { equals } from 'ramda'
import Checkbox from './ui-kit/Checkbox'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
import AnimatedButton from './ui-kit/AnimatedButton'
import FormStateMessage from './ui-kit/FormStateMessage'
import PrivacyPolicyCheckbox from './PrivacyPolicyCheckbox'

const picture = css.resolve`
  picture {
    position: absolute;
    bottom: 10.75rem;
    left: 50%;
    z-index: -1;
    width: 340px;
    height: 220px;
    transform: translateX(-50%);
  }

  img {
    width: 100%;
  }

 @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: -6.5rem;
    }

    @media (max-width: 1023px) {
      picture {
        width: 21.25rem;
        height: 13.75rem;
      }
    }
  }

  @media (max-width: 767px) {
    picture {
      bottom: 3.75rem;
      width: 6.5rem;
      height: 4.25rem;
    }
  }
`

const fieldCss = css.resolve`
  .field {
    grid-column: 4 / span 6;
    -ms-grid-column: 7;
    -ms-grid-column-span: 11;
    margin-bottom: 2.0625rem;
  }

  .field:nth-of-type(1) {
    -ms-grid-row: 2; 
  }

  .field:nth-of-type(2) {
    -ms-grid-row: 3; 
  }

  .field:nth-of-type(3) {
    -ms-grid-row: 4; 
  }

  .field:nth-of-type(4) {
    -ms-grid-row: 5; 
  }

  .field:nth-of-type(5) {
    -ms-grid-row: 6; 
  }

  .field:nth-of-type(6) {
    -ms-grid-row: 7; 
  }


  .field_type_textarea {
    position: relative;
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;
  }

  .field_type_no-margin {
    margin: 0;
  }

  .field_type_checkbox {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1360px) and (max-width: 1919px) {
    .field_type_checkbox + .field_type_checkbox {
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    .field {
      grid-column: 4 / span 6;
      -ms-grid-column: 7;
      -ms-grid-column-span: 11; 
      margin-bottom: 2.0625rem;
    }



    .field_type_textarea {
      margin-bottom: 3.625rem;
    }

    .field_type_checkbox {
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 767px) {
    .field {
      grid-column: 1 / span 6;
      -ms-grid-column: 1;
      -ms-grid-column-span: 11;
    }

    .field_type_textarea {
      margin-top: 1.4375rem;
      margin-bottom: 1.6875rem;
    }

    .field_type_checkbox {
      margin-bottom: 1.1875rem;
    }
  }
`

class ContactForm extends PureComponent {
  messageRef = React.createRef()

  static proptypes = {
    imageName: string,
    formName: string,
    pageName: string,
    className: string,
    headerId: string,
    shouldScroll: bool,
    shouldShowStatusMessage: bool,
    onSubmitResolve: func,
    fields: arrayOf(string),
  }

  static defaultProps = {
    formName: 'contact',
    shouldScroll: true,
    shouldShowStatusMessage: true,
  }

  state = {
    // В final-form есть submitFailed и submitSucceeded,
    // но они учитывают только была ли засабмичена форма на фронте.
    // Мы показываем изображения только при отправке формы на сервер.
    submittedToServer: false,
  }

  handleScroll = () => {
    const messageNode = this.messageRef.current
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = messageNode.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top - 20

    if (this.context.isMsBrowser) {
      document.documentElement.scrollTop = offset
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  handleSubmit = e => {
    const {
      handleSubmit,
      onSubmitResolve,
      submitSucceeded,
      shouldScroll,
      form: { reset },
    } = this.props

    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = handleSubmit(e)

    if (submitResult) {
      this.setState({
        submittedToServer: true,
      })

      if (shouldScroll) {
        this.handleScroll()
      }

      return submitResult.then(() => {
        if (onSubmitResolve) {
          onSubmitResolve(this.getStatus())
        }

        if (submitSucceeded) {
          reset()
        }
      })
    }
  }

  handleAnyValuesChange = ({ values }) => {
    // При ресете форма реинициализируется с initialValues
    // или, если они не заданы, с пустым объектом.
    const { initialValues } = this.props
    const wasReset = initialValues === undefined ?
      equals(values, {}) :
      values === this.props.initialValues

    if (this.state.submittedToServer && !wasReset) {
      this.setState({
        submittedToServer: false,
      })
    }
  }

  handleTryToFillFormAgain = () => {
    this.setState({ submittedToServer: false })
  }

  getStatus = () => {
    const { submitting, submitFailed } = this.props
    // this.props.dirtySinceLastSubmit к сожалению не подходит,
    // потому что не отслеживает первое изменение после сабмита,
    // а сравнивает значения формы во время сабмита с текущими.
    // Поэтому dirtySinceLastSubmit false, когда форму поменяли и вернули значения как на момент сабмита.
    const { submittedToServer } = this.state

    if (submitting) {
      return 'submitting'
    }

    if (submittedToServer) {
      if (submitFailed) {
        return 'fail'
      }
      return 'success'
    }

    return 'pending'
  }

  renderField = fieldName => {
    const {
      className,
      pageName,
      fieldsIds,
      t,
    } = this.props

    const fieldByName = {
      name: <div className={cn('field', fieldCss.className, { [className]: !!className })}>
        <Field
          id={fieldsIds && fieldsIds.name || 'name'}
          name='name'
          component={TextField}
          type='text'
          placeholder={t(`${pageName}:form.namePlaceholder`)}
          label={t(`${pageName}:form.nameLabel`)}
        />
      </div>,
      phone: <div className={cn('field', fieldCss.className, { [className]: !!className })}>
        <Field
          id={fieldsIds && fieldsIds.phone || 'phone'}
          name='phone'
          component={TextField}
          type='text'
          placeholder={t(`${pageName}:form.phonePlaceholder`)}
          label={t(`${pageName}:form.phoneLabel`)}
        />
      </div>,
      email: <div className={cn('field', fieldCss.className, { [className]: !!className })}>
        <Field
          id={fieldsIds && fieldsIds.email || 'email'}
          name='email'
          component={TextField}
          type='email'
          placeholder={t(`${pageName}:form.emailPlaceholder`)}
          label={t(`${pageName}:form.emailLabel`)}
        />
      </div>,
      message: <div className={cn('field', 'field_type_textarea', fieldCss.className, { [className]: !!className })}>
        <Field
          id={fieldsIds && fieldsIds.message || 'message'}
          name='message'
          className={cn({ [className]: !!className })}
          component={TextareaField}
          placeholder={t(`${pageName}:form.messagePlaceholder`)}
          label={t(`${pageName}:form.messageLabel`)}
        />
      </div>,
      privacyPolicy: <div className={cn('field', 'field_type_checkbox', fieldCss.className, { [className]: !!className })}>
        <PrivacyPolicyCheckbox
          id={fieldsIds && fieldsIds.privacyPolicy || 'privacyPolicy'}
          name='privacyPolicy'
        />
      </div>,
      newsletter: <div className={cn('field', 'field_type_checkbox', fieldCss.className, { [className]: !!className })}>
        <Field
          id={fieldsIds && fieldsIds.newsletter || 'newsletter'}
          name='newsletter'
          type='checkbox'
          component={Checkbox}
        >
          {t('common:checkBoxesText.newsletterText')}
        </Field>
      </div>,
    }

    return <Fragment key={fieldName}>
      {fieldByName[fieldName]}
    </Fragment>
  }

  render() {
    const {
      pageName,
      formName,
      className,
      shouldShowStatusMessage,
      headerId,
      fields,
      feedbackEmail,
      submitError,
      t,
    } = this.props

    const status = this.props.status || this.getStatus()

    return (
      <form
        className={cn('grid-container', { [className]: !!className })}
        onSubmit={this.handleSubmit}
        name={formName}
        noValidate
      >
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }}/>

        <h2
          id={headerId}
          className={cn('font_h2-slab', { [className]: !!className })}
          dangerouslySetInnerHTML={{ __html: t(`${pageName}:form.title`) }}
        />

        {fields.map(this.renderField)}
        {this.renderField('privacyPolicy')}
        {this.renderField('newsletter')}

        <div className={cn('button', { [className]: !!className })} ref={this.messageRef}>
          <AnimatedButton
            type='submit'
            status={status}
          >
            {t(`${pageName}:form.submitText`)}
          </AnimatedButton>
        </div>

        {shouldShowStatusMessage &&
          <div className={cn('message', { [className]: !!className })}>
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail={feedbackEmail}
            />
          </div>
        }

        <style jsx>{`
          form {
            position: relative;
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            width: 1792px;
            align-items: center;
            border: none;
          }

          h2 {
            margin-bottom: 5.5rem;
            grid-column: 4 / span 6;
            text-align: center;
          }

          .button {
            margin-top: 2.5625rem;
            grid-column: 6 / span 2;
          }

          .message {
            grid-column: 4 / span 6;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            h2 {
              margin-bottom: 6rem;
            }

            form {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            h2 {
              margin-bottom: 6rem;
            }

            form {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            form {
              padding-top: 6.1875rem;
              background-position: 50% calc(100% - 8.45rem);
              width: 944px;
            }

            h2 {
              margin-bottom: 2.375rem;
            }

            .button {
              grid-column: 5 / span 4;
            }

            @media (max-width: 1023px) {
              form {
                width: 59rem;
              }
            }
          }

          @media (max-width: 767px) {
            form {
              padding-top: 3rem;
              width: 20.5rem;
            }

            h2 {
              margin-bottom: 2.5625rem;
              grid-column: 1 / span 6;
            }

            .button {
              margin-top: 3.4375rem;
              grid-column: 2 / span 4;
            }

            .message {
              grid-column: 1 / span 6;
            }

            .field_type_textarea {
              margin-top: 1.4375rem;
              margin-bottom: 1.6875rem;
            }

            .field_type_checkbox {
              margin-bottom: 1.1875rem;
            }
          }

        `}</style>
        {picture.styles}
        {fieldCss.styles}
        <style jsx>{`
          form {
            -ms-grid-rows: (auto)[9];
          }

          h2 {
            -ms-grid-column: 7;
            -ms-grid-column-span: 11;
            -ms-grid-row: 1;
          }

          .button {
            -ms-grid-column: 11;
            -ms-grid-column-span: 3;
            -ms-grid-row: 8;
          }

          .message {
            -ms-grid-column: 7;
            -ms-grid-column-span: 11;
            -ms-grid-row: 9;
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .button {
              -ms-grid-column: 9;
              -ms-grid-column-span: 7;
            }
          }

          @media (max-width: 767px) {
            h2 {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }

            .button {
              grid-column: 2 / span 4;
            }

            .message {
              -ms-grid-column: 1;
              -ms-grid-column-span: 11;
            }
          }

        `}</style>
      </form>
    )
  }
}

ContactForm.contextTypes = {
  isMsBrowser: bool,
}

export default translate()(ContactForm)
