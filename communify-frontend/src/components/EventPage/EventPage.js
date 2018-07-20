import React, {Component} from 'react'
import {Container, Row} from 'reactstrap'
import EventFilter from '../../components/EventFilter/EventFilter'
import {EventList} from '../EventList/EventLIstContainer';

class EventPage extends Component {
    
    state = {
        selected: 'upcoming'
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <EventFilter 
                    selected={this.state.selected}
                    changeSelection={(selected)=>this.setState({selected})}/>
                </Row>
                <Row>
                    <EventList 
                    selected={this.state.selected}
                    />
                </Row>
            </Container>
        )
    }
}

export default EventPage