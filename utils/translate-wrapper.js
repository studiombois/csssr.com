import React from 'react'
import { translate } from 'react-i18next'
import { defaultLocale } from '../common/locales-settings'
import allNamespaces from '../common/all-namespaces'

const getDisplayName = (WrappedComponent) =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component'

export default (WrappedComponent) => {
  const TranslateWrapper = (props) => {
    const locale = props.i18n && props.i18n.languages ? props.i18n.languages[0] : defaultLocale
    const lng = props.i18n.services.languageUtils.getLanguagePartFromCode(locale)
    return <WrappedComponent {...props} locale={locale} lng={lng} />
  }
  TranslateWrapper.displayName = `Translate${getDisplayName(WrappedComponent)}`

  TranslateWrapper.getInitialProps = WrappedComponent.getInitialProps

  return translate(allNamespaces)(TranslateWrapper)
}
