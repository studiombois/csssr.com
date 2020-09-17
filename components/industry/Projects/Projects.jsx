import React from 'react'
import { array, object, string } from 'prop-types'
import styled from '@emotion/styled'
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
  content: { heading, projectsItems },
  l10n: { translations },
}) => (
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
          ({ images, imgAlt, link, heading, text, teamNumber, projectDuration, className, id }) => (
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
            We&nbsp;work with a&nbsp;wide range of&nbsp;industries:{' '}
            <Link
              className="text-link"
              href="information-technology"
              type="list"
              size="m"
              dangerouslySetInnerHTML={{ __html: 'information technology' }}
              data-testid="Industry:link.inforamationTechnology"
            />
            ,{' '}
            <Link
              className="text-link"
              href="media-and-marketing"
              type="list"
              size="m"
              dangerouslySetInnerHTML={{ __html: 'media and marketing' }}
              data-testid="Industry:link.mediaAndMarketing"
            />
            ,{' '}
            <Link
              className="text-link"
              href="fintech"
              type="list"
              size="m"
              dangerouslySetInnerHTML={{ __html: 'banking' }}
              data-testid="Industry:link.fintech"
            />
            ,{' '}
            <Link
              className="text-link"
              href="ecommerce"
              type="list"
              size="m"
              dangerouslySetInnerHTML={{ __html: 'e-commerce' }}
              data-testid="Industry:link.ecommerce"
            />
            . We&nbsp;are proud of&nbsp;our client list and glad to&nbsp;share some of&nbsp;our
            cases.
          </SubHeading>

          <ButtonLink
            className="link"
            href="#"
            kind="primary"
            size="s"
            dangerouslySetInnerHTML={{ __html: 'VIEW OUR CASES' }}
            data-testid="Industry:link.ourCases"
          />
        </div>
      </Grid>
    </div>
  </section>
)

Projects.propTypes = {
  className: string,
  id: string,
  content: object,
  factItems: array,
}

export default L10nConsumer(
  MsBrowserConsumer(styled(Projects)`
    ${styles}
  `),
)
