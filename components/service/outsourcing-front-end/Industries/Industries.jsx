import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Industries.styles'
import IndustriesOrigin from '../../../main/Industries'

const Industries = ({ className }) => <IndustriesOrigin className={className} />

Industries.propTypes = {
  className: string,
}

export default styled(Industries)`
  ${styles}
`
