import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Cases.styles'

import Projects from '../../industry/Projects'
import { informationTechnologyProjects } from '../../../data/industry/projects'

const Cases = ({ className }) => (
  <Projects className={className} content={informationTechnologyProjects} />
)

Cases.propTypes = {
  className: string,
}

export default styled(Cases)`
  ${styles}
`
