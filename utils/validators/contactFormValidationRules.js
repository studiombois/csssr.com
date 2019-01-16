import {
  composeValidators,
  email,
  required,
} from '../../utils/validators/index'

export default t => values => ({
  name: required(t)(values.name),
  email: composeValidators(required(t), email(t))(values.email),
  privacyPolicy: required(t)(values.privacyPolicy),
})
