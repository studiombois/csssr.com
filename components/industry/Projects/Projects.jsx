import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Projects.styles'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Projects = ({ heading, subHeading }) => (
  <>
    <Heading.H2
      type="slab"
      size="m"
      dangerouslySetInnerHTML={{ __html: heading }}
      className="heading"
    />

    <SubHeading
      type="slab"
      dangerouslySetInnerHTML={{ __html: subHeading }}
      className="sub-heading"
    />
  </>
)

Projects.propTypes = {
  heading: string,
  subHeading: string,
}

export default styled(MsBrowserConsumer(Projects))`
  ${styles}
`
