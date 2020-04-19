import React, { Fragment, PureComponent } from 'react'
import { arrayOf, bool, func, string } from 'prop-types'
import cn from 'classnames'
import styled from '@emotion/styled'
import { Field, FormSpy } from 'react-final-form'
import styles from './ContactForm.styles'
import translate from '../../utils/translate-wrapper'
import { equals } from 'ramda'
import Grid from '../ui-kit/core-design/Grid'
import SubHeading from '../ui-kit/core-design/SubHeading'
import Checkbox from '../ui-kit/Checkbox'
import TextField from '../ui-kit/TextField'
import TextareaField from '../ui-kit/TextareaField'
import AnimatedButton from '../ui-kit/core-design/AnimatedButton'
import Text from '../ui-kit/core-design/Text'
import FormStateMessage from '../ui-kit/FormStateMessage'
import PrivacyPolicyCheckbox from '../PrivacyPolicyCheckbox'
import { MsBrowserConsumer } from '../../utils/msBrowserProvider'

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
    shouldShowSubHeading: false,
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

    if (this.props.isIe11) {
      document.documentElement.scrollTop = offset
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  handleSubmit = (e) => {
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
    const wasReset =
      initialValues === undefined ? equals(values, {}) : values === this.props.initialValues

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

  renderField = (fieldName) => {
    const { pageName, fieldsIds, formName, hasFailOrSuccessStatus, t } = this.props

    const getTabIndex = `${hasFailOrSuccessStatus ? '-1' : '0'}`

    const fieldByName = {
      name: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.name) || 'name'}
            name="name"
            component={TextField}
            type="text"
            placeholder={t(`${pageName}:form.namePlaceholder`)}
            label={t(`${pageName}:form.nameLabel`)}
            testid={`${formName}:field:callbackForm.name`}
            autoFocus={formName === 'contact-modal'}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      phone: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.phone) || 'phone'}
            name="phone"
            component={TextField}
            type="text"
            placeholder={t(`${pageName}:form.phonePlaceholder`)}
            label={t(`${pageName}:form.phoneLabel`)}
            testid={`${formName}:field:callbackForm.phone`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      email: (
        <div className="field">
          <Field
            id={(fieldsIds && fieldsIds.email) || 'email'}
            name="email"
            component={TextField}
            type="email"
            placeholder={t(`${pageName}:form.emailPlaceholder`)}
            label={t(`${pageName}:form.emailLabel`)}
            testid={`${formName}:field:callbackForm.email`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      message: (
        <div className={cn('field', 'field_type_textarea')}>
          <Field
            id={(fieldsIds && fieldsIds.message) || 'message'}
            name="message"
            component={TextareaField}
            placeholder={t(`${pageName}:form.messagePlaceholder`)}
            label={t(`${pageName}:form.messageLabel`)}
            testid={`${formName}:field:callbackForm.message`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      privacyPolicy: (
        <div className={cn('field', 'field_type_checkbox')}>
          <PrivacyPolicyCheckbox
            id={(fieldsIds && fieldsIds.privacyPolicy) || 'privacyPolicy'}
            name="privacyPolicy"
            testid={`${formName}:field:callbackForm.privacyPolicy.checkbox`}
            linkTestId={`${formName}:link:callbackForm.privacyPolicy`}
            tabIndex={getTabIndex}
          />
        </div>
      ),
      newsletter: (
        <div className={cn('field', 'field_type_checkbox')}>
          <Field
            id={(fieldsIds && fieldsIds.newsletter) || 'newsletter'}
            name="newsletter"
            type="checkbox"
            component={Checkbox}
            testid={`${formName}:field:callbackForm.newsletter.checkbox`}
            tabIndex={getTabIndex}
          >
            {t('common:checkBoxesText.newsletterText')}
          </Field>
        </div>
      ),
    }

    return <Fragment key={fieldName}>{fieldByName[fieldName]}</Fragment>
  }

  render() {
    const {
      pageName,
      formName,
      className,
      shouldShowSubHeading,
      shouldShowStatusMessage,
      headerId,
      fields,
      feedbackEmail,
      submitError,
      t,
    } = this.props

    const status = this.props.status || this.getStatus()

    return (
      <Grid as="form" className={className} onSubmit={this.handleSubmit} name={formName} noValidate>
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }} />

        <h2
          id={headerId}
          className="font_h2-slab"
          dangerouslySetInnerHTML={{ __html: t(`${pageName}:form.title`) }}
        />

        {shouldShowSubHeading && (
          <SubHeading
            type="slab"
            dangerouslySetInnerHTML={{ __html: t(`${pageName}:form.subTitle`) }}
            className="sub-heading"
          />
        )}

        {fields.map(this.renderField)}
        {this.renderField('privacyPolicy')}
        {this.renderField('newsletter')}

        <div className="button" ref={this.messageRef}>
          <AnimatedButton
            type="submit"
            status={status}
            testid={`${formName}:button.callbackForm.submit`}
          >
            <Text type="perforator" size="m" className="button-content" as="span">
              {t(`${pageName}:form.submitText`)}
            </Text>
          </AnimatedButton>
        </div>

        {shouldShowStatusMessage && (
          <div className="message">
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail={feedbackEmail}
              testid={`${formName}:text.successMessage`}
              successPictureTestid={`${formName}:picture.successMessageImg`}
            />
          </div>
        )}
      </Grid>
    )
  }
}

export default translate(
  MsBrowserConsumer(styled(ContactForm)`
    ${styles}
  `),
)
