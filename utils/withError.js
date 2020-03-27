import React from 'react'
import { number } from 'prop-types'
import ErrorPage from '../pages/_error'

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
