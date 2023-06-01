import { Component } from "react";
import React from "react";

import Spiner from '../Preloader/Spiner'
import { HocHelperList } from '../hoc-helper/Hoc-helper'

import './Item-list.css'

class ItemList extends Component {

    renderlist = () => {
            const data = this.props.data 
            const { choose } = this.props
            if ( data ) {
                return data.map(el => { 
                        return <span 
                            key={el.id} 
                            className="ItemList_container_"
                            onClick={ () => choose(el.id) }
                            >{el.name}
                        </span> })
            }
            return <Spiner />
        }

    render() {
        const people = this.renderlist()

        return (
            <div className="ItemList_container">
                { people }
            </div>
        )
    }
}

export default HocHelperList( ItemList );