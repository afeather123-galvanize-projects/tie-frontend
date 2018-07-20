import {fetchProtected} from '../actions/authorization'
import {redirectRoute} from './redirect_route'
export const RECIEVE_EVENTS = 'RECIEVE_EVENTS'


export const fetchEvents = () => async (dispatch, getState) => {
    const token = getState().user.token
    if(token) {
        const events = await fetchProtected('http://localhost:8000/events', 'GET', token)
        dispatch({type: RECIEVE_EVENTS, events})
    } else {
        dispatch({type: RECIEVE_EVENTS, events: []})
    }
}

export const fetchEvent = id => async (dispatch, getState) => {
    const events = await fetchProtected(`http://localhost:8000/events/${id}`, 'GET', getState().user.token)
    dispatch({type: RECIEVE_EVENTS, events})
}

export const createEvent = req_body => async (dispatch, getState) => {
    const events = await fetchProtected('http://localhost:8000/create_event', 'POST', getState().user.token, req_body)
    dispatch({type: RECIEVE_EVENTS, events})
    dispatch(redirectRoute(`/events/${events[0].id}`))
}

export const RSVP = 'RSVP'
export const rsvp = (event_id) => async (dispatch, getState) => {
    const event = await fetchProtected('http://localhost:8000/events/rsvp', 'POST', getState().user.token, {event_id})
    dispatch({type: RSVP, event})
}

export const CANCEL_RSVP = 'CANCEL_RSVP'
export const cancelRsvp = (event_id) => async (dispatch, getState) => {
    const event = await fetchProtected('http://localhost:8000/events/cancel', 'DELETE', getState().user.token, {event_id})
    dispatch({type: CANCEL_RSVP, event})
}