import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from './Loading'
import AccessDenied from './AccessDenied'
import {Container} from 'reactstrap'
import {bindActionCreators} from 'redux'
import {fetchEvent} from '../actions/events'
import {EventCard} from './EventCard/EventCardContainer'

class SingleEvent extends Component {
    
    componentDidMount() {
        if(!this.props.event) {
            this.props.fetchEvent(this.props.event_id)
        }
    }

    render() {
        const {event} = this.props
        let render;
        if(event) {
            if(event.invalid) {
                render = <AccessDenied />
            } else {
                render = <EventCard event={event} />
            }
        } else {
            render = (<Loading />)
        }
        return (
            <Container>
                {render}
            </Container>
        )
    }
}

const mapStateToProps = (state, props) => {
    const event_id =  props.match.params.id
    const event = state.events.filter(event => event.id === Number(event_id))[0]
    const newProps = {
        event_id,
        event: null
    }
    if(event) {
        newProps.event = event
    }
    return newProps
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEvent}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent)