import {RECIEVE_INVITES, DELETE_INVITE} from '../actions/invites'

export const invites = (state = [], action) => {
    switch(action.type) {
        case RECIEVE_INVITES:
            return [...action.invites]
        case DELETE_INVITE:
            return state.filter(invite => invite.group_id !== action.group_id)
        default:
            return state
    }
}