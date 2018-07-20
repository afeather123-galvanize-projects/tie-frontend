import {connect} from 'react-redux'
import EventList from './EventList'
import {bindActionCreators} from 'redux'
import {fetchEvents} from '../../actions/events'

const mapStateToProps = (state, props) => {
    return {
        events: state.events,
        selected: props.selected
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEvents}, dispatch)

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventList)

export {EventListContainer as EventList}