import {combineReducers} from 'redux'
import {user} from './user'
import {events} from './events'
import {groups} from './groups'
import {redirect_route} from './redirect_route'
import {invites} from './invites'
import {confirmation_messages} from './confirmation_messages'

const rootReducer = combineReducers({user,events, groups, redirect_route, invites, confirmation_messages})

export default rootReducer