import React from "react";
import { Component } from "react";

export const HocHelperList = ( Component ) => {
    
    return class extends Component {
        
        state = {
            data: null
        }
    
        componentDidUpdate = ( prevProps ) => {
            if(prevProps !== this.props) {
                const { getData } = this.props
                getData().then(res => {
                    this.setState({
                        data: res
                    })
                })
            }
        }
    
        componentDidMount() {
            const { getData } = this.props 
            getData().then( res => {
                this.setState( {
                    data: res
                } )
            } )
        }
        
        render() {
            return <Component {...this.props} data = { this.state.data } />
        }
    }     
}
export const HocHelperDetail = ( Component ) => {
    return class extends Component {
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
            return(
                <Component {...this.props}  data = { this.state.data }/>
            )
        }
    }
}

// поработать с PropsChildren и reactComponentClone 