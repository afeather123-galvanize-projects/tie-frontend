import React, {Component} from 'react'
import NotificationBadge from 'react-notification-badge';
import {connect} from 'react-redux'
import {fetchInvites} from '../actions/invites'
import {bindActionCreators} from 'redux'
import {Badge, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'
import {Link} from 'react-router-dom'

class InviteNotificationBadge extends Component {
    componentDidMount() {
        this.props.fetchInvites()
    }

    state = {
        dropdownOpen: true
    };

    toggle = () => {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const {invites} = this.props
        return (
            <Link to="/invites"><Badge color="warning" style={{cursor: 'pointer'}}>Invites {invites.length}</Badge></Link>  
        )
    }
} 

const mapStateToProps = state => {
    return {
        invites: state.invites
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchInvites}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InviteNotificationBadge)