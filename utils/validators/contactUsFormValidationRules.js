import { composeValidators, email, required } from './index'

export default (translations) => (values) => ({
  email: composeValidators(required(translations), email(translations))(values.email),
})
