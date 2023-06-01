import {Component} from "react";
import React from "react";

import SwapiService from '../../API/Swapi-API'
import Spiner from '../Preloader/Spiner'

import './Random-planet.css'


class RandomPlanet extends Component {
    swapiService = new SwapiService()
    state = {
        planet: {},
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval( this.updatePlanet , 7000);
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoded = (planet) => {
        this.setState( { planet, loading: false, } )
    }
    errorFetch = ( er ) => {
        this.setState({ loading: false, error: true })
    }

    updatePlanet = () => {
        let id = Math.floor( (Math.random() * 25) + 2 )
        this.swapiService
        .getPlanet(id)
        .then(  this.onPlanetLoded )
        .catch( this.errorFetch )
    }

    render() {
        const { loading, error } = this.state
        const hasData = !( loading || error )

        const SpinerImg = loading ? <Spiner /> : null
        const PlanetComponent = hasData ? <Planet {...this.state.planet} /> : null
        const ErrorMessageComponent = error ? <ErrorMessage /> : null

        return (
            <div className="RandomPlanet_container">
                {SpinerImg}
                {PlanetComponent}
                {ErrorMessageComponent}
            </div>
        )
    }
}

const Planet = ( { id , name, population, rotationPeriod, diameter, } ) => {
    return (
        <>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet img not found" />
            <div className="RandomPlanet_container_item">
                <span className="RandomPlanet_container_name">{name}</span>
                <div className="RandomPlanet_container_item_title">
                    <span>Population: {population}</span>
                    <span>RotationPeriod: {rotationPeriod}</span>
                    <span>Diameter: {diameter}</span>
                </div>
            </div>
        </>
    )
}
const ErrorMessage = () => {
    return (
        <div>
            Errors Fetch
        </div>
    )
}

export default RandomPlanet;