import * as React from 'react'
import styled from '@emotion/styled'
import { string, func } from 'prop-types'
import { Field } from 'react-final-form'
import styles from './RadioWrapper.styles'

import RadioButton from '../RadioButton'
import { valuesByFieldNames } from '../../../../../data/express/valuesByFieldNames'
import {
  retinaRadioButtons,
  additionalOptionsRadioButtons,
} from '../../../../../data/express/radioButtonsData'

import translate from '../../../../../utils/translate-wrapper'

const radioGroups = {
  retina: retinaRadioButtons,
  additionalOptions: additionalOptionsRadioButtons,
}

const RadioWrapper = ({ className, whatGroup, t }) => {
  const radioGroup = radioGroups[whatGroup]

  return (
    <div className={className}>
      {radioGroup.map(radio => (
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
                labelText={t(radio.labelText)}
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
  t: func,
}

export default translate()(styled(RadioWrapper)`
  ${styles.base}
`)
