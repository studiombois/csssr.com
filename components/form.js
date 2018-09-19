import React, { PureComponent } from 'react'
import { Form as ReactFinalForm } from 'react-final-form'
import ContactForm from './ContactForm'


const onSubmit = values => {
  console.log(values)
}

export default class Form extends PureComponent {
  static propTypes = {

  }

  renderForm = props => <ContactForm {...props} />

  render() {
    return (
      <ReactFinalForm
        onSubmit={onSubmit}
        render={this.renderForm}
      />
    )
  }
}
