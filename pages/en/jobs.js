import React from 'react'
import Router from 'next/router'

export default class Jobs extends React.PureComponent {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/ru/jobs',
      })
      res.end()
    } else {
      Router.push('/ru/jobs')
    }

    return {}
  }
}
