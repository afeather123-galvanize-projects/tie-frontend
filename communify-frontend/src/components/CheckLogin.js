import React, {Component} from 'react'
import {connect} from 'react-redux'

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            console.log('AUTH PROPS', this.props)
           if(this.props.user.name && this.props.user.token) {
               this.props.history.push('/events')
           } 
        }

        componentWillUpdate(nextProps) {
            if(nextProps.user.name && nextProps.user.token) {
                this.props.history.push('/events')
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }
    
    return connect(mapStateToProps)(Authentication)
}