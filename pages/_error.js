import ErrorPage from '../components/error/ErrorPage'
import React from 'react'
import { L10nConsumer } from '../utils/l10nProvider'

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <ErrorPage {...this.props} />
  }
}

export default L10nConsumer(MyError)
