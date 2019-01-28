import translate from '../utils/translate-wrapper'
import i18n from '../common/i18n'

export default namespaces => ComposedComponent => {
  const namespacesWithCommon = ['common'].concat(namespaces)

  const Extended = translate(namespacesWithCommon, { wait: process.browser })(
    ComposedComponent
  )

  Extended.getInitialProps = async ctx => {
    const composedInitialProps = ComposedComponent.getInitialProps
      ? await ComposedComponent.getInitialProps(ctx)
      : {}

    const i18nInitialProps = ctx.req
      ? i18n.getInitialProps(ctx.req, namespacesWithCommon)
      : {}

    return {
      ...composedInitialProps,
      ...i18nInitialProps,
    }
  }

  return Extended
}
