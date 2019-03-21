import React from 'react'
import { translate } from 'react-i18next'

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

// Detector'ы в react-i18next не учитывают languageOnly опцию
// и HOC translate может передать в компонент en-US в параметре lng.
// Перезаписываем параметр lng передавая в нём только язык.
export default (...translateArgs) => WrappedComponent => {
  const TranslateWraper = props => <WrappedComponent {...props} lng={props.i18n.languages[0]}/>
  TranslateWraper.displayName = `Translate${getDisplayName(WrappedComponent)}`
  return translate(...translateArgs)(TranslateWraper)
}
