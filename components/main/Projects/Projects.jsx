import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import cn from 'classnames'
import LazyLoad from 'react-lazyload'
import styles from './Projects.styles'
import Heading from '../../ui-kit/core-design/Heading'
import Grid from '../../ui-kit/core-design/Grid'
import Post from './Post'
import Card from '../Card'
import posts from '../../../data/main/posts'

import projects from '../../../data/main/projects'

import { L10nConsumer } from '../../../utils/l10nProvider'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'

const Projects = ({ className, l10n: { translations, language } }) => {
  return (
    <Grid as="article" className={cn('about-us', className)} data-testid="Home:block.projects">
      <Heading
        className="title"
        as="h2"
        dangerouslySetInnerHTML={{ __html: translations.main.projects.title }}
        type="slab"
        size="m"
      />

      {projects.map(({ id, title, description, href, images, imagesHovered, fallback }) => {
        const Player = () => (
          <LazyLoad>
            <div className="player-wrapper">
              <iframe
                className="player"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/420446082&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false&download=false&sharing=false&buying=false"
              />
            </div>
          </LazyLoad>
        )

        if (language !== 'ru' && id === 'radio') {
          return
        }

        return (
          <Card
            testId={`Projects:${id === 'radio' ? 'block' : 'link'}.${id}`}
            className={cn('card', `card_${id}`)}
            key={id}
            id={id}
            title={title}
            description={description}
            href={href}
            images={images}
            imagesHovered={imagesHovered}
            fallback={fallback}
            isLink
          >
            {id === 'radio' ? <Player /> : null}
          </Card>
        )
      })}

      <ul className="posts">
        {posts[language].map(({ id, href }) => (
          <Post key={id} id={id} href={href} />
        ))}
      </ul>
    </Grid>
  )
}

Projects.propTypes = {
  className: string,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Projects)`
    ${styles}
  `),
)
