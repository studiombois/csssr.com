import React, { Fragment } from 'react'
import { string } from 'prop-types'
import translate from '../../../utils/translate-wrapper'

const ClientLogo = ({ t, clientId }) =>
  <Fragment>
    <img
      src={require(`../../../static/icons/dev/clients/${clientId}.svg`)}
      alt={t(`dev:clients.imgAlts.${clientId}`)}
    />
    <style jsx>{`
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `}</style>
  </Fragment>

ClientLogo.propTypes = {
  clientId: string,
}

export default translate()(ClientLogo)