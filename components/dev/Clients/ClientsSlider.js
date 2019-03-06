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

  handleChangeActiveClientsGroupId = e =>
    this.setState({
      activeClientsGroupId: e.target.value,
    })

  render() {
    const { activeClientsGroupId } = this.state
    const activeClients = clientsGroups.find(clientsGroup => clientsGroup.id === activeClientsGroupId).clients

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