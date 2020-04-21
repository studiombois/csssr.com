import React from 'react'
import { string, object, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './TechStack.styles'
import translate from '../../../utils/translate-wrapper'
import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const TechStack = ({
  t,
  className,
  id,
  content: {
    heading,
    techList,
    numericData: { duration, projectTeam },
  },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <Heading.H2
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t(heading) }}
        className="heading"
      />

      <ul className="tech-list">
        {techList.map(({ name }) => (
          <li className="tech-item" key={name}>
            <Text type="strong" size="m" as="span" dangerouslySetInnerHTML={{ __html: t(name) }} />
          </li>
        ))}
      </ul>

      <div className="duration">
        <Text
          className="number duration-number"
          type="strong"
          as="span"
          dangerouslySetInnerHTML={{ __html: t(duration.number) }}
        />

        <Text
          className="text"
          type="strong"
          size="m"
          as="span"
          dangerouslySetInnerHTML={{ __html: t(duration.text) }}
        />
      </div>

      <div className="team">
        <Text
          className="number team-number"
          type="strong"
          as="span"
          dangerouslySetInnerHTML={{ __html: t(projectTeam.number) }}
        />

        <Text
          className="text"
          type="strong"
          size="m"
          as="span"
          dangerouslySetInnerHTML={{ __html: t(projectTeam.text) }}
        />
      </div>
    </Grid>
  )
}

TechStack.propTypes = {
  t: func,
  className: string,
  id: string,
  content: object,
}

export default translate(
  MsBrowserConsumer(styled(TechStack)`
    ${styles}
  `),
)
