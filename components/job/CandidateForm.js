import React, { PureComponent } from 'react'
import css from 'styled-jsx/css'
import cn from 'classnames'
import Link from 'next/link'
import FormRow from './FormRow'
import Section from '../job/Section'
import CandidateInfoSection from './CandidateInfoSection'
import AnimatedButton from '../ui-kit/AnimatedButton'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 25rem;
  }

  img {
    width: 100%;
  }

  @media (max-width: 767px) {
    picture {
      margin-left: -1rem;
      width: calc(100% + 2rem);
      height: 15.5rem;
      text-align: center;
    }

    img {
      height: 100%;
      width: auto;
    }
  }
`

const picturesMap = {
  'project-manager': 'project_manager',
  'middle-js-developer': 'developer_2',
  'senior-js-developer': 'developer_2',
  'qa-engineer': 'qa_1',
  'ui-ux-designer': 'designer',
  'pixel-perfectionist': 'developer_1',
  'head-of-web-development-team': 'manager',
  'sales-assistant': '',
}

const divideSections = sections => {
  const firstQuestIndex = sections.findIndex(section => ['quest', 'questBox'].includes(section.type))
  return [
    sections.slice(0, firstQuestIndex),
    sections.slice(firstQuestIndex),
  ]
}

class CandidateForm extends PureComponent {
  state = {
    formSubmitStatus: null,
    isMobile: false,
  }

  componentDidMount() {
    const mobileMediaQuery = window.matchMedia('(max-width: 767px)')

    mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(mobileMediaQuery)
  }

  componentWillReceiveProps({ submitting, submitFailed, submitSucceeded, dirtySinceLastSubmit }) {
    if (
      this.props.submitting !== submitting ||
      this.props.submitFailed !== submitFailed ||
      this.props.submitSucceeded !== submitSucceeded ||
      this.props.dirtySinceLastSubmit !== dirtySinceLastSubmit
    ) {
      if (submitting) {
        this.setState({ formSubmitStatus: 'submitting' })
      } else if (submitFailed && !dirtySinceLastSubmit) {
        this.setState({ formSubmitStatus: 'fail' })
      } else if (submitSucceeded) {
        this.setState({ formSubmitStatus: 'success' })
      } else {
        this.setState({ formSubmitStatus: null })
      }
    }
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })


  handleStateClear = () => {
    this.setState({ formSubmitStatus: null })
  }

  handleSubmit = e => {
    const { handleSubmit, form: { reset } } = this.props

    return handleSubmit(e).then(() => {
      if (!this.props.hasSubmitErrors) {
        reset()
      }
    })
  }

  renderVacancyImageAndLinks = () => {
    const { vacancies, vacancy: { pathName, name } } = this.props

    const pictureName = picturesMap[pathName]

    return (
      <div>
        {pictureName && <Picture
          className={picture.className}
          image={{ namespace: 'jobs', key: `job/${pictureName}`, alt: name }}
        />}

        {/*  <Picture
          className={picture.className}
          image={{ namespace: 'jobs', key: 'job/project_manager', alt: name }}
        /> */}

        <ul>
          {vacancies.map(vacancy =>
            <li key={vacancy.id}>
              <Link
                prefetch
                href={{ pathname: '/ru/job', query: { jobPathName: vacancy.pathName } }}
                as={`/ru/jobs/${vacancy.pathName}`}
              >
                <a
                  className={cn({
                    'font_link-list_16': true,
                    'hot-vacancy': vacancy.isHot,
                  })}
                >
                  {vacancy.name}
                </a>
              </Link>
            </li>
          )}
        </ul><style jsx>{`
        div {
          grid-column: 9 / span 4;
        }

        ul {
          margin-top: 3.6875rem;
          margin-left: auto;
          margin-right: auto;
          width: 17rem;
        }

        li:not(:last-child) {
          margin-bottom: 1rem;
        }

        .hot-vacancy {
          position: relative;
        }

        .hot-vacancy::before {
          content: '🔥';
          position: absolute;
          top: -0.125rem;
          left: -1.25rem;
          font-size: 0.75rem;
        }

        @media (min-width: 1360px) and (max-width: 1919px) {
          ul {
            width: 13rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1359px) {
          ul {
            width: 12rem;
          }
        }

        @media (max-width: 767px) {
          div {
            grid-column: 1 / span 6;
            grid-row: 1;
          }

          ul {
            display: none;
          }
        }
      `}</style>
      </div>
    )
  }

  render() {
    const {
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
      values: {
        connection,
      },
      vacancy,
      pathName,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    const [ beforeQuestSections, otherSections ] = divideSections(vacancy.sections)

    const pictureName = picturesMap[pathName]

    return (
      <form onSubmit={this.handleSubmit}>
        <FormRow rightSideContent={this.renderVacancyImageAndLinks()}>
          <h1
            className={cn({
              'font_h1-regular': true,
              'extra-margin': !pictureName,
            })}
          >
            {vacancy.name }
            <span className='font_subhead-regular'>Дистанционно и на фуллтайм</span>
          </h1>

          <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: vacancy.description }} />
          {beforeQuestSections.map((section, index) => <Section key={index} {...section} />)}
        </FormRow>

        {otherSections.map((section, index) => <Section key={index} {...section} asRow />)}

        <CandidateInfoSection
          connection={connection}
          vacancy={vacancy}
          isMobile={this.state.isMobile}
          onFileFieldChange={this.props.form.change} /* eslint-disable-line */
        />

        <FormRow>
          <div className='button'>
            <AnimatedButton
              type='submit'
              disabled={isSubmitButtonDisabled}
              status={this.state.formSubmitStatus}
              onAnimationEnd={this.handleStateClear}
            >
              Отправить
            </AnimatedButton>
          </div>
        </FormRow>

        <style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 13.5625rem;
            padding-bottom: 31.5rem;
            align-items: center;
            border: none;
          }

          h1 {
            margin-top: -0.0625rem;
          }

          h1 span {
            margin-top: 0.875rem;
            display: block;
          }

          h1 + p {
            margin-top: 1.3125rem;
          }

          .button {
            margin-top: 3.5625rem;
            margin-left: auto;
            margin-right: auto;
            width: 12rem;
          }

          @media (max-width: 767px) {
            form {
              padding-bottom: 14rem;
            }

            h1 {
              margin-top: 2.125rem;
            }

            h1 span {
              margin-top: 0.5rem;
            }

            h1 + p {
              margin-top: 0.125rem;
            }

            h1.extra-margin {
              margin-top: 5.125rem;
            }

            form {
              padding-top: 0;
            }

            .button {
              width: 13.5rem;
            }
          }
        `}</style>
        {picture.styles}
      </form>
    )
  }
}

export default CandidateForm
