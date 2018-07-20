import {RECIEVE_CONFIRMATION, DELETE_CONFIRMATION, CLEAR_CONFIRMATIONS} from '../actions/confirmation_messages'

export const confirmation_messages = (state = [], action) => {
    switch(action.type) {
        case RECIEVE_CONFIRMATION:
            return [action.message]
        case CLEAR_CONFIRMATIONS:
            return []
        default:
            return state
    }
}