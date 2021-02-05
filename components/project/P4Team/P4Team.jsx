import React from 'react'
import { object, string } from 'prop-types'
import { PictureSmart } from '@csssr/csssr.images/dist/react'
import styled from '@emotion/styled'
import styles from './P4Team.styles'

import Grid from '../../ui-kit/core-design/Grid'
import Heading from '../../ui-kit/core-design/Heading'
import Text from '../../ui-kit/core-design/Text'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const P4Team = ({
  className,
  id,
  content: {
    heading,
    description,
    imagesEn,
    imagesRu,
    imgAlt,
    accountManagementTitle,
    projectManagementTitle,
  },
  l10n: { translations, language },
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
        <Text
          className="description"
          type="strong"
          as="span"
          dangerouslySetInnerHTML={{ __html: description(translations) }}
        />
      </div>

      <PictureSmart
        requireImages={language === 'ru' ? imagesRu : imagesEn}
        alt={imgAlt(translations)}
        className="image"
      />

      <Heading.H3
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: accountManagementTitle(translations) }}
        className="team-title team-title_account"
      />

      <div className="text-block text-block_account">
        {translations.project['gazpromNeft'].team.accountManagement.text.map((item, index) => (
          <Text
            key={index}
            className="team-text"
            type="strong"
            as="p"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>

      <Heading.H3
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: projectManagementTitle(translations) }}
        className="team-title team-title_project"
      />

      <div className="text-block text-block_project">
        {translations.project['gazpromNeft'].team.projectManagement.text.map((item, index) => (
          <Text
            key={index}
            className="team-text"
            type="strong"
            as="p"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </Grid>
  )
}

P4Team.propTypes = {
  className: string,
  id: string,
  content: object,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(P4Team)`
    ${styles}
  `),
)
