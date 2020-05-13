import React from 'react'
import styled from '@emotion/styled'

import styles from './FloatButton.styles'

const FloatButton = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <div className="img">
        <img
          alt="icon"
          srcSet={`${require('../../../static/covid-19/float-button.png')} 1x, ${require('../../../static/covid-19/float-button@2x.png')} 2x, ${require('../../../static/covid-19/float-button@3x.png')} 3x`}
          src={require('../../../static/covid-19/float-button.png')}
        />
      </div>
      <div className="wrapper">
        <p className="text-top">Feel free to drop us a line</p>
        <p className="text-bottom">emergency@csssr.com</p>
      </div>
    </div>
  )
}

export default styled(FloatButton)`
  ${styles}
`
