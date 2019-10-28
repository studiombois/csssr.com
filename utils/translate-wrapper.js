import React from 'react'
import { translate } from 'react-i18next'
import { defaultLocale } from '../common/locales-settings'

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component'

export default (...translateArgs) => WrappedComponent => {
  const TranslateWraper = props => {
    const locale = (props.i18n && props.i18n.languages) ? props.i18n.languages[0] : defaultLocale
    const lng = props.i18n.services.languageUtils.getLanguagePartFromCode(locale)
    return <WrappedComponent {...props} locale={locale} lng={lng} />
  }
  TranslateWraper.displayName = `Translate${getDisplayName(WrappedComponent)}`
  return translate(...translateArgs)(TranslateWraper)
}
