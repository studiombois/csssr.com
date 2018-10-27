import React, { PureComponent, Fragment } from 'react'
import { Field } from 'react-final-form'
import Link from 'next/link'
import FormRow from './FormRow'
import Checkbox from '../ui-kit/Checkbox'
import Radio from '../ui-kit/Radio'
import TextField from '../ui-kit/TextField'
import TextareaField from '../ui-kit/TextareaField'
import Section from '../job/Section'
import AnimatedButton from '../ui-kit/AnimatedButton'

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
    const { sections } = this.props.vacancy
    let isBeforeQuest = true
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
    const { vacancies } = this.props

    return (
      <Fragment>
        <div>
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
        </div>
      </Fragment>
    )
  }

  renderConnectionSelection = () => {
    const { values: { connection } } = this.props

    return (
      <Fragment>
        <div className='field field_type_radio'>
          <Field
            id='telegramRadio'
            name='connection'
            value='telegram'
            type='radio'
            component={Radio}
          >
            Telegram
          </Field>
        </div>
        {connection === 'telegram' && <div className='field field_type_connection'>
          <Field
            id='telegramField'
            name='telegram'
            component={TextField}
            type='text'
            theme='regular'
            label='Логин или номер'
          />
        </div>}
        <div className='field field_type_radio'>
          <Field
            id='whatsappRadio'
            name='connection'
            value='whatsapp'
            type='radio'
            component={Radio}
          >
            WhatsApp
          </Field>
        </div>
        {connection === 'whatsapp' && <div className='field field_type_connection'>
          <Field
            id='whatsappField'
            name='whatsapp'
            component={TextField}
            type='text'
            theme='regular'
            label='Номер'
          />
        </div>}
        <div className='field field_type_radio'>
          <Field
            id='emailRadio'
            name='connection'
            value='email'
            type='radio'
            component={Radio}
          >
            E-mail
          </Field>
        </div>
        {connection === 'email' && <div className='field field_type_connection'>
          <Field
            id='emailField'
            name='email'
            component={TextField}
            type='email'
            theme='regular'
            label='E-mail'
          />
        </div>}
        <div className='field field_type_radio'>
          <Field
            id='phoneRadio'
            name='connection'
            value='phone'
            type='radio'
            component={Radio}
          >
            Телефон
          </Field>
        </div>
        {connection === 'phone' && <div className='field field_type_connection'>
          <Field
            id='phoneField'
            name='phone'
            component={TextField}
            type='text'
            theme='regular'
            label='Номер'
          />
        </div>}
        <div className='field field_type_radio'>
          <Field
            id='otherRadio'
            name='connection'
            value='other'
            type='radio'
            component={Radio}
          >
            Указан в резюме
          </Field>
        </div>
      </Fragment>
    )
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

    const { hasComment, hasFile, hasGithub, hasPortfolio, hasResume } = vacancy

    console.log(vacancy)

    return (
      <form onSubmit={this.handleSubmit}>
        <FormRow
          rightSideContent={this.renderVacancyImageAndLinks()}
          rightSideWidth='wide'
        >
          <h1>{ vacancy.name }</h1>
          <h2>Дистанционно, и на фуллтайм</h2>
          <div>{ vacancy.description }</div>
          {dividedSections.beforeQuestSections.map(section => <Section {...section} />)}
        </FormRow>
        {dividedSections.otherSections.map(section => <Section {...section} asRow />)}
        <FormRow
          rightSideContent={this.renderConnectionSelection()}
        >
          <div>
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
              <Field
                id='privacyPolicyCheckbox'
                name='consents'
                value='privacyPolicy'
                type='checkbox'
                component={Checkbox}
              >
                Я даю CSSSR своё согласие на обработку введённых мною персональных данных на условиях, изложенных политике конфиденциальности
              </Field>
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
          </div>
        </FormRow><style jsx>{`
          form {
            position: relative;
            margin-right: auto;
            margin-left: auto;
            padding-top: 8.5rem;
            padding-bottom: 31.5rem;
            align-items: center;
            border: none;
          }

          .cell:first-child {
            grid-column: 2 / span 6;
          }

          .cell:last-child {
            grid-column: 10 / span 2;
            height: 100%;
          }

          picture {
            position: absolute;
            bottom: 10.75rem;
            left: 50%;
            z-index: -1;
            width: 340px;
            height: 220px;
            transform: translateX(-50%);
          }

          img {
            width: 100%;
          }

          .headline {
            margin-bottom: 6rem;
            text-align: center;
          }

          .field {
            margin-bottom: 2.0625rem;
          }

          .field_type_checkbox {
            margin-bottom: 3.57125rem;
          }

          .field_type_radio {
            margin-bottom: 1rem;
          }

          .field_type_connection {
            margin-top: 2rem;
            margin-bottom: 3rem;
          }

          .fieldset {
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
            position: relative;
            margin-top: 1.5rem;
            margin-bottom: 3.5rem;
          }

          .about {
            position: relative;
            margin-top: 2.875rem;
            margin-bottom: 2.5rem;
          }

          .button {
            margin-left: auto;
            margin-right: auto;
            width: 12rem;
          }

          @media (min-width: 368px) and (max-width: 1279px) {
            .headline {
              margin-bottom: 2.3125rem;
            }

            .field {
              grid-column: 4 / span 6;
              margin-bottom: 1.875rem;
            }

            .field_type_textarea {
              margin-bottom: 3.75rem;
            }
          }
        `}</style>
      </form>
    )
  }
}

export default CandidateForm
