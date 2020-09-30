import React from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './Team.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Team = ({
  className,
  id,
  content: { heading, images, imgAlt, teamItems },
  l10n: { translations },
}) => {
  return (
    <Grid className={className} as="section" id={id}>
      <div className="team-breakdown">
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />

        <ul className="list">
          {teamItems.map(({ number, text }, index) => (
            <React.Fragment key={index}>
              <li className="list-item number-item" key={number}>
                <Text
                  type="strong"
                  as="span"
                  dangerouslySetInnerHTML={{ __html: number(translations) }}
                />
              </li>

              <li className="list-item text-item" key={text}>
                <Text
                  type="strong"
                  as="span"
                  dangerouslySetInnerHTML={{ __html: text(translations) }}
                />
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>

      <PictureSmart requireImages={images} alt={imgAlt(translations)} className="image" />
    </Grid>
  )
}

Team.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Team)`
    ${styles}
  `),
)
