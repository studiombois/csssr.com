import { composeValidators, email, required } from '../../utils/validators/index'

export default (translations) => (values) => ({
  name: required(translations)(values.name),
  email: composeValidators(required(translations), email(translations))(values.email),
})
