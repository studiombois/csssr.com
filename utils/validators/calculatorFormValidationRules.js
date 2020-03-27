import { composeValidators, email, link, required } from './index'

export default (t) => (values) => ({
  name: required(t)(values.name),
  email: composeValidators(required(t), email(t))(values.email),
  design: composeValidators(required(t), link(t))(values.design),
})
