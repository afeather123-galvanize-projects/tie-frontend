import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchGroup} from '../../actions/groups'
import AccessDenied from '../AccessDenied'
import Loading from '../Loading'
import {Container, Row} from 'reactstrap'
import GroupCard from '../GroupCard/GroupCard'
import CreateEventForm from '../CreateEventForm'
import GroupInviteForm from '../GroupInviteForm'
import {EventList} from '../EventList/EventListSingleGroup'

class SingleGroup extends Component {

    componentDidMount() {
        if(!this.props.group) {
            this.props.fetchGroup(this.props.group_id)
            console.log('WORKING BABY OH YEAH')
        }
    }

    render() {
        const group = this.props.group
        let render
        if(group) {
            if(group.invalid) {
                render = (<AccessDenied />)
            } else {
                const {title, image_url, description, isAdmin} = group
                render = 
                (<Container>
                    <Row>
                        <GroupCard group={group} />
                    </Row>
                    {group.isAdmin ? 
                    ([
                    <Row className="mb-2">
                        <GroupInviteForm group_id={group.id}/>
                    </Row>,
                    <Row>
                        <CreateEventForm group_id={group.id}/>
                    </Row>]) : null}
                    <h1>Events</h1>
                    <EventList group_id={group.id}/>
                </Container>)
            }
        } else {
            render = (<Loading />)
        }
        return (
            <div>
                {render}
            </div>
        )
    }
} 

const mapStateToProps = (state, props) => {
    const group_id =  props.match.params.id
    const group = state.groups.filter(group => group.id === Number(group_id))[0]
    console.log('PLEASE', state)
    const newProps = {
        group_id,
        group: null
    }
    if(group) {
        newProps.group = group
    }
    return newProps
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchGroup}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleGroup)