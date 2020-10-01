import React from 'react'
import { object, string, number } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Case.styles'
import Text from '../../../ui-kit/core-design/Text'
import Heading from '../../../ui-kit/core-design/Heading'
import Link from '../../../ui-kit/core-design/Link'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import { MsBrowserConsumer } from '../../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../../utils/l10nProvider'
import { DeviceConsumer } from '../../../../utils/deviceProvider'

const Case = ({
  className,
  content: { linkClass, images, imgAlt, link, heading, text, tag, tagLink, team, duration },
  index,
  l10n: { translations },
}) => {
  const size = index === 0 || index === 3 || index === 4 ? 'small' : 'large'
  const side = (index + 1) % 2 ? 'left' : 'right'

  return (
    <Link className={`${className} ${size} ${side} ${linkClass}`} href={link} isNextLink>
      <div className="image-wrapper">
        <PictureSmart className="image" requireImages={images} alt={imgAlt(translations)} />
      </div>

      <Heading.H2
        type="regular"
        size="m"
        dangerouslySetInnerHTML={{ __html: heading(translations) }}
        className={`heading ${size}`}
      />

      <Text
        type="regular"
        size="s"
        dangerouslySetInnerHTML={{ __html: text(translations) }}
        className="text"
      />
      <div className="data-wrapper">
        <object>
          <Link
            dangerouslySetInnerHTML={{ __html: tag(translations) }}
            className="tag"
            href={tagLink}
            isNextLink
          />
        </object>

        <span className="separator">•</span>

        <Text
          type="regular"
          size="s"
          dangerouslySetInnerHTML={{ __html: team(translations) }}
          className="team"
        />

        <span className="separator">•</span>

        <Text
          type="regular"
          size="s"
          dangerouslySetInnerHTML={{ __html: duration(translations) }}
          className="duration"
        />
      </div>
    </Link>
  )
}

Case.propTypes = {
  className: string,
  content: object,
  index: number,
}

export default L10nConsumer(
  DeviceConsumer(
    MsBrowserConsumer(styled(Case)`
      ${styles}
    `),
  ),
)
