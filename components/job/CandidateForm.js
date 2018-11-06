import React, { PureComponent, Fragment } from 'react'
import css from 'styled-jsx/css'
import { Field } from 'react-final-form'
import Link from 'next/link'
import FormRow from './FormRow'
import ContactOptions from './ContactOptions'
import TextField from '../ui-kit/TextField'
import TextareaField from '../ui-kit/TextareaField'
import Section from '../job/Section'
import PrivacyPolicyCheckbox from '../PrivacyPolicyCheckbox'
import AnimatedButton from '../ui-kit/AnimatedButton'
import Picture from '../Picture'

const picture = css.resolve`
  picture {
    width: 100%;
  }
  
  img {
    width: 100%;
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

class CandidateForm extends PureComponent {
  state = {
    formSubmitStatus: null,
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

  divideSections = () => {
    let isBeforeQuest = true
    const { sections } = this.props.vacancy

    return sections.reduce((memo, section) => {
      const { type } = section
      if (type === 'quest' || type === 'questBox') {
        isBeforeQuest = false
      }

      return isBeforeQuest ? {
        ...memo,
        beforeQuestSections: [ ...memo.beforeQuestSections, section ],
      } : {
        ...memo,
        otherSections: [ ...memo.otherSections, section ],
      }
    }, { beforeQuestSections: [], otherSections: [] })
  }

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
      <Fragment>
        {pictureName && <Picture
          className={picture.className}
          image={{ namespace: 'jobs', key: `job/${pictureName}`, alt: name }}
        />}

        <ul>
          {vacancies.map(vacancy =>
            <li key={vacancy.id}>
              <Link
                prefetch
                href={{ pathname: '/ru/job', query: { jobPathName: vacancy.pathName } }}
                as={`/ru/jobs/${vacancy.pathName}`}
              >
                <a className='font_link-list_16'>
                  {vacancy.name}
                </a>
              </Link>
            </li>
          )}
        </ul><style jsx>{`
        ul {
          margin-top: 3.6875rem;
          margin-left: auto;
          margin-right: auto;
          width: 12rem;
        }

        li:not(:last-child) {
          margin-bottom: 1rem;
        }
      `}</style>
      </Fragment>
    )
  }

  renderContactOptions = () => {
    const { values: { connection } } = this.props

    return <ContactOptions connection={connection}/>
  }

  render() {
    const {
      submitting,
      hasValidationErrors,
      hasSubmitErrors,
      dirtySinceLastSubmit,
      vacancy,
    } = this.props

    const isSubmitButtonDisabled =
      submitting ||
      hasValidationErrors ||
      (hasSubmitErrors && !dirtySinceLastSubmit)

    const dividedSections = this.divideSections()

    const { hasComment, hasGithub, hasPortfolio, hasResume/* , hasFile*/ } = vacancy

    return (
      <form onSubmit={this.handleSubmit}>
        <FormRow
          rightSideContent={this.renderVacancyImageAndLinks()}
          rightSideWidth='wide'
        >
          <h1 className='font_h1-regular'>
            {vacancy.name }
            <span className='font_subhead-regular'>Дистанционно, и на фуллтайм</span>
          </h1>

          <p className='font_p24-strong' dangerouslySetInnerHTML={{ __html: vacancy.description }} />
          {dividedSections.beforeQuestSections.map((section, index) => <Section key={index} {...section} />)}
        </FormRow>
        {dividedSections.otherSections.map((section, index) => <Section key={index} {...section} asRow />)}
        <FormRow
          rightSideContent={this.renderContactOptions()}
          customStylesForRightSideContent
        >
          <h2 className='font_h2-regular'>Расскажите о себе</h2>
          <div className='fieldset'>
            <div className='field'>
              <Field
                id='firstname'
                name='firstname'
                component={TextField}
                type='text'
                theme='regular'
                label='Имя'
              />
            </div>
            <div className='field'>
              <Field
                id='lastname'
                name='lastname'
                component={TextField}
                type='text'
                theme='regular'
                label='Фамилия'
              />
            </div>
          </div>
          <div className='field'>
            <Field
              id='age'
              name='age'
              component={TextField}
              type='text'
              theme='regular'
              label='Возраст'
            />
          </div>
          <div className='field'>
            <Field
              id='location'
              name='location'
              component={TextField}
              type='text'
              theme='regular'
              label='Город'
            />
          </div>
          <div className='field'>
            <Field
              id='email'
              name='email'
              component={TextField}
              type='email'
              theme='regular'
              label='E-mail'
            />
          </div>
          {hasResume && <div className='field'>
            <Field
              id='resume'
              name='resume'
              component={TextField}
              type='text'
              theme='regular'
              label='Ссылка на резюме'
            />
          </div>}
          {hasPortfolio && <div className='field'>
            <Field
              id='portfolio'
              name='portfolio'
              component={TextField}
              type='text'
              theme='regular'
              label='Ссылка на портфолио'
            />
          </div>}
          {hasGithub && <div className='field'>
            <Field
              id='github'
              name='github'
              component={TextField}
              type='text'
              theme='regular'
              label='Ссылка на github'
            />
          </div>}
          {hasComment && <p className='font_p16-regular about'>Хотите добавить что-то о себе?</p>}
          {hasComment && <div className='field field_type_textarea'>
            <Field
              id='message'
              name='message'
              component={TextareaField}
              theme='regular'
            />
          </div>}
          <div className='field field_type_checkbox'>
            <PrivacyPolicyCheckbox />
          </div>

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
        </FormRow><style jsx>{`
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

          h2 {
            margin-top: 6.375rem;
          }

          .field {
            margin-bottom: 2.9375rem;
          }

          .field_type_checkbox {
            margin-bottom: 3.57125rem;
          }

          .fieldset {
            margin-top: 3.625rem;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            display: flex;
            justify-content: space-between;
          }

          .fieldset .field {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            width: 50%;
          }

          .field_type_textarea {
            margin-top: 1.5rem;
            margin-bottom: 3.5rem;
          }

          .about {
            margin-top: 2.875rem;
            margin-bottom: 2.5rem;
          }

          .button {
            margin-left: auto;
            margin-right: auto;
            width: 12rem;
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.875rem;
            }

            .field_type_textarea {
              margin-bottom: 3.75rem;
            }
          }
        `}</style>
        {picture.styles}
      </form>
    )
  }
}

export default CandidateForm
