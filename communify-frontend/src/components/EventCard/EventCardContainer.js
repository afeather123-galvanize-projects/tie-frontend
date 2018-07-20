import {connect} from 'react-redux'
import EventCard from './EventCard'
import {bindActionCreators} from 'redux'
import {rsvp, cancelRsvp} from '../../actions/events'

const mapStateToProps = (state, props) => {
    return props
}

const mapDispatchToProps = dispatch => bindActionCreators({rsvp, cancel: cancelRsvp}, dispatch)

const EventCardContainer = connect(mapStateToProps, mapDispatchToProps)(EventCard)

export {EventCardContainer as EventCard}