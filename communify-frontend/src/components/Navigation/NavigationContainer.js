import Navigation from './Navigation'
import {bindActionCreators} from 'redux'
import {logout} from '../../actions/authorization'
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        name: state.user.name
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch) 

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export {NavigationContainer as Navigation}
