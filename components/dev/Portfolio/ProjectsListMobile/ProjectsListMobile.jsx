import React, { Fragment } from 'react'
import { arrayOf, number, string, shape } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import styles from './ProjectsListMobile.styles'
import Grid from '../../../ui-kit/core-design/Grid'
import translate from '../../../../utils/translate-wrapper'

// 5 колоной занимает каждый айтем
const ProjectsListMobile = ({ className, t, projects }) => {
  const renderProject = (project, index) => (
    <Fragment key={project.id}>
      <li
        css={css`
          grid-column: ${index * 5 + 1} / span 5;
        `}
      >
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener nofollow">
            <img
              src={require(`../../../../static/images/dev/portfolio/${project.id}_1.jpg`)}
              alt={`${t('dev:portfolio.slidesAlt')}${t(
                `dev:portfolio.projects.${project.id}.title`,
              )}`}
            />
          </a>
        ) : (
          <img
            src={require(`../../../../static/images/dev/portfolio/${project.id}_1.jpg`)}
            alt={`${t('dev:portfolio.slidesAlt')}${t(
              `dev:portfolio.projects.${project.id}.title`,
            )}`}
          />
        )}

        <h4
          className="font_subhead-regular"
          dangerouslySetInnerHTML={{
            __html: t(`dev:portfolio.projects.${project.id}.title`),
          }}
        />
        <p
          className="font_p16-regular"
          dangerouslySetInnerHTML={{
            __html: t(`dev:portfolio.projects.${project.id}.text`),
          }}
        />
      </li>
    </Fragment>
  )

  return (
    <Fragment>
      <Grid as="ul" className={className}>
        {projects.map(renderProject)}
      </Grid>
    </Fragment>
  )
}

ProjectsListMobile.propTypes = {
  id: string,
  projects: arrayOf(
    shape({
      id: string,
      type: string,
      slides: arrayOf(number),
      href: string,
    }),
  ),
}

export default styled(translate()(ProjectsListMobile))`
  ${styles}
`
