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
        <h2 id='hire-us' className='font_h2-slab headline'>Talk to us</h2>
        <div className='field'>
          <Field
            id='name'
            name='name'
            component={TextField}
            type='text'
            placeholder='Jhon Lenin'
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
            placeholder='lenin@gmail.com'
            label='E-mail'
          />
        </div>
        <div className='field'>
          <Field
            id='telegram'
            name='telegram'
            component={TextField}
            type='text'
            placeholder='lenin'
            label='Telegram login'
          />
        </div>
        <div className='field field_type_textarea'>
          <Field
            id='message'
            name='message'
            component={TextareaField}
            placeholder='Tell something about you'
          />
        </div>
        <div className='button'>
          <Button type='submit' disabled={submitting || pristine}>
            Submit
          </Button>
        </div><style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 17rem;
            padding-left:  8rem;
            padding-right: 8rem;
            width: 1920px;
            align-items: center;
            border: none;
          }

          .headline {
            position: relative;
            margin-bottom: 10.625rem;
            grid-column: 4 / span 6;
            text-align: center;
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
