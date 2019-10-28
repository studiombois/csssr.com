import React from 'react'
import { translate } from 'react-i18next'

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

export default (...translateArgs) => WrappedComponent => {
  const TranslateWraper = props => {
    const locale = props.i18n.languages[0]
    const lng = props.i18n.services.languageUtils.getLanguagePartFromCode(locale)
    return <WrappedComponent {...props} locale={locale.toLowerCase()} lng={lng} />
  }
  TranslateWraper.displayName = `Translate${getDisplayName(WrappedComponent)}`
  return translate(...translateArgs)(TranslateWraper)
}
