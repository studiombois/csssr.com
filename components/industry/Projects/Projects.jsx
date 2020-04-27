import React from 'react'
import { array, func, object, string } from 'prop-types'
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
    <Grid>
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />

      <SubHeading
        type="slab"
        dangerouslySetInnerHTML={{ __html: t(subHeading) }}
        className="sub-heading"
      />
    </Grid>

    {projectsItems.map(({ images, imgAlt, heading, text, numericData, button, direction, className }) => (
      <ProjectsItem
        images={images}
        imgAlt={imgAlt}
        heading={heading}
        text={text}
        numericData={numericData}
        button={button}
        itemClassName={className}
        direction={direction}
        key={text}
      />
    ))}
  </section>
)

Projects.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default translate(
  MsBrowserConsumer(styled(Projects)`
    ${styles}
  `),
)
