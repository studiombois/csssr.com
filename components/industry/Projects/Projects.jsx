import React from 'react'
import { string, object, array, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Projects.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ProjectsItem from '../ProjectsItem'

const Projects = ({ t, className, id, content: { heading, subHeading, projectsItems } }) => (
  <section className={className} id={id}>
    <Grid as="div">
      <Heading.H2
        type="slab"
        size="l"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />

      <SubHeading
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(subHeading) }}
        className="sub-heading"
      />
    </Grid>

    {projectsItems.map(
      ({ images, imgAlt, heading, text, numericData, direction, imgMaxWidth, className }) => (
        <ProjectsItem
          images={images}
          imgAlt={imgAlt}
          heading={heading}
          text={text}
          numericData={numericData}
          itemClassName={className}
          direction={direction}
          imgMaxWidth={imgMaxWidth}
          key={text}
        />
      ),
    )}
  </section>
)

Projects.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default styled(translate()(MsBrowserConsumer(Projects)))`
  ${styles}
`
