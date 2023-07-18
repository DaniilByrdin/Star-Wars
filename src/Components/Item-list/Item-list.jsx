import { Component } from "react";
import React from "react";

import { HocHelperList } from '../Hoc-helper/Hoc-helper'

import './Item-list.css'
import { Link } from "react-router-dom";


class ItemList extends Component { 

    renderlist = () => {
        const data = this.props.data
        const { choose } = this.props

        
        if (data) {
            const { type } = this.props

            return data.map(el => {
                return ( 
                <Link   to={ `/${type}/${el.id}`} 
                        key = { el.id } 
                        className="ItemList_container_" 
                        onClick={ () => choose(el.id)} > { el.name } 
                </Link> )
        }) 
    }
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