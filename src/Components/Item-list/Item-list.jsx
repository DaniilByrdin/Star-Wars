import { React, Component } from "react";
import './Item-list.css'
import SwapiService from '../../API/Swapi-API'
import Spiner from '../Preloader/Spiner'

class ItemList extends Component {
    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
        .then( res => {
            this.setState( {
                peopleList: res
            } )
        } )
    }

    renderlistPeople = () => {
        const arrPeople = this.state.peopleList;
        if (arrPeople) {
            return arrPeople
                .map(el => { return <span 
                    to={ `/${el.id}` }
                    key={el.id} 
                    className="ItemList_container_"
                    onClick={ () => this.props.choosePeople(el.id) }
                    >{el.name}</span> })
        }
        return <Spiner />
    }

    render() {
        const people = this.renderlistPeople()

        return (
            <div className="ItemList_container">
                { people }
            </div>
        )
    }
}

export default ItemList;