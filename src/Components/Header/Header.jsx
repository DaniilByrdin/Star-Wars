import {Component} from "react";
import React from "react";
import { NavLink } from "react-router-dom";

import './Header.css'


class Header extends Component {

    render() {
        return (
            <div className="Header_container">
                <div className="Header_container_item" >StarDB</div>
                <div className="Header_nav_group">
                    <NavLink to={'/characters/'} className="Header_nav_group_item">People</NavLink>
                    <NavLink to={'/planets/'}  className="Header_nav_group_item">Planets</NavLink>
                    <NavLink to={'/starships/'}  className="Header_nav_group_item">Starship</NavLink>
                    <NavLink to='/' className="Header_nav_group_item">Back</NavLink>
                    <button onClick={ this.props.setError }>SetError</button>
                </div>
            </div>
        )
    }
}

export default Header;