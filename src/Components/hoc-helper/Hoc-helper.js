import React from "react";
import { Component } from "react";

import Spiner from '../Preloader/Spiner'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

export const HocHelperList = ( Component ) => {
    
    return class extends React.Component {
        
        state = {
            data: null,
            loading: false,
            Error: false,
        }

        ErrorComponent = () => {
            this.setState( {
                Error: true,
            } )
        }
    
        componentDidUpdate = ( prevProps ) => {
            if ( prevProps.type !== this.props.type ) {
                const { getData } = this.props

                this.setState({
                    loading: true
                })

                getData()
                .then(res => {
                    this.setState({
                        loading: false,
                        data: res,
                    })
                })
                .catch( this.ErrorComponent )
            }
        }
        
    
        componentDidMount() {
            const { getData } = this.props

            this.setState({ 
                loading: true
            }) 
            getData()
            .then( res => {
                this.setState( {
                    data: res,
                    loading: false
                } )
            })
            .catch( this.ErrorComponent )
        }
        
        render() {
            if( this.state.Error ) {
                return <ErrorComponent />
            }
            
            if (this.state.loading) {
                return <Spiner />
            }

            return <Component {...this.props} { ...this.state } SetError = { this.ErrorComponent } />
        }
    }     
}

export const HocHelperDetail = ( Component ) => {
    return class extends React.Component {
        state = { 
            data: {},
            choose: false,
            loading: false,
        }
    
        componentDidUpdate = ( prevProps ) => {
            const { itemID } = this.props
            const { getItem } = this.props

            if( (prevProps.itemID !== itemID || prevProps.type !== this.props.type) ) {
                if(itemID !== null) {
                    this.setState({
                        data: { ...this.state.data },
                        choose: true,
                        loading: true,
                    })
                    getItem(itemID)
                        .then(res => {
                            this.setState({ data: res, loading: false, })
                        })
                } else {
                    this.setState({
                        data: {},
                        choose: false,
                        loading: false,
                    })
                }
            }
        }

        render() {

            if ( this.state.loading ) {
                return (
                    <div className="Spiner">
                        <Spiner />
                    </div>
                )
            }

            return(
                <Component {...this.props} { ...this.state } />
            )
        }
    }
}

// поработать с PropsChildren и reactComponentClone 