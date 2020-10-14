import React from 'react'
import { array, object, string } from 'prop-types'
import { withRouter } from 'next/router'
import styled from '@emotion/styled'
import cn from 'classnames'
import styles from './Projects.styles'
import { L10nConsumer } from '../../../utils/l10nProvider'
import Grid from '../../ui-kit/core-design/Grid'
import Link from '../../ui-kit/core-design/Link'
import Heading from '../../ui-kit/core-design/Heading'
import ButtonLink from '../../ui-kit/core-design/ButtonLink'
import SubHeading from '../../ui-kit/core-design/SubHeading'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import ProjectsItem from '../ProjectsItem'

const Projects = ({
  className,
  id,
  router,
  content: { heading, projectsItems },
  l10n: { translations, language },
}) => (
  <>
    <section className={className} id={id} data-testid="Industry:block:projects">
      <Grid>
        <Heading.H2
          type="slab"
          size="m"
          dangerouslySetInnerHTML={{ __html: heading(translations) }}
          className="heading"
        />
      </Grid>
      <div className="content-wrapper">
        <Grid>
          {projectsItems.map(
            ({
              images,
              imgAlt,
              link,
              heading,
              text,
              teamNumber,
              projectDuration,
              className,
              id,
            }) => (
              <ProjectsItem
                heading={heading}
                text={text}
                teamNumber={teamNumber}
                projectDuration={projectDuration}
                link={link}
                images={images}
                imgAlt={imgAlt}
                itemClassName={className}
                key={text}
                id={id}
              />
            ),
          )}
          <div className="common-block">
            <SubHeading type="slab" className="common-text">
              {translations.industry.projects.description[0]}
              <Link
                className={cn('text-link', {
                  'text-link_active':
                    router.pathname === `/${language}/industry/information-technology`,
                })}
                href="information-technology"
                type="list"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.industry.projects.description[1] }}
                data-testid="Industry:link.inforamationTechnology"
              />
              ,{' '}
              <Link
                className={cn('text-link', {
                  'text-link_active':
                    router.pathname === `/${language}/industry/media-and-marketing`,
                })}
                href="media-and-marketing"
                type="list"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.industry.projects.description[2] }}
                data-testid="Industry:link.mediaAndMarketing"
              />
              ,{' '}
              <Link
                className={cn('text-link', {
                  'text-link_active': router.pathname === `/${language}/industry/fintech`,
                })}
                href="fintech"
                type="list"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.industry.projects.description[3] }}
                data-testid="Industry:link.fintech"
              />
              ,{' '}
              <Link
                className={cn('text-link', {
                  'text-link_active': router.pathname === `/${language}/industry/ecommerce`,
                })}
                href="ecommerce"
                type="list"
                size="m"
                dangerouslySetInnerHTML={{ __html: translations.industry.projects.description[4] }}
                data-testid="Industry:link.ecommerce"
              />
              {translations.industry.projects.description[5]}
            </SubHeading>
            <ButtonLink
              className="link"
              href={`/${language}/projects`}
              kind="primary"
              size="s"
              dangerouslySetInnerHTML={{ __html: translations.industry.projects.link }}
              data-testid="Industry:link.projects"
            />
          </div>
        </Grid>
      </div>
    </section>
  </>
)

Projects.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default withRouter(
  L10nConsumer(
    MsBrowserConsumer(styled(Projects)`
      ${styles}
    `),
  ),
)
