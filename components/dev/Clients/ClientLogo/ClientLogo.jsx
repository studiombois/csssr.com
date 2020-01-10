import React from 'react'
import { string } from 'prop-types'
import translate from '../../../../utils/translate-wrapper'
import styled from '@emotion/styled'
import styles from './ClientLogo.styles'

const ClientLogo = ({ className, t, clientId }) => (
  <img
    className={className}
    src={require(`../../../../static/icons/dev/clients/${clientId}.svg`).default}
    alt={t(`dev:clients.imgAlts.${clientId}`)}
  />
)

ClientLogo.propTypes = {
  clientId: string,
}

export default styled(translate()(ClientLogo))`
  ${styles}
`
