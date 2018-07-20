import React, {Component} from 'react'
import {clearConfirmations} from '../actions/confirmation_messages'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class MessageClearer extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('MESSAGE_CLEARER_HISTORY',this.props.history)
        if(this.props.history !== nextProps && this.props.confirmation_messages.length > 0) {
            nextProps.clearConfirmations()
        }
    }


    render() {
        return null
    }
}

const mapStateToProps = state => {
    return {
        confirmation_messages: state.confirmation_messages
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({clearConfirmations}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessageClearer)