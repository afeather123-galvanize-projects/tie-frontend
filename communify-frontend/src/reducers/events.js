import {RECIEVE_EVENTS, RSVP, CANCEL_RSVP} from '../actions/events'

function recieveEvents(state, action) {
    const newState = [...action.events]
    state.forEach(event => {
        if(newState.filter(e => e.id === event.id).length <= 0) {
            newState.push(event)
        }
    })
    return newState
}

export const events = (state = [], action) => {
    switch(action.type) {
        case RECIEVE_EVENTS:
            return recieveEvents(state, action)
        case RSVP:
            return state.map(event => {
                if(event.id === action.event) {
                    return {...event, rsvp_id: true}
                }
                return event
            })
        case CANCEL_RSVP:
            return state.map(event => {
                if(event.id === action.event) {
                    return {...event, rsvp_id: false}
                }
                return event
            })
        default:
            return state
    }
}