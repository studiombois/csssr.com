import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
import AnimatedButton from './ui-kit/AnimatedButton'

class ContactForm extends PureComponent {
  state = {
    formSubmitStatus: null,
  }

  componentWillReceiveProps({ submitting, submitFailed, submitSucceeded, dirtySinceLastSubmit }) {
    if (
      this.props.submitting !== submitting ||
      this.props.submitFailed !== submitFailed ||
      this.props.submitSucceeded !== submitSucceeded ||
      this.props.dirtySinceLastSubmit !== dirtySinceLastSubmit
    ) {
      if (submitting) {
        this.setState({ formSubmitStatus: 'submitting' })
      } else if (submitFailed && !dirtySinceLastSubmit) {
        this.setState({ formSubmitStatus: 'fail' })
      } else if (submitSucceeded) {
        this.setState({ formSubmitStatus: 'success' })
      } else {
        this.setState({ formSubmitStatus: null })
      }
    }
  }

  handleStateClear = () => {
    this.setState({ formSubmitStatus: null })
  }

  handleSubmit = e => {
    const { handleSubmit, form: { reset } } = this.props

    return handleSubmit(e).then(() => {
      if (!this.props.hasSubmitErrors) {
        reset()
      }
    })
  }

  render() {
    const {
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
      t,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    return (
      <form className='grid-container' onSubmit={this.handleSubmit}>
        <h2 id='hire-us' className='font_h2-slab headline' dangerouslySetInnerHTML={{ __html: t('dev:form.title') }} />
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder={t('dev:form.namePlaceholder')}
            label={t('dev:form.nameLabel')}
          />
        </div>
        <div className='field'>
          <Field
            id='phone'
            name='phone'
            component={TextField}
            type='text'
            placeholder={t('dev:form.phonePlaceholder')}
            label={t('dev:form.phoneLabel')}
          />
        </div>
        <div className='field'>
          <Field
            id='email'
            name='email'
            component={TextField}
            type='email'
            placeholder={t('dev:form.emailPlaceholder')}
            label={t('dev:form.emailLabel')}
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            id='message'
            name='message'
            component={TextareaField}
            placeholder={t('dev:form.messagePlaceholder')}
            label={t('dev:form.messageLabel')}
            labelHidden
          />
        </div>
        <div className='button'>
          <AnimatedButton
            type='submit'
            disabled={isSubmitButtonDisabled}
            status={this.state.formSubmitStatus}
            onAnimationEnd={this.handleStateClear}
          >
            {t('dev:form.submitText')}
          </AnimatedButton>
        </div><style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            padding-left: 3rem;
            padding-bottom: 31.5rem;
            padding-right: 3rem;
            width: 1888px;
            align-items: center;
            border: none;
            background-image: url('../../static/images/letter@1x.png');
            background-size: auto 221px;
            background-position: 50% calc(100% - 11.2rem);
            background-repeat: no-repeat;
          }

          :global(html.webp) form {
            background-image: url('../../static/images/letter@1x.webp');
          }

          .headline {
            margin-bottom: 89px;
            grid-column: 4 / span 6;
            text-align: center;
          }

          .field {
            grid-column: 4 / span 6;
            margin-bottom: 2rem;
          }

          .field_type_textarea {
            position: relative;
            margin-top: 1.425rem;
            margin-bottom: 4rem;
          }

          .button {
            grid-column: 6 / span 2;
          }

          @media
          only screen and (-webkit-min-device-pixel-ratio: 1.5),
          only screen and (min-device-pixel-ratio: 1.5),
          only screen and (min-resolution: 144dpi)  {
            form {
              background-image: url('../../static/images/letter@2x.png');
            }

            :global(html.webp) form {
              background-image: url('../../static/images/letter@2x.webp');
            }
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              width: 1344px
            }
          }

          @media (max-width: 1359px) {
            form {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              width: 1248px
            }
          }
        `}</style>
      </form>
    )
  }
}

export default translate()(ContactForm)
