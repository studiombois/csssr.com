import React, { Fragment, PureComponent } from 'react'
import { arrayOf, shape, string, number, bool } from 'prop-types'
import cn from 'classnames'
import Tabs from '../Tabs'
import Project from './Project'
import CutButton from '../CutButton'
import translate from '../../../utils/translate-wrapper'
import isOdd from '../../../utils/isOdd'
import isEven from '../../../utils/isEven'

class ProjectsList extends PureComponent {
  static proptypes = {
    portfolio: arrayOf(shape({
      id: string,
      projects: arrayOf(shape({
        id: string,
        type: string,
        slides: arrayOf(number),
        href: string,
      })),
    })),
  }
  state = {
    activeProjectsGroupId: 'all',
    listHeight: null,
    isCut: true,
  }

  listRef = React.createRef()
  listCutHeight = 0

  getProjectsOfActiveProjectsGroupId = () => {
    const { portfolio } = this.props
    const { activeProjectsGroupId } = this.state

    if (activeProjectsGroupId === 'all') {
      return portfolio.map(projectGroup => projectGroup.projects.map(project => project))
    }

    const targetPortfolio = portfolio.find(projectGroup => projectGroup.id === activeProjectsGroupId)
    return targetPortfolio ? targetPortfolio.projects : []
  }

  handleChangeActiveProjectsGroupId = value =>
    this.setState({
      activeProjectsGroupId: value,
      listHeight: null,
    })

  handleCutListOnOff = () => {
    const listNode = this.listRef.current
    const portfolioSection = document.getElementById('portfolio')
    if (this.state.isCut) {
      this.listCutHeight = portfolioSection.offsetHeight
    }

    const scrollToNextBlock = () => {
      if (this.state.isCut) {
        const scrollToOffset = portfolioSection.offsetTop + this.listCutHeight

        if (this.context.isMsBrowser) {
          document.documentElement.scrollTop = scrollToOffset
        } else {
          window.scrollTo({
            top: scrollToOffset,
            behavior: 'instant',
          })
        }
      }
    }

    this.setState({
      isCut: !this.state.isCut,
      listHeight: listNode.offsetHeight,
    }, scrollToNextBlock)
  }

  renderProject = (project, index) =>
    <Project
      index={index}
      key={project.id}
      id={project.id}
      type={project.type}
      title={project.title}
      slides={project.slides}
      href={project.href}
      className={project.className}
    />

  // TODO очень сложный метод, надо подумать как его переделать
  renderAllProjects = () => {
    const projects = this.props.portfolio.reduce((accumulator, projectGroup) => {
      projectGroup.projects.forEach((project, index) => {
        const shouldHaveTitle = index === 0
        const newProject = shouldHaveTitle
          ? { ...project, title: this.props.t(`dev:tabs.${projectGroup.id}`) }
          : project

        accumulator.push(newProject)
      })

      return accumulator
    }, [])
    return projects.map((project, index) => {
      const nextProject = projects[index + 1]
      const prevProject = projects[index - 1]
      const lastProject = (index + 1) === projects.length
      const hasTitleOnSameRow = (isOdd(index + 1) && nextProject && nextProject.title)
                                || (!lastProject && isEven(index + 1) && prevProject && prevProject.title)

      const newProject = hasTitleOnSameRow
        ? { ...project, className: 'bigger-margin-top' }
        : project

      return this.renderProject(newProject, index)
    })
  }

  renderSpecificProjects = () => {
    return this.props.portfolio
      .find(projectGroup => projectGroup.id === this.state.activeProjectsGroupId)
      .projects
      .map(this.renderProject)
  }

  render() {
    const { t, portfolio } = this.props
    const { activeProjectsGroupId, listHeight, isCut } = this.state
    const projectsOfActiveProjectsGroupId = this.getProjectsOfActiveProjectsGroupId()
    const shouldShowCutButton = projectsOfActiveProjectsGroupId.length > 5
    const tabs = ['all'].concat(portfolio.map(projectsGroup => projectsGroup.id ))

    return (
      <Fragment>
        <Tabs
          tabs={tabs}
          activeTabId={activeProjectsGroupId}
          onClick={this.handleChangeActiveProjectsGroupId}
        />
        <div
          className={cn('list-container', {
            is_cut: shouldShowCutButton && isCut,
          })}
        >
          <ul className={'grid-container'} ref={this.listRef}>
            { activeProjectsGroupId === 'all'
              ? this.renderAllProjects()
              : this.renderSpecificProjects()
            }
          </ul>
        </div>

        { shouldShowCutButton &&
          <CutButton isCut={isCut} onClick={this.handleCutListOnOff}>
            { isCut
              ? t('dev:portfolio.buttonText1')
              : t('dev:portfolio.buttonText2')
            }
          </CutButton>
        }
        <style jsx>{`
          ul {
            padding-bottom: 1.5625rem;
          }

          .list-container.is_cut ul {
            padding-bottom: 1.5rem;
          }

          .list-container.is_cut {
            height: 87.0625rem;
          }

          @media (min-width: 1360px) and (max-width: 1919px) {
            .list-container.is_cut {
              height: 75.5625rem;
            }
          }

          @media (min-width: 1280px) and (max-width: 1359px) {
            .list-container.is_cut {
              height: 72.5625rem;
            }
          }

          @media (min-width: 768px) and (max-width: 1279px) {
            .list-container.is_cut {
              height: 104.5625rem;
            }
          }
        `}</style>
        <style jsx>{`
          .list-container {
            grid-column: 1 / span 12;
            height: ${listHeight ? listHeight / 16 + 'rem' : 'auto'};
            max-height: auto;
            overflow: hidden;
            transition: height ${!isCut ? listHeight / 3.8 : 0}ms ease-in; // коэффициент подобран на глаз
          }
        `}</style>
        <style jsx>{`
          :global(.ie11) .list-container {
            -ms-grid-column: 1;
            -ms-grid-column-span: 23;
            -ms-grid-row: 4;
          }
        `}</style>
      </Fragment>
    )
  }
}

ProjectsList.contextTypes = {
  isMsBrowser: bool,
}


export default translate()(ProjectsList)
