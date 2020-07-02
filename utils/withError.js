import React from 'react'
import { number } from 'prop-types'
import ErrorPage from '../pages/_error'
import Error404Page from '../pages/404'

export default (Component) => {
  class Extended extends React.Component {
    static async getInitialProps(ctx) {
      const props = await Component.getInitialProps(ctx)
      const { statusCode } = ctx.res || {}
      return { statusCode, ...props }
    }

    render() {
      const { statusCode } = this.props
      if (statusCode && statusCode !== 200) {
        if (statusCode === 404) {
          return <Error404Page />
        }
        return <ErrorPage statusCode={statusCode} />
      }
      return <Component {...this.props} />
    }
  }

  Extended.propTypes = {
    statusCode: number,
  }

  return Extended
}
