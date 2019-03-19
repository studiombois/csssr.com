import React, { Fragment, PureComponent } from 'react'
import Tabs from '../Tabs'
import ClientsLogosList from './ClientsLogosList'
import clientsGroups from '../../../data/dev/clientsGroups'

const tabs = clientsGroups.map(clientsGroup => clientsGroup.id)
class ClientsSlider extends PureComponent {
  state = {
    // clientsGroups всегда массив хотя бы с одноим объектом с полями id и clients
    activeClientsGroupId: clientsGroups[0].id,
  }

  handleChangeActiveClientsGroupId = value =>
    this.setState({
      activeClientsGroupId: value,
    })

  render() {
    const { activeClientsGroupId } = this.state
    const activeClientsGroup = clientsGroups.find(clientsGroup => clientsGroup.id === activeClientsGroupId)
    const activeClients = activeClientsGroup ? activeClientsGroup.clients : []

    return (
      <Fragment>
        <Tabs
          tabs={tabs}
          activeTabId={activeClientsGroupId}
          onClick={this.handleChangeActiveClientsGroupId}
        />
        <ClientsLogosList clients={activeClients} />
      </Fragment>
    )
  }
}

export default ClientsSlider
