import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../../actions/authorization'
import Login from './Login'

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit: login}, dispatch)

const LoginContainer = connect(null, mapDispatchToProps)(Login)

export {LoginContainer as Login}