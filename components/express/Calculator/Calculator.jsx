import React from 'react'
import { string } from 'prop-types'
import styled from '@emotion/styled'
import styles from './Calculator.styles'
import CalculatorForm from './CalculatorForm'
import Wrapper from '../Wrapper'
import Heading from '../../ui-kit/core-design/Heading'

import { L10nConsumer } from '../../../utils/l10nProvider'

const Calculator = ({ className, l10n: { translations } }) => (
  <Wrapper className={className} id="calculator" data-testid="Calculator:block">
    <div className="container">
      <Heading
        as="h2"
        className="main-title"
        type="slab"
        size="m"
        dangerouslySetInnerHTML={{ __html: translations.express.calculator.title }}
      />

      <CalculatorForm />
    </div>
  </Wrapper>
)

Calculator.propTypes = {
  className: string,
}

export default L10nConsumer(styled(Calculator)`
  ${styles.base}
`)
