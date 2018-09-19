import React, { PureComponent } from 'react'
import { Form as ReactFinalForm, Field } from 'react-final-form'
import FormTextField from './form-fields/FormTextField'
import Button from './ui-kit/Button'

const onSubmit = values => {
  console.log(values)
}

export default class Form extends PureComponent {
  static propTypes = {

  }

  renderForm = ({ handleSubmit, submitting, pristine }) => (
    <form className='grid-container' onSubmit={handleSubmit}>
      <div className='field'>
        <Field
          name='name'
          component={FormTextField}
          type='text'
          placeholder='Jhon Lenin'
          label='Your Name'
        />
      </div>
      <div className='field'>
        <Field
          name='phone'
          component={FormTextField}
          type='text'
          placeholder='+1-612-566-34-43'
          label='Phone'
        />
      </div>
      <div className='field'>
        <Field
          name='email'
          component={FormTextField}
          type='email'
          placeholder='lenin@gmail.com'
          label='E-mail'
        />
      </div>
      <div className='field field_type_textarea'>
        <Field
          tag='textarea'
          name='message'
          component={FormTextField}
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
          width: 1920px;
          align-items: center;
          grid-column: 4 / span 6;
          border: none;
        }
        .field {
          grid-column: 1 / span 6;
          margin-bottom: 4rem;
        }
        .field_type_textarea {
          margin-top: 7rem;
          margin-bottom: 8rem;
        }
        .button {
          grid-column: 3 / span 2;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          form {
            width: 1360px
          }
        }
  
        @media (max-width: 1359px) {
          form {
            width: 1280px
          }
        }
      `}</style>
    </form>
  )

  render() {
    return (
      <section className='grid-container'>
        <ReactFinalForm
          onSubmit={onSubmit}
          render={this.renderForm}
        />
        <style jsx>{`
          section {
            margin-right: auto;
            margin-left: auto;
            padding-left:  8rem;
            padding-right: 8rem;
            width: 1920px;
            align-items: center;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            section {
              padding-left:  2rem;
              padding-right: 2rem;
              width: 1360px
            }
          }
    
          @media (max-width: 1359px) {
            section {
              padding-left:  3rem;
              padding-right: 3rem;
              width: 1280px
            }
          }
        `}</style>
      </section>
    )
  }
}
