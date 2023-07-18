import React, { Component } from "react";

import ErrorComponent from "../ErrorComponent/ErrorComponent";

import List from "../Item-list/Item-list";
import Details from "../Details/Details";

import './Hoc-error.css'



export default class HocError extends React.Component {

        state = {
            ErrorComponent: false
        }

        SetError() {
            this.setState({
                ErrorComponent: !this.state.ErrorComponent
            })
        }

        render() {
            const error = this.state.ErrorComponent

            if (error) {
                return (
                    <div className="Container_Error">
                        <ErrorComponent />
                        <button className="Container_Error_Btn" onClick={ () => this.SetError() }>SetError</button>
                    </div>
                )
            }

            return (
                <>
                    <button className="Container_Error_Btn" onClick={ () => this.SetError() }>SetError</button>
                    <div className="Container_data_main">
                        <List choose={this.props.choose} type={this.props.type} getData={this.props.getData} />
                        <Details getItem={this.props.getItem} itemID={this.props.itemID} type={this.props.type} />
                    </div>
                </>
            )
        }
    }
