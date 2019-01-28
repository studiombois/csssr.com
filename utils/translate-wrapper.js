import React from 'react'
import { translate } from 'react-i18next'

// Detector'ы в react-i18next не учитывают languageOnly опцию
// и HOC translate может передать в компонент en-US в параметре lng.
// Перезаписываем параметр lng передавая в нём только язык.
export default (...translateArgs) => WrappedComponent => translate(...translateArgs)(props =>
  <WrappedComponent {...props} lng={props.i18n.languages[0]}/>
)
