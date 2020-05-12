import React, { Fragment } from 'react'
import { arrayOf, bool, number, shape, string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Portfolio.styles'
import Grid from '../../ui-kit/core-design/Grid'
import { MsBrowserConsumer } from '../../../utils/msBrowserProvider'
import { L10nConsumer } from '../../../utils/l10nProvider'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsListMobile from './ProjectsListMobile/ProjectsListMobile'

const Portfolio = ({ className, isMobile, portfolio, l10n: { translations } }) => (
  <Grid as="article" id="portfolio" className={className}>
    <h2
      className="font_h2-slab"
      dangerouslySetInnerHTML={{ __html: translations.dev.portfolio.title }}
    />
    <p
      className="font_subhead-regular"
      dangerouslySetInnerHTML={{ __html: translations.dev.portfolio.text }}
    />
    {isMobile ? (
      portfolio.map((projectGroup) => (
        <Fragment key={projectGroup.id}>
          <h3 dangerouslySetInnerHTML={{ __html: translations.dev.tabs[projectGroup.id] }} />
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

export default L10nConsumer(
  MsBrowserConsumer(styled(Portfolio)`
    ${styles}
  `),
)
