import React, { Fragment } from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Portfolio.styles'
import Grid from '../../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import translate from '../../../utils/translate-wrapper'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsListMobile from './ProjectsListMobile/ProjectsListMobile'

const Portfolio = ({ className, t, isMobile, portfolio }) => (
  <Grid as="article" id="portfolio" className={className}>
    <h2 className="font_h2-slab" dangerouslySetInnerHTML={{ __html: t('dev:portfolio.title') }} />
    <p
      className="font_subhead-regular"
      dangerouslySetInnerHTML={{ __html: t('dev:portfolio.text') }}
    />
    {isMobile ? (
      portfolio.map((projectGroup) => (
        <Fragment key={projectGroup.id}>
          <h3 dangerouslySetInnerHTML={{ __html: t(`dev:tabs.${projectGroup.id}`) }} />
          <div className="project-container">
            <ProjectsListMobile projects={projectGroup.projects} />
          </div>
        </Fragment>
      ))
    ) : (
      <ProjectsList portfolio={portfolio} />
    )}
  </Grid>
)

Portfolio.propTypes = {
  isMobile: bool,
  porfolio: arrayOf(
    shape({
      id: string,
      projects: arrayOf(
        shape({
          id: string,
          type: string,
          slides: arrayOf(number),
          href: string,
        }),
      ),
    }),
  ),
}

export default translate(
  MsBrowserConsumer(styled(Portfolio)`
    ${styles}
  `),
)
