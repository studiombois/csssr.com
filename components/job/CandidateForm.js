import React, { Fragment, PureComponent } from 'react'
import css from 'styled-jsx/css'
import { equals } from 'ramda'
import cn from 'classnames'
import Link from 'next/link'
import { FormSpy } from 'react-final-form'
import withI18next from '../../utils/withI18next'
import FormRow from './FormRow'
import Section from '../job/Section'
import CandidateInfoSection from './CandidateInfoSection'
import AnimatedButton from '../ui-kit/AnimatedButton'
import FormStateMessage from '../ui-kit/FormStateMessage'
import PictureForAllResolutions from '../PictureForAllResolutions'
import Picture from '../Picture'
import getGridValueForMs from '../../utils/style/getGridValueForMs'
import { MsBrowserContext } from '../../utils/msBrowserProvider'

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

const pictureFaq = css.resolve`
  picture {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    width: 12rem;
    height: 8.75rem;
    display: block;
  }

  picture.visible_on_mobile {
    display: none;
  }

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 82%;
  }

  :global(.ie11) picture {
    position: relative;
    overflow: hidden;
  }

  :global(.ie11) img {
    max-width: none;
    position: absolute;
    right: -2.9375rem;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    picture {
      margin-top: 0.75rem;
      width: 9rem;
    }

    img {
      object-position: 71%;
    }
  }

  @media (max-width: 767px) {
    picture {
      position: relative;
      grid-column: 1 / span 6;
      margin-top: 1.5rem;
      width: auto;
      height: 8.75rem;
    }

    :global(.ie11) picture {
      -ms-grid-column: ${getGridValueForMs(1)};
      -ms-grid-column-span: ${getGridValueForMs(6)};
    }

    picture.hidden_on_mobile {
      display: none;
    }

    picture.visible_on_mobile {
      display: block;
    }

    img {
      width: auto;
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 40%;
    }
  }
`

const picturesMap = {
  'project-manager-ru': 'Project_manager',
  'project-manager': 'Project_manager',
  'project-product-manager': 'Project_manager',
  'middle-js-developer': 'Developer_2',
  'senior-js-developer': 'JS_senior',
  'qa-engineer': 'QA_1',
  'ui-ux-designer': 'Designer',
  'pixel-perfectionist': 'Developer_1',
  'head-of-web-development-team': 'Manager',
  'senior-apparel-developer': 'Clothes',
  'product-manager': 'Product_manager',
  'devops-engineer': 'Developer_2',
  'sales-assistant': 'Assistant',
  'office-manager': 'Documents_2',
  'account-manager-ru': 'Account_manager_1',
  'account-manager-en': 'Account_manager_1',
  'global-business-director': 'Account_manager_2',
  'legal-expert': 'Documents_1',
  'hr-manager': 'Recruiter',
  'java-developer': 'Backend_developer_1',
  'junior-project-manager': 'Project_manager',
  'account-manager-ee': 'Account_manager_1',
  'smm-manager': 'SMM',
  'account-manager': 'Documents_1',
  'system-analyst': 'Systems_analyst',
  'senior-fullstack-developer': 'JS_senior',
  'senior-team-lead-js-developer': 'JS_senior',
  'product-designer': 'Designer',
  'react-yoda': 'Copywriter_rus',
  copywriter: 'Copywriter_eng',
  'senior-java-developer': 'Backend_developer_1',
  'copywriter-en': 'Copywriter_eng',
  'copywriter-ru': 'Copywriter_rus',
  photographer: 'Photographer',
  'brand-ambassador': 'Brand-ambassador',
  'backend-qa-engineer': 'QA_2',
  'deputy-chief-accountant': 'Documents_2',
}

const divideSections = sections => {
  const firstQuestIndex = sections.findIndex(section =>
    ['quest', 'questBox'].includes(section.type),
  )
  return [sections.slice(0, firstQuestIndex), sections.slice(firstQuestIndex)]
}

const mapVacancies = locale => vacancy => (
  <li key={vacancy.id}>
    <Link
      href={{ pathname: `/${locale}/job`, query: { jobPathName: vacancy.pathName } }}
      as={`/${locale}/jobs/${vacancy.pathName}`}
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

      :global(.ie11) .hot-vacancy::before {
        color: orange;
        overflow: hidden;
        line-height: 12px;
        top: 0.3rem;
      }

      @media (min-width: 768px) and (max-width: 1279px) {
        a {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }

      @media (max-width: 767px) {
        .hot-vacancy::before {
          left: -1.5rem;
          font-size: 1.25rem;
        }
      }
    `}</style>
  </li>
)

class CandidateForm extends PureComponent {
  messageRef = React.createRef()

  static contextType = MsBrowserContext

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

    const isMsBrowser = this.context
    if (isMsBrowser) {
      document.documentElement.scrollTop = offset
    } else {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  // TODO такой же метод есть в ContactForm
  handleSubmit = e => {
    const {
      handleSubmit,
      form: { reset },
    } = this.props

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
    const wasReset =
      initialValues === undefined ? equals(values, {}) : values !== this.props.initialValues
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
    const {
      vacancies,
      locale,
      vacancy: { pathName, name },
      lng,
      t,
    } = this.props
    const pictureName = picturesMap[pathName]

    return (
      <div>
        {pictureName && (
          <PictureForAllResolutions
            className={picture.className}
            customResolutions={['360']}
            image={{ namespace: 'job', key: `${pictureName}`, alt: name }}
          />
        )}

        <ul>{vacancies.map(mapVacancies(locale))}</ul>

        {lng === 'ru' && (
          <Fragment>
            <p className="faq-text font_p16-regular">
              {t('job:faq.title')}

              <a href="/ru/jobs-faq" className="font_link-list_16">
                {t('job:faq.link')}
              </a>
            </p>
            <Picture
              className={`${pictureFaq.className} hidden_on_mobile`}
              image={{ namespace: 'jobs', key: 'faq', alt: t('job:faq.alt') }}
            />
          </Fragment>
        )}

        <style jsx>
          {`
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

            .faq-text {
              margin-top: 5rem;
              margin-left: auto;
              margin-right: auto;
              width: 12rem;
              display: block;
              font-weight: 900;
            }

            .faq-text a {
              margin-top: 0.5rem;
              text-decoration: underline;
              font-style: normal;
              font-stretch: normal;
              letter-spacing: normal;
            }

            @media (min-width: 1360px) and (max-width: 1919px) {
              ul {
                width: 13rem;
              }
            }

            @media (min-width: 1280px) and (max-width: 1359px) {
              ul {
                width: 12rem;
              }
            }

            @media (min-width: 768px) and (max-width: 1279px) {
              ul {
                width: 9rem;
              }

              .faq-text,
              .faq-text a {
                font-size: 1rem;
                line-height: 1.5rem;
              }

              .faq-text {
                margin-top: 4.75rem;
                width: 9rem;
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

              .faq-text {
                display: none;
              }
            }
          `}
        </style>

        <style jsx>
          {`
            :global(.ie11) div {
              -ms-grid-column: ${getGridValueForMs(9)};
              -ms-grid-column-span: ${getGridValueForMs(4)};
            }
          `}
        </style>
        {pictureFaq.styles}
      </div>
    )
  }

  render() {
    const {
      values: { connection },
      vacancy,
      vacancies,
      submitError,
      lng,
      locale,
      t,
    } = this.props

    const [beforeQuestSections, otherSections] = divideSections(vacancy.sections)
    const pictureName = picturesMap[vacancy.pathName]
    const status = this.getStatus()

    return (
      <form onSubmit={this.handleSubmit} name="job" noValidate>
        <FormSpy onChange={this.handleAnyValuesChange} subscription={{ values: true }} />

        <FormRow rightSideContent={this.renderVacancyImageAndLinks()}>
          <h1
            className={cn({
              'font_h1-regular': true,
              'extra-margin': !pictureName,
            })}
          >
            {vacancy.name}

            {vacancy.employment === 'part-time' ? (
              <span className="font_subhead-regular">{t('job:remote')}</span>
            ) : (
              <span className="font_subhead-regular">{t('job:remoteAndFullTime')}</span>
            )}
          </h1>

          <p
            className="font_p24-strong"
            dangerouslySetInnerHTML={{ __html: vacancy.description }}
          />
          {beforeQuestSections.map((section, index) => (
            <Section key={index} {...section} />
          ))}

          {lng === 'ru' && (
            <div className="faq-text-container">
              <Picture
                className={`${pictureFaq.className} visible_on_mobile`}
                image={{ namespace: 'jobs', key: 'faq', alt: t('jobs:faq.alt') }}
              />
              <p className="faq-text font_p16-regular">
                {t('job:faq.title')}

                <a href="/ru/jobs-faq" className="font_link-list_16">
                  {t('job:faq.link')}
                </a>
              </p>
            </div>
          )}
        </FormRow>

        {otherSections.map((section, index) => (
          <Section key={index} {...section} asRow />
        ))}

        <CandidateInfoSection
          connection={connection}
          vacancy={vacancy}
          isMobile={this.state.isMobile}
          onFileFieldChange={this.props.form.change} /* eslint-disable-line */
        />

        <FormRow>
          <div
            className={cn('button', {
              button_lng_en: lng === 'en',
            })}
            ref={this.messageRef}
          >
            <AnimatedButton type="submit" status={status}>
              {t('job:send')}
            </AnimatedButton>
          </div>

          <div className="message">
            <FormStateMessage
              status={status}
              errorText={submitError}
              onTryAgain={this.handleTryToFillFormAgain}
              feedbackEmail="hr@csssr.io"
            />
          </div>
        </FormRow>

        <ul>{vacancies.map(mapVacancies(locale))}</ul>

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

          .button_lng_en {
            width: 16rem;
          }

          .faq-text {
            display: none;
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

            .button {
              width: 13.5rem;
            }

            .button_lng_en {
              width: 17.5rem;
            }

            .faq-text-container {
              position: relative;
              width: 100%;
            }

            .faq-text {
              display: block;
            }

            .faq-text {
              position: absolute;
              top: 1.5rem;
              max-width: 10rem;
              font-weight: 900;
            }

            .faq-text,
            .faq-text a {
              font-size: 1rem;
              line-height: 1.5rem;
            }

            .faq-text a {
              margin-top: 0.5rem;
            }
          }
        `}</style>
        {picture.styles}
        {pictureFaq.styles}
      </form>
    )
  }
}

export default withI18next(['job'])(CandidateForm)
