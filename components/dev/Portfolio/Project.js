import React from 'react'
import cn from 'classnames'
import { arrayOf, oneOf, string, number } from 'prop-types'
import Slider from '../Slider'

const Project = project => (
  <li
    className={cn({
      'smaller-margin-top': project.title,
      [project.className]: !!project.className,
    })}
  >
    {project.title && (
      <h3 className="font_h3-regular" dangerouslySetInnerHTML={{ __html: project.title }} />
    )}
    {project.type === 'slider' && (
      <Slider id={project.id} slides={project.slides} href={project.href} />
    )}
    <style jsx>{`
      h3 {
        margin-bottom: 1.5625rem;
        text-transform: uppercase;
      }

      li:nth-child(odd) {
        grid-column: 2 / span 5;
      }

      li:nth-child(even) {
        grid-column: 7 / span 5;
      }

      li {
        margin-top: 3.125rem;
      }

      // У элементов списка с заголовком маргин меньше
      li.smaller-margin-top:nth-child(n + 3) {
        margin-top: 6rem;
      }

      // У первых двух элементов списка с заголовком самый маленький маргин
      li.smaller-margin-top:nth-child(-n + 2) {
        margin-top: 1.5625rem;
      }

      // У элементов списка, у которых на строке есть заголовок, маргин больше
      li.bigger-margin-top:nth-child(n + 3) {
        margin-top: 7.5625rem;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        h3 {
          grid-column: 3 / span 8;
          margin-top: 1rem;
          text-align: center;
        }

        li {
          grid-column: 3 / span 8 !important;
        }

        li:first-child:not(.smaller-margin-top) {
          margin-top: 4.125rem;
        }

        li.smaller-margin-top:not(:first-child) {
          margin-top: 3.675rem;
        }

        li:not(:first-child):not(.smaller-margin-top),
        li:nth-child(n + 3):not(.smaller-margin-top) {
          margin-top: 2.25rem !important;
        }
      }
    `}</style>
    <style jsx>{`
      :global(.ie11) li {
        display: block;
      }

      @media (max-width: 1279px) {
        :global(.ie11) li {
          -ms-grid-row: ${Math.ceil(project.index + 1)};
        }
      }

      @media (min-width: 1280px) {
        :global(.ie11) li {
          -ms-grid-row: ${Math.ceil((project.index + 1) / 2)};
        }
      }

      :global(.ie11) li:nth-child(odd) {
        -ms-grid-column: 3;
        -ms-grid-column-span: 9;
      }

      :global(.ie11) li:nth-child(even) {
        -ms-grid-column: 13;
        -ms-grid-column-span: 9;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        :global(.ie11) h3 {
          -ms-grid-column: 5;
          -ms-grid-column-span: 15;
        }

        :global(.ie11) li {
          -ms-grid-column: 5 !important;
          -ms-grid-column-span: 15 !important;
        }
      }
    `}</style>
  </li>
)

Project.propTypes = {
  id: string,
  slides: arrayOf(number),
  title: string,
  type: oneOf(['slider', 'video']),
  href: string,
  className: string,
}

export default Project
