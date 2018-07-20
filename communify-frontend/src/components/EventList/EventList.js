import React, {Component} from 'react'
import {EventCard} from '../EventCard/EventCardContainer'

class EventList extends Component {
    componentDidMount() {
        this.props.fetchEvents()
    }

    render() {
        console.log('EVENT LIST',this.props)
        const {events, selected} = this.props
        let filteredEvents = 
        selected === 'upcoming' ? events :
        selected === 'confirmed' ? events.filter(event => event.rsvp_id) :
        selected === 'unconfirmed' ? events.filter(event => !event.rsvp_id) :
        /*otherwise*/ events
        const event_guis = filteredEvents.map(event => (<EventCard key={event.id} event={event}/>))
        return (
            <div style={{width: '80%'}}>
                {event_guis}
            </div>
        )
    }
} 

export default EventList