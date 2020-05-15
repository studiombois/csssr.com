import { composeValidators, email, link, required } from './index'

export default (translations) => (values) => ({
  name: required(translations)(values.name),
  email: composeValidators(required(translations), email(translations))(values.email),
  design: composeValidators(required(translations), link(translations))(values.design),
})
