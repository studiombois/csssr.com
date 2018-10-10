import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
import AnimatedButton from './ui-kit/AnimatedButton'

export default class ContactForm extends PureComponent {
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
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    return (
      <form className='grid-container' onSubmit={this.handleSubmit}>
        <h2 id='hire-us' className='font_h2-slab headline'>Talk to us</h2>
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder='Timothy John Berners-Lee'
            label='Your Name'
          />
        </div>
        <div className='field'>
          <Field
            id='phone'
            name='phone'
            component={TextField}
            type='text'
            placeholder='+1-612-566-34-43'
            label='Phone'
          />
        </div>
        <div className='field'>
          <Field
            id='email'
            name='email'
            component={TextField}
            type='email'
            placeholder='name@example.com'
            label='E-mail'
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            id='message'
            name='message'
            component={TextareaField}
            placeholder='Tell us about your product or service'
            label='Tell us about your product or service'
          />
        </div>
        <div className='button'>
          <AnimatedButton
            type='submit'
            disabled={isSubmitButtonDisabled}
            status={this.state.formSubmitStatus}
            onAnimationEnd={this.handleStateClear}
          >
            Submit
          </AnimatedButton>
        </div><style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            padding-bottom: 31.5rem;
            width: 112rem;
            align-items: center;
            border: none;
            background-image: url('../../static/images/letter.jpg');
            background-size: auto 13.8125rem;
            background-position: 50% calc(100% - 11.2rem);
            background-repeat: no-repeat;
          }

          .headline {
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
            margin-bottom: 4rem;
          }

          .button {
            grid-column: 6 / span 2;
          }

          @media only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
            form {
              background-image: url('../../static/images/letter_retina.jpg');
            }
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              width: 83rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            form {
              width: 77rem;
            }
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            form {
              padding-top: 6.1875rem;
              /* padding-bottom: 34.25rem; */
              padding-bottom: 31.5rem;
              background-position: 50% calc(100% - 8.45rem);
              width: 59rem;
            }

            .headline {
              margin-bottom: 2.3125rem;
            }

            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.875rem;
            }

            .field_type_textarea {
              margin-bottom: 3.75rem;
            }
          }
        `}</style>
      </form>
    )
  }
}
