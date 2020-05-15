import * as React from 'react'
import styled from '@emotion/styled'
import { string } from 'prop-types'
import { Field } from 'react-final-form'
import styles from './RadioWrapper.styles'

import RadioButton from '../RadioButton'
import { valuesByFieldNames } from '../../../../../data/express/valuesByFieldNames'
import {
  additionalOptionsRadioButtons,
  retinaRadioButtons,
} from '../../../../../data/express/radioButtonsData'

import { L10nConsumer } from '../../../../../utils/l10nProvider'

const radioGroups = {
  retina: retinaRadioButtons,
  additionalOptions: additionalOptionsRadioButtons,
}

const RadioWrapper = ({ className, whatGroup, l10n: { translations } }) => {
  const radioGroup = radioGroups[whatGroup]

  return (
    <div className={className}>
      {radioGroup.map((radio) => (
        <Field
          name={radio.name}
          key={radio.id}
          value={radio.id}
          type="radio"
          render={({ input }) => {
            const labelPrice = valuesByFieldNames[radio.id]

            return (
              <RadioButton
                {...input}
                className="radio-item"
                labelText={radio.labelText(translations)}
                labelPrice={labelPrice === 0 ? 'Free' : `~$${labelPrice}`}
                testIdRadioButton={`calculator:field:radioButton.${radio.id}`}
                testIdLabel={`calculator:text:label.${radio.id}`}
              />
            )
          }}
        />
      ))}
    </div>
  )
}

RadioWrapper.propTypes = {
  className: string,
  whatGroup: string,
}

export default L10nConsumer(styled(RadioWrapper)`
  ${styles.base}
`)
