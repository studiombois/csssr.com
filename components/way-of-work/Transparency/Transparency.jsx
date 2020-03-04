import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'

import Highlight from './Highlight'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import translate from '../../../utils/translate-wrapper'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

import { list } from '../../../data/way-of-work/transparency'

import styles from './Transparency.styles'

const Transparency = ({ className, id, t }) => {
  return (
    <section className={className} id={id}>
      <Grid>
        <Heading.H1
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: t('wayOfWork:transparency.title') }}
          className="heading"
        />

        <ul className="list">
          {list.map(item => (
            <li key={item.id} className={`listItem ${item.id}Item`}>
              <SubHeading
                type="regular"
                dangerouslySetInnerHTML={{
                  __html: t(item.label),
                }}
              />
            </li>
          ))}
        </ul>

        <div className="figures">
          <Highlight />
        </div>
      </Grid>
    </section>
  )
}

Transparency.propTypes = {
  className: string,
  id: string,
}

export default translate()(
  MsBrowserConsumer(styled(Transparency)`
    ${styles}
  `),
)
