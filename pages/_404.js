import Error404Page from '../components/error/Error404Page'
import React from 'react'
import translate from '../utils/translate-wrapper'

class Custom404 extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return <Error404Page {...this.props} />
  }
}

export default translate(Custom404)
