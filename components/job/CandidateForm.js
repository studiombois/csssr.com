import React, { PureComponent } from 'react'
import css from 'styled-jsx/css'
import { equals } from 'ramda'
import cn from 'classnames'
import Link from 'next/link'
import { FormSpy } from 'react-final-form'
import FormRow from './FormRow'
import Section from '../job/Section'
import CandidateInfoSection from './CandidateInfoSection'
import AnimatedButton from '../ui-kit/AnimatedButton'
import FormStateMessage from '../ui-kit/FormStateMessage'
import PictureForAllResolutions from '../PictureForAllResolutions'

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
      position: relative;
      z-index: 2;
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
  'project-manager': 'Project_manager',
  'middle-js-developer': 'Developer_2',
  'senior-js-developer': 'JS_senior',
  'qa-engineer': 'QA_1',
  'ui-ux-designer': 'Designer',
  'pixel-perfectionist': 'Developer_1',
  'head-of-web-development-team': 'Manager',
  'senior-apparel-developer': 'Clothes',
  'product-manager': 'Product_manager',
  'devops-engineer': 'Developer_2',
  'sales-assistant': '',
  'office-manager': 'Documents_2',
  'account-manager-ru': 'Account_manager_1',
  'account-manager-en': 'Account_manager_1',
  'global-business-director': 'Account_manager_2',
  'legal-expert': 'Documents_1',
  'hr-manager': 'Recruiter',
}

const divideSections = sections => {
  const firstQuestIndex = sections.findIndex(section => ['quest', 'questBox'].includes(section.type))
  return [
    sections.slice(0, firstQuestIndex),
    sections.slice(firstQuestIndex),
  ]
}

const mapVacancies = vacancy =>
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
    <style jsx>{`

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

      @media (max-width: 767px) {
        .hot-vacancy::before {
          left: -1.5rem;
          font-size: 1.25rem;
        }
      }
    `}</style>
  </li>

class CandidateForm extends PureComponent {
  messageRef = React.createRef()

  state = {
    // TODO такой же элемент стейта есть в ContactForm
    submittedToServer: false,
    isMobile: false,
  }

  // TODO такой же метод есть в ContactForm
  handleScroll = () => {
    const messageNode = this.messageRef.current
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = messageNode.getBoundingClientRect()
    const offset = elemRect.top - bodyRect.top - 20

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }

  // TODO такой же метод есть в ContactForm
  handleSubmit = e => {
    const { handleSubmit, form: { reset } } = this.props

    const submitResult = handleSubmit(e)

    if (submitResult) {
      this.setState({
        submittedToServer: true,
      })

      this.handleScroll()

      return submitResult.then(() => {
        if (this.props.submitSucceeded) {
          reset()
        }
      })
    }
  }

  // TODO такой же метод есть в ContactForm
  handleAnyValuesChange = ({ values }) => {
    const { initialValues } = this.props
    const wasReset = initialValues === undefined ?
      equals(values, {}) :
      values !== this.props.initialValues
    if (this.state.submittedToServer && wasReset) {
      this.setState({
        submittedToServer: false,
      })
    }
  }

  // TODO такой же метод есть в ContactForm
  handleTryToFillFormAgain = () => {
    this.setState({ submittedToServer: false })
  }

  // TODO такой же метод есть в ContactForm
  getStatus = () => {
    const { submitting, submitFailed } = this.props
    const { submittedToServer } = this.state

    if (submitting) {
      return 'submitting'
    }

    if (submittedToServer) {
      if (submitFailed) {
        return 'fail'
      }
      return 'success'
    }

    return 'pending'
  }

  componentDidMount() {
    this.mobileMediaQuery = window.matchMedia('(max-width: 767px)')
    this.mobileMediaQuery.addListener(this.handleMediaMatch)
    this.handleMediaMatch(this.mobileMediaQuery)
  }

  componentWillUnmount() {
    this.mobileMediaQuery.removeListener(this.handleMediaMatch)
  }

  handleMediaMatch = ({ matches }) =>
    this.setState({
      isMobile: matches,
    })

  renderVacancyImageAndLinks = () => {
    const { vacancies, vacancy: { pathName, name } } = this.props

    const pictureName = picturesMap[pathName]

    return (
      <div>
        { pictureName && <PictureForAllResolutions
          className={picture.className}
          customResolutions={['360']}
          image={{ namespace: 'job', key: `${pictureName}`, alt: name }}
        />}

        <ul>
          {vacancies.map(mapVacancies)}
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
      values: {
        connection,
      },
      vacancy,
      vacancies,
      pathName,
      submitError,
    } = this.props

    const [ beforeQuestSections, otherSections ] = divideSections(vacancy.sections)

    const pictureName = picturesMap[pathName]

    const status = this.getStatus()

    return (
      <form onSubmit={this.handleSubmit} name='job' noValidate>
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }}/>

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
          <div className='button' ref={this.messageRef}>
            <AnimatedButton
              type='submit'
              status={status}
            >
              Отправить
            </AnimatedButton>
          </div>

          <div className='message'>
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail='hr@csssr.io'
            />
          </div>
        </FormRow>

        <ul>
          {vacancies.map(mapVacancies)}
        </ul>

        <style jsx>{`
          form {
            margin-right: auto;
            margin-left: auto;
            padding-top: 13.5625rem;
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

          ul {
            display: none;
          }

          .button {
            margin-top: 3.5625rem;
            margin-left: auto;
            margin-right: auto;
            width: 12rem;
          }

          @media (max-width: 767px) {
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

            ul {
              grid-column: 1 / span 6;
              margin-top: 3.9375rem;
              margin-left: 3rem;
              display: block;
              width: 18.5rem;
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
