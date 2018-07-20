import {REDIRECT_ROUTE, COMPLETE_REDIRECT} from '../actions/redirect_route'

export const redirect_route = (state = null, action) => {
    switch(action.type) {
        case REDIRECT_ROUTE:
            return action.route
        case COMPLETE_REDIRECT:
            return null
        default:
            return state
    }
}