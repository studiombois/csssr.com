import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Post.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Link from '../../../ui-kit/core-design/Link'

import { L10nConsumer } from '../../../../utils/l10nProvider'

const Post = ({ className, id, href, l10n: { translations } }) => {
  return (
    <li as="article" className={cn('post', className)}>
      <Heading
        className="post-title"
        as="h3"
        dangerouslySetInnerHTML={{ __html: translations.main.projects.blog[id].title }}
        type="regular"
        size="l"
      />

      <Text
        className="post-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: translations.main.projects.blog[id].description }}
        type="regular"
        size="m"
      />

      <Link
        className="post-link"
        href={href}
        type="list"
        target="_blank"
        size="s"
        dangerouslySetInnerHTML={{ __html: translations.main.projects.blog[id].link }}
        testId={`Post:${id}.link`}
      />
    </li>
  )
}

Post.propTypes = {
  className: string,
}

export default styled(L10nConsumer(Post))`
  ${styles}
`
