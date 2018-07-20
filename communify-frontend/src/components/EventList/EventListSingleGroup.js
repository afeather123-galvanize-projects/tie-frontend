import {connect} from 'react-redux'
import EventList from './EventList'
import {bindActionCreators} from 'redux'
import {fetchEvents} from '../../actions/events'

const mapStateToProps = (state, props) => {
    const events = state.events.filter(event => event.group_id === props.group_id)
    return {
        events,
        selected: props.selected
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEvents}, dispatch)

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventList)

export {EventListContainer as EventList}