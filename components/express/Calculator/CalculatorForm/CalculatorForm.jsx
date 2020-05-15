import React, { useEffect, useState } from 'react'
import { any, bool, func, string } from 'prop-types'
import { Field, Form, FormSpy } from 'react-final-form'
import createFocusDecorator, { getFormInputs } from 'final-form-focus'
import styled from '@emotion/styled'
import styles from './CalculatorForm.styles'
import cn from 'classnames'

import InputControl from './InputControl'
import Checkbox from './Checkbox'
import RadioWrapper from './RadioWrapper'
import DropdownButton from './DropdownButton'
import Note from './Note'
import FormStateMessage from './FormStateMessage'
import Label from './Label'
import Heading from '../../../ui-kit/core-design/Heading'
import Text from '../../../ui-kit/core-design/Text'
import TextFieldRegular from '../../../ui-kit/core-design/TextFieldRegular'
import TextareaLight from '../../../ui-kit/core-design/TextareaLight'
import AnimatedButton from '../../../ui-kit/core-design/AnimatedButton'

import callbackTextFields from '../../../../data/express/callBackTextFields'
import browsers from '../../../../data/express/browsers'
import { calcLayoutSum, valuesByFieldNames } from '../../../../data/express/valuesByFieldNames'

import createDecorator from '../../../../utils/createDecorator'
import normalizePrice from '../../../../utils/normalizePrice'
import normalizeNumberOfPages from '../../../../utils/normalizeNumberOfPages'
import calculatorFormValidationRules from '../../../../utils/validators/calculatorFormValidationRules'
import submitFormCalculatorForm from '../../../../utils/submitFormCalculatorForm'

import translate from '../../../../utils/translate-wrapper'

const formName = 'calculatorForm'
const focusOnErrorsDecorator = createFocusDecorator(getFormInputs(formName))
const calculator = createDecorator

const handleAnyValuesChange = (formState) => {
  if (typeof window !== 'undefined' && !formState.pristine) {
    window.dataLayer.push({ event: `calculator_interaction` })
  }
}

const OriginCalculatorForm = (props) => {
  const [status, setStatus] = useState('pending')
  const [isDropdownVisible, toggleDropdown] = useState(false)
  const [isDesiredScreenWidth, setDesiredScreenWidth] = useState(false)
  const [submittedToServer, setSubmitToServerStatus] = useState(false)

  useEffect(() => {
    const isSmallDevice = window.matchMedia('(max-width: 1023px)').matches

    setDesiredScreenWidth(isSmallDevice)
    toggleDropdown(!isDesiredScreenWidth)
  }, [isDesiredScreenWidth])

  const handleStatus = (formState) => {
    const { submitting, submitFailed } = formState
    // this.props.dirtySinceLastSubmit к сожалению не подходит,
    // потому что не отслеживает первое изменение после сабмита,
    // а сравнивает значения формы во время сабмита с текущими.
    // Поэтому dirtySinceLastSubmit false, когда форму поменяли и вернули значения как на момент сабмита.
    if (submitting) {
      return setStatus('submitting')
    }

    if (submittedToServer) {
      if (submitFailed) {
        return setStatus('fail')
      }
      return setStatus('success')
    }

    return setStatus('pending')
  }

  const handleSubmit = (e) => {
    const { handleSubmit, onSubmitResolve } = props
    // Может быть undefined если были ошибки валидации
    // или Promise если запрос отправлен
    const submitResult = handleSubmit(e)

    if (submitResult) {
      setSubmitToServerStatus(true)

      return submitResult.then(() => {
        if (onSubmitResolve) {
          onSubmitResolve(handleStatus())
        }
      })
    }
  }

  const handleTryToFillFormAgain = () => {
    setSubmitToServerStatus(false)
    setStatus(false)
  }

  const { className, values, t } = props
  //TODO обернуть компоненты полей ввода в обертки
  return (
    <form onSubmit={handleSubmit} className={className} id={formName} name={formName}>
      <FormSpy
        onChange={handleAnyValuesChange}
        subscription={{
          values: true,
          pristine: true,
        }}
      />

      <FormSpy
        onChange={handleStatus}
        subscription={{
          submitFailed: true,
          submitting: true,
        }}
      />

      <div className="form-fields">
        <fieldset>
          <legend tabIndex="-1">
            <Heading
              as="h3"
              className="second-title"
              type="regular"
              size="m"
              dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset1.title') }}
            />
          </legend>

          <div className="pages-counter">
            <Field
              name="parceForm_numberOfPages"
              parse={normalizeNumberOfPages}
              render={({ input }) => (
                <InputControl
                  {...input}
                  type="text"
                  maxLength="3"
                  className="input-control"
                  label={t('express:calculator.form.fieldset1.fieldLabel')}
                  testidInput="calculator:field:basic.value"
                  testidBtnIncrement="calculator:button:basic.increment"
                  testidBtnDecrement="calculator:button:basic.decrement"
                />
              )}
            />

            <Field
              id="parceForm_hotProject"
              name="parceForm_hotProject"
              type="checkbox"
              component={Checkbox}
              testId="calculator:field:checkbox.hotProject"
            >
              <Label text={t('express:calculator.form.fieldset1.checkboxLabel')} />
            </Field>
          </div>
        </fieldset>

        <fieldset className="layout">
          <legend tabIndex="-1">
            <Heading
              as="h4"
              className="section-head"
              type="regular"
              size="s"
              dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset2.title') }}
            />
          </legend>

          <Note
            className="note"
            dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset2.note') }}
          />

          <Field
            name="parceForm_designPerPage"
            parse={normalizeNumberOfPages}
            render={({ input }) => (
              <InputControl
                {...input}
                className="input-control"
                label={t('express:calculator.form.fieldset2.fieldLabel')}
                maxLength="3"
                testidInput="calculator:field:layout.value"
                testidBtnIncrement="calculator:button:layout.increment"
                testidBtnDecrement="calculator:button:layout.decrement"
              />
            )}
          />

          <div className="text-price">
            <Text type="regular" size="m">
              {t('express:calculator.form.fieldset2.dynamicText.base')}
              <b>
                {values.parceForm_designPerPage <= 1
                  ? t('express:calculator.form.fieldset2.dynamicText.option1')
                  : t('express:calculator.form.fieldset2.dynamicText.option2')}
              </b>
            </Text>

            <Text type="regular" size="m" className="text-price_color_blue">
              {values.parceForm_designPerPage <= 1
                ? t('express:calculator.form.fieldset2.dynamicText.price')
                : `$${calcLayoutSum(
                    values.parceForm_designPerPage,
                    values.parceForm_numberOfPages,
                  )}`}
            </Text>
          </div>
        </fieldset>

        <fieldset className="browser-support">
          <legend tabIndex="-1">
            <Heading
              as="h4"
              className="section-head"
              type="regular"
              dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset3.title') }}
            />
          </legend>

          <Field
            id="parceForm_recommendations"
            name="parceForm_recommendations"
            className="checkbox-item"
            type="checkbox"
            component={Checkbox}
            testId="calculator:field:checkbox.recommendations"
          >
            <Label
              text={t('express:calculator.form.fieldset3.checkboxLabel1')}
              price="Free"
              testId="calculator:text:label.recommendations"
            />
          </Field>

          <Text
            className="recommendations"
            type="perforator"
            dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset3.subtitle') }}
          />

          <div className="checkbox-wrapper">
            {browsers.map((browser) => (
              <Field
                id={browser.name}
                name={browser.name}
                className={browser.className}
                type="checkbox"
                key={browser.name}
                component={Checkbox}
                testId={`calculator:field:checkbox.${browser.name.split('_')[1]}`}
              >
                <Label
                  text={t(browser.text)}
                  price={valuesByFieldNames[browser.name]}
                  testId={`calculator:text:price.${browser.name.split('_')[1]}`}
                />
              </Field>
            ))}
          </div>

          <div
            className={cn(
              'browser',
              `${props.values.parceForm_other ? 'browser_visible' : 'browser_hidden'}`,
            )}
          >
            <Note
              className="note"
              colorTheme="primary"
              dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset3.note') }}
            />

            <Field
              name="additional_browsers"
              type="text"
              render={({ input }) => (
                <TextFieldRegular
                  {...input}
                  className="text-field text-field_short"
                  label={t('express:calculator.form.fieldset3.fieldLabel')}
                />
              )}
            />
          </div>
        </fieldset>

        {isDesiredScreenWidth && (
          <DropdownButton
            isExpanded={isDropdownVisible}
            onClick={() => toggleDropdown(!isDropdownVisible)}
          />
        )}

        {isDropdownVisible && (
          <div>
            <fieldset className="retina">
              <legend tabIndex="-1">
                <Heading
                  as="h4"
                  className="section-head"
                  type="regular"
                  dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset4.title') }}
                />
              </legend>

              <RadioWrapper whatGroup="retina" />
            </fieldset>

            <fieldset className="additional-options">
              <legend tabIndex="-1">
                <Heading
                  as="h3"
                  className="section-head"
                  type="regular"
                  size="m"
                  dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset5.title') }}
                />
              </legend>

              <div className="note note_margin_m">
                <Note
                  colorTheme="primary"
                  dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset5.note') }}
                />
              </div>

              <RadioWrapper className="radio-wrapper" whatGroup="additionalOptions" />
            </fieldset>

            <fieldset className="about-project">
              <legend className="title-group" tabIndex="-1">
                <Heading
                  as="h3"
                  type="regular"
                  size="m"
                  dangerouslySetInnerHTML={{
                    __html: t('express:calculator.form.fieldset6.title1'),
                  }}
                />

                <Heading
                  as="h3"
                  className="section-head margin-m"
                  type="regular"
                  size="m"
                  dangerouslySetInnerHTML={{
                    __html: t('express:calculator.form.fieldset6.title2'),
                  }}
                />
              </legend>

              <Field
                name="message"
                render={({ input }) => (
                  <TextareaLight
                    {...input}
                    className="brief"
                    placeholder={t('express:calculator.form.fieldset6.fieldLabel')}
                    rows="6"
                    data-testid="calculator:field:brief"
                  />
                )}
              />
            </fieldset>
          </div>
        )}
      </div>

      {isDropdownVisible && (
        <aside className="fixed-container">
          <div className="fixed-element" id="fixed-element">
            <div className="text-price">
              <Heading
                as="h3"
                className="section-head section-head_no-margin"
                type="regular"
                size="m"
                dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset7.title') }}
              />

              <Field
                className="total-value"
                name="total"
                component="input"
                type="text"
                format={normalizePrice}
                readOnly
                tabIndex="-1"
                data-testid="calculator:field:totalValue"
              />
            </div>
            <Text
              className="text-price-mention"
              type="regular"
              size="s"
              dangerouslySetInnerHTML={{ __html: t('express:calculator.form.fieldset7.subtitle') }}
            />

            <div className="input-wrapper">
              {callbackTextFields.map((callbackTextFields) => (
                <Field
                  name={callbackTextFields.name}
                  key={callbackTextFields.name}
                  render={({ input, meta }) => (
                    <TextFieldRegular
                      {...input}
                      error={meta.touched && meta.error}
                      className="text-field text-field_loop"
                      label={t(callbackTextFields.label)}
                      data-testid={`calculator:field:${callbackTextFields.name}`}
                    />
                  )}
                />
              ))}
            </div>

            <AnimatedButton
              type="submit"
              status={status}
              className="submit-btn"
              data-testid="calculator:button:animatedButton"
            >
              <Text
                type="perforator"
                size="m"
                className="button-content"
                as="span"
                dangerouslySetInnerHTML={{ __html: t('express:calculator.form.submit') }}
              />
            </AnimatedButton>

            <FormStateMessage
              status={status}
              onTryAgain={handleTryToFillFormAgain}
              feedbackEmail="sales@csssr.io"
            />
          </div>
        </aside>
      )}
    </form>
  )
}

const CalculatorForm = ({ t, lng }) => (
  <Form
    onSubmit={submitFormCalculatorForm('/api/submit-calculator-form', formName, lng)}
    initialValues={{
      total: 200,
      parceForm_numberOfPages: '1',
      parceForm_designPerPage: '1',
      parceForm_recommendations: true,
      parceForm_retina: 'retina_1',
      parceForm_additionalOptions: 'additional-option_1',
    }}
    subscription={{ values: true }}
    decorators={[calculator, focusOnErrorsDecorator]}
    validate={calculatorFormValidationRules(t)}
    component={translate(styled(OriginCalculatorForm)`
      ${styles.base}
    `)}
  />
)

OriginCalculatorForm.propTypes = {
  values: any,
  className: string,
  handleSubmit: func,
  onSubmitResolve: func,
  submitting: bool,
  submitFailed: bool,
}

export default translate(CalculatorForm)
