import React, { Fragment } from 'react'
import translate from '../../../utils/translate-wrapper'
import { arrayOf, number, string, shape } from 'prop-types'

// 5 колоной занимает каждый айтем
const ProjectsListMobile = ({ t, projects }) => {
  const gridColumns = 5 * projects.length
  const renderProject = (project, index) =>
    <Fragment key={project.id}>
      <li>
        { project.href
          ? <a href={project.href} target='_blank' rel='noopener'>
            <img src={require(`../../../static/images/dev/portfolio/${project.id}_1.png`)} />
          </a>

          : <img src={require(`../../../static/images/dev/portfolio/${project.id}_1.png`)} />
        }

        <h4 className='font_subhead-regular' dangerouslySetInnerHTML={{ __html: t(`dev:portfolio.projects.${project.id}.title`) }} />
        <p className='font_p16-regular' dangerouslySetInnerHTML={{ __html: t(`dev:portfolio.projects.${project.id}.text`) }} />
      </li>
      <style jsx>{`
        li {
          grid-column: ${index * 5 + 1} / span 5;
        }

        img {
          width: 100%;
          height: 9.5rem;
        }

        h4 {
          margin-top: 0.8125rem;
        }

        p {
          margin-top: 0.3125rem;
        }
      `}</style>
    </Fragment>

  return (
    <Fragment>
      <ul className='grid-container'>
        {projects.map(renderProject)}
      </ul>
      <style jsx>{`
        ul {
          margin-top: 1rem;
        }
      `}</style>
      <style jsx>{`
        ul {
          grid-template-columns: repeat(${gridColumns}, 3rem);
          grid-column: 1 / span ${gridColumns};

          // 3rem занимает каждая колонка
          // 0.5rem занимает расстояние между ними
          // 9rem это сумма паддингов
          width: ${gridColumns * 3 + (0.5 * (gridColumns - 1)) + 1}rem;
        }
      `}</style>
    </Fragment>
  )
}


ProjectsListMobile.propTypes = {
  id: string,
  projects: arrayOf(shape({
    id: string,
    type: string,
    slides: arrayOf(number),
    href: string,
  })),
}

export default translate()(ProjectsListMobile)
