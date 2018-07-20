import {fetchProtected} from './authorization'

export const RECIEVE_INVITES = 'RECIEVE_INVITES'
export const DELETE_INVITE = 'DELETE_INVITE'

export const fetchInvites = () => async (dispatch, getState) => {
    const invites = await fetchProtected('http://localhost:8000/invites', 'GET', getState().user.token)
    dispatch({type: RECIEVE_INVITES, invites})
}

export const deleteInvite = (group_id) => {
    return {
        type: DELETE_INVITE,
        group_id
    }
} 