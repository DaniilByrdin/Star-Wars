import { Component} from "react";
import React from "react";

import Spiner from "../Preloader/Spiner";
import { HocHelperDetail } from '../hoc-helper/Hoc-helper'

import './Details.css'

class Details extends Component {

    render() {

        const {name, loading} = this.props.data
        const srcImg = `https://starwars-visualguide.com/assets/img/${this.props.type}/${this.props.itemID}.jpg`

        if ( !name ) {
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
                    <DetailsItem 
                                srcImg = { srcImg } 
                                name = { name }
                                data = { this.props.data }
                    />
                </div>
            </div>
        )
    }
}

const DetailsItem = ({ srcImg,  name,  data}) => {
    return (
        <>
            <img
                src={srcImg}
                alt="Person img not found" />
            <div className="PersonDetails_container_title">
                <div className="PersonDetails_container_name">
                    Name:
                    <span className="data">{name}</span></div>
                <div className="PersonDetails_container_title_item">
                    {Object.entries(data)
                        .map(el => {
                            if (el.includes('id')) { return null }
                            return <span key={el[0]}>{
                                el[1] ? `${el[0]}: ${el[1]}` : `${el[0]}: Not found`
                            }</span>
                        })}
                </div>
            </div>
        </>
    )
}

const Com = () => {
    return (
        <div className="Select">Select character</div>
    )
}

export default HocHelperDetail( Details );
