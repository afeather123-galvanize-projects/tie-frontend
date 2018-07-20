import {fetchProtected} from './authorization'
import {deleteInvite} from './invites'
import {redirectRoute} from './redirect_route'
import {recieveConfirmation} from './confirmation_messages'
export const REVCIEVE_GROUPS = 'RECIEVE_GROUPS'

export const fetchGroups = () => async (dispatch, getState) => {
    const groups = await fetchProtected('http://localhost:8000/groups', 'get', getState().user.token)
    dispatch({type: REVCIEVE_GROUPS, groups})
}

export const fetchGroup = (group_id) => async (dispatch, getState) => {
    const groups = await fetchProtected(`http://localhost:8000/groups/${group_id}`, 'get', getState().user.token)
    dispatch({type: REVCIEVE_GROUPS, groups})
}

export const createGroup = (payload) => async (dispatch, getState) => {
    const groups = await fetchProtected(`http://localhost:8000/create_group`, 'post', getState().user.token, payload)
    dispatch({type: REVCIEVE_GROUPS, groups})
    dispatch(redirectRoute(`/groups/${groups[0].id}`))
}

export const inviteToGroup = (payload) => async (dispatch, getState) => {
    const message = await fetchProtected('http://localhost:8000/invite_to_group', 'post', getState().user.token, payload)
    dispatch(recieveConfirmation(message))
}

export const acceptInvitation = (group_id) => async (dispatch, getState) => {
    const groups = await fetchProtected(`http://localhost:8000/accept_invite`, 'post', getState().user.token, {group_id})
    dispatch({type: REVCIEVE_GROUPS, groups})
    dispatch(deleteInvite(groups[0].id))
    dispatch(redirectRoute(`/groups/${groups[0].id}`))
}