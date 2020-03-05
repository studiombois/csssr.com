import * as React from 'react'
import { node, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Wrapper.styles'

const OriginWrapper = ({ className, children, ...rest }) => (
  <div className={className} {...rest}>
    {children}
  </div>
)

const Wrapper = styled(OriginWrapper)`
  ${styles.base}
`

OriginWrapper.propTypes = {
  className: string,
  children: node,
}

export { Wrapper }
export default Wrapper
