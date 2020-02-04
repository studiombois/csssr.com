import ErrorPage from '../components/error/ErrorPage'
import React from 'react'
import withI18next from '../utils/withI18next'

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <ErrorPage {...this.props} />
  }
}

export default withI18next(['error'])(MyError)
