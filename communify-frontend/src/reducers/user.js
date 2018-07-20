import {LOGIN, LOGOUT} from '../actions/authorization'

const initialState = {token: null, name: null}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return initialState
        default:
            return state
    }
}