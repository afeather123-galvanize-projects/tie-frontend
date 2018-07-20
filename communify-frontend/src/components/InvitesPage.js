import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchInvites} from '../actions/invites'
import {Container, Row, Col} from 'reactstrap'
import InvitationCard from './InvitationCard'

class InvitesPage extends Component {

    componentDidMount() {
        this.props.fetchInvites()
    }

    render(){
        const {invites} = this.props
        const invite_cards = invites.map(invite => (
            <Row>
                <InvitationCard group={invite}/>
            </Row>
        ))

        return (
            <Container>
                {invite_cards}
            </Container>
        )
    } 
}

const mapStateToProps = state => {
    return {
        invites: state.invites
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchInvites}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InvitesPage)