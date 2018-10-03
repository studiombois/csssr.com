import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
// import Button from './ui-kit/Button'
import AnimatedButton from './ui-kit/AnimatedButton'

export default class ContactForm extends PureComponent {
  state = {
    formSubmitStatus: null,
  }

  componentWillReceiveProps({ submitting, submitFailed, submitSucceeded }) {
    if (submitting) {
      this.setState({ formSubmitStatus: 'submitting' })
    } else if (submitFailed) {
      this.setState({ formSubmitStatus: 'fail' })
    } else if (submitSucceeded) {
      this.setState({ formSubmitStatus: 'success' })
    }
  }

  handleStateClear = () => {
    this.setState({ formSubmitStatus: null })
  }

  render() {
    const { handleSubmit, form: { reset }, submitting, valid } = this.props

    return (
      <form className='grid-container' onSubmit={e => handleSubmit(e).then(reset)}>
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
            labelHidden
          />
        </div>
        <div className='button'>
          <AnimatedButton
            type='submit'
            disabled={submitting || !valid}
            status={this.state.formSubmitStatus}
            onAinimationEnd={this.handleStateClear}
          >
            Submit
          </AnimatedButton>
          {/* <Button type='submit' disabled={submitting || !valid}>
            Submit
          </Button> */}
        </div><style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            padding-left: 4rem;
            padding-bottom: 32rem;
            padding-right: 4rem;
            width: 1920px;
            align-items: center;
            border: none;
            background-image: url('../../static/images/letter.jpg');
            background-size: auto 221px;
            background-position: 50% calc(100% - 11.75rem);
            background-repeat: no-repeat;
          }

          .headline {
            margin-bottom: 5.5rem;
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

          @media only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi) {
            form {
              background-image: url('../../static/images/letter_retina.jpg');
            }
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              padding-left: 1rem;
              padding-right: 1rem;
              width: 1360px
            }
          }
      
          @media (max-width: 1359px) {
            form {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
              width: 1280px
            }
          }
        `}</style>
      </form>
    )
  }
}
