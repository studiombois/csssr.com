import React from 'react'
import { string, func } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Calculator.styles'
import CalculatorForm from './CalculatorForm'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'

import translate from '../../../utils/translate-wrapper'

const Calculator = ({ className, t }) => (
  <Wrapper className={className} id="calculator">
    <div className="container">
      <Heading
        as="h2"
        className="main-title"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: t('express:calculator.title') }}
      />

      <CalculatorForm />
    </div>
  </Wrapper>
)

Calculator.propTypes = {
  className: string,
  t: func,
}

export default translate(styled(Calculator)`
  ${styles.base}
`)
