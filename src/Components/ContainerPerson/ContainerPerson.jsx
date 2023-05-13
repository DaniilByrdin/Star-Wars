import React from "react";
import App from "../App/App";
import ItemList from '../Item-list/Item-list'
import PersonDetails from '../Person-details/Person-details'

class ContainerPerson extends App {
    render() {
        return(
            <>
                <ItemList choosePeople={this.choosePeople} />
                <PersonDetails
                    personID={this.state.personID} />
            </>
        )
    }
}

export default ContainerPerson