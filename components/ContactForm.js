import React, { PureComponent } from 'react'
import { Field } from 'react-final-form'
import TextField from './ui-kit/TextField'
import TextareaField from './ui-kit/TextareaField'
import Button from './ui-kit/Button'


export default class ContactForm extends PureComponent {
  render() {
    const { handleSubmit, submitting, pristine } = this.props

    return (
      <form className='grid-container' onSubmit={handleSubmit}>
        <div className='field'>
          <Field
            name='name'
            component={TextField}
            type='text'
            placeholder='Jhon Lenin'
            label='Your Name'
          />
        </div>
        <div className='field'>
          <Field
            name='phone'
            component={TextField}
            type='text'
            placeholder='+1-612-566-34-43'
            label='Phone'
          />
        </div>
        <div className='field'>
          <Field
            name='email'
            component={TextField}
            type='email'
            placeholder='lenin@gmail.com'
            label='E-mail'
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            name='message'
            component={TextareaField}
            placeholder='Message'
          />
        </div>
        <div className='button'>
          <Button type='submit' disabled={submitting || pristine}>
            Submit
          </Button>
        </div>
        <style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-left:  8rem;
            padding-right: 8rem;
            width: 1920px;
            align-items: center;
            border: none;
          }

          .field {
            grid-column: 4 / span 6;
            margin-bottom: 4rem;
          }

          .field_type_textarea {
            margin-top: 7rem;
            margin-bottom: 8rem;
          }

          .button {
            grid-column: 6 / span 2;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            form {
              padding-left: 2rem;
              padding-right: 2rem;
              width: 1360px
            }
          }
      
          @media (max-width: 1359px) {
            form {
              padding-left: 3rem;
              padding-right: 3rem;
              width: 1280px
            }
          }
        `}</style>
      </form>
    )
  }
}
