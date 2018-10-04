import React from 'react'
import Error from 'next/error'
import withI18next from '../utils/withI18next'

class MyError extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return <Error statusCode={this.props.statusCode} />
  }
}

export default withI18next()(MyError)
