import {REVCIEVE_GROUPS} from '../actions/groups'

function recieveGroups(state, action) {
    const newState = [...action.groups]
    state.forEach(group => {
        if(newState.filter(g => g.id === group.id).length <= 0) {
            newState.push(group)
        }
    })
    return newState
}

export const groups = (state = [], action) => {
    switch(action.type) {
        case REVCIEVE_GROUPS:
            return recieveGroups(state, action)
        default:
            return state
    }
}