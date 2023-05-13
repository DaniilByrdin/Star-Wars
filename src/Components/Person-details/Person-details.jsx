import {React, Component} from "react";
import './Person-details.css'
import SwapiService from '../../API/Swapi-API'
import Spiner from "../Preloader/Spiner";

class PersonDetails extends Component {
    swapiService = new SwapiService()

    state = { 
        person: {},
        choose: false,
        loading: false,
    }

    componentDidUpdate = ( prevProps ) => {
        if(prevProps.personID !== this.props.personID) {
            this.setState( { 
                person: { ...this.state.person },
                choose: true,
                loading: true, } )
            this.swapiService.getPerson(this.props.personID)
            .then( res => {
                if( (res.birthYear && res.eyeColorPerson) === undefined ) {
                    this.setState( {
                        person: { ...res, birthYear: 'unknown', eyeColorPerson: 'unknown' },
                        loading: false,
                    } )
                }
                this.setState({ person: res, loading: false, })
            } )
        }
    }

    render() {

        const { name, gender, birthYear, eyeColor } = this.state.person
        const { loading, choose } = this.state

        if (!choose) {
            return <Com />
        } 
        if (loading) {
            return (
                <div className="Spiner">
                    <Spiner />
                </div>
            )
        }
        return (
            <div className="PersonDetails_container">
                <div className="PersonDetails_container_item">
                    <img src="123" alt="Person img not found" />
                    <div className="PersonDetails_container_title">
                        <div className="PersonDetails_container_name">Name: <span className="data">{name}</span></div>
                        <div className="PersonDetails_container_title_item">
                            <span>Gender: <span className="data">{gender}</span></span>
                            <span>Birth Year: <span className="data">{birthYear}</span></span>
                            <span>Eye Color: <span className="data">{eyeColor}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Com = () => {
    return (
        <div className="Select">Select character</div>
    )
}

export default PersonDetails;
