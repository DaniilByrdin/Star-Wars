import {React, Component} from "react";
import './Header.css'


class Header extends Component {
    
    render() {
        return (
            <div className="Header_container">
                <div className="Header_container_item" >StarDB</div>
                <div className="Header_nav_group">
                    <span  className="Header_nav_group_item">People</span>
                    <span  className="Header_nav_group_item">Planets</span>
                    <span  className="Header_nav_group_item">Starship</span>
                </div>
            </div>
        )
    }
}

export default Header;