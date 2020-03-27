import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Post.styles'

import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import Link from '../../../ui-kit/core-design/Link'

import translate from '../../../../utils/translate-wrapper'

const Post = ({ className, id, href, t }) => {
  return (
    <li as="article" className={cn('post', className)}>
      <Heading
        className="post-title"
        as="h3"
        dangerouslySetInnerHTML={{ __html: t(`main:projects.blog.${id}.title`) }}
        type="regular"
        size="l"
      />

      <Text
        className="post-description"
        as="p"
        dangerouslySetInnerHTML={{ __html: t(`main:projects.blog.${id}.description`) }}
        type="regular"
        size="m"
      />

      <Link
        className="post-link"
        href={href}
        target="_blank"
        type="list"
        size="s"
        dangerouslySetInnerHTML={{ __html: t(`main:projects.blog.${id}.link`) }}
      />
    </li>
  )
}

Post.propTypes = {
  className: string,
  t: func,
}

export default styled(translate(Post))`
  ${styles}
`
