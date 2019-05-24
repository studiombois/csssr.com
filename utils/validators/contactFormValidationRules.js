import {
  composeValidators,
  email,
  required,
} from '../../utils/validators/index'

// теперь у нас две одинаковые формы на одной странице и
// если у них будут одинаековые названия полей, то валидатор
// и фокус по полям с ошибками будут коряво работать поэтому
// теперь прокидывается дополнительно fieldsIds
export default (t, fieldsByNames = { name: 'name', phone: 'phone', privacyPolicy: 'privacyPolicy' }) => values => ({
  [fieldsByNames.name]: required(t)(values.name),
  [fieldsByNames.phone]: composeValidators(required(t), email(t))(values.email),
  [fieldsByNames.privacyPolicy]: required(t)(values.privacyPolicy),
})
