import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {completeRedirect} from '../actions/redirect_route'

class PageRedirect extends Component {

    componentWillMount() {
        if(this.props.redirect_route) {
            this.props.completeRedirect()
            this.props.history.push(this.props.redirect_route)
        }
    }
    
    componentWillUpdate(nextProps) {
        if(nextProps.redirect_route) {
            nextProps.completeRedirect()
            nextProps.history.push(nextProps.redirect_route)
        }
    }

    render() {
        return null
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props,
        redirect_route: state.redirect_route,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({completeRedirect}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PageRedirect)