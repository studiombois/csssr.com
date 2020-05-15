import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Projects.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ProjectsItem from '../ProjectsItem'

const Projects = ({
  className,
  id,
  content: { heading, projectsItems },
  l10n: { translations },
}) => (
  <section className={className} id={id}>
    <Grid>
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className="heading"
      />
    </Grid>

    {projectsItems.map(
      ({ images, imgAlt, heading, text, numericData, button, direction, className }) => (
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
      ),
    )}
  </section>
)

Projects.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Projects)`
    ${styles}
  `),
)
