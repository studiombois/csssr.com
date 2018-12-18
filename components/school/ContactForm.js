import React, { PureComponent } from 'react'
import css from 'styled-jsx/css'
import { Field } from 'react-final-form'
import { translate } from 'react-i18next'
import TextField from '../ui-kit/TextField'
import AnimatedButton from '../ui-kit/AnimatedButton'

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
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder={t('school:form.namePlaceholder')}
            label={t('school:form.nameLabel')}
          />
        </div>
        <div className='field'>
          <Field
            id='email'
            name='email'
            component={TextField}
            type='email'
            placeholder={t('school:form.emailPlaceholder')}
            label={t('school:form.emailLabel')}
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

        <div className='button'>
          <AnimatedButton
            type='submit'
            disabled={isSubmitButtonDisabled}
            status={this.state.formSubmitStatus}
            onAnimationEnd={this.handleStateClear}
          >
            {t('school:form.submitText')}
          </AnimatedButton>
        </div>

        <style jsx>{`
          form {
            position: relative;
            margin-right: auto;
            margin-left: auto;
            padding-top: 10.2rem;
            padding-bottom: 31.5rem;
            width: 1792px;
            align-items: center;
            border: none;
          }

          h2 {
            margin-bottom: 6rem;
            grid-column: 4 / span 6;
            text-align: center;
          }

          .field {
            grid-column: 4 / span 6;
            margin-bottom: 2.0625rem;
          }

          .field_type_textarea {
            position: relative;
            margin-top: 1.5rem;
            margin-bottom: 3.5rem;
          }

          .field_type_no-margin {
            margin: 0;
          }

          .button {
            margin-top: 1.3rem;
            grid-column: 6 / span 2;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              width: 1328px;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            form {
              width: 1232px;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            form {
              padding-top: 6.1875rem;
              padding-bottom: 31.5rem;
              background-position: 50% calc(100% - 8.45rem);
              width: 944px;
            }

            h2 {
              margin-bottom: 2.3125rem;
            }

            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.875rem;
            }

            .field_type_textarea {
              margin-bottom: 3.75rem;
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
              padding-bottom: 14rem;
              width: 20.5rem;
            }

            h2 {
              margin-bottom: 2.5rem;
            }

            h2,
            .field {
              grid-column: 1 / span 6;
            }

            .button {
              margin-top: 3.4375rem;
              grid-column: 2 / span 4;
            }

            .field_type_textarea {
              margin-bottom: 1.5rem;
            }

            .field_type_checkbox {
              margin-bottom: 21px;
            }
          }

        `}</style>
        {picture.styles}
      </form>
    )
  }
}

export default translate()(ContactForm)
