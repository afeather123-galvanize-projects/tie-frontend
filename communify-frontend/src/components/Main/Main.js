import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import EventPage from '../EventPage/EventPage'


class Main extends Component {
    
    render() {
        return (
            <div>
                <Route exact path="/events" component={EventPage}/>
                <Route exact path="/" render={()=>(<Redirect to="/events"/>)}/>
            </div>
        )
    }
}

export default Main