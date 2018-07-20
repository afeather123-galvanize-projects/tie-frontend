import GroupList from './GroupList'
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    let groups = state.groups.filter(group => !group.invalid)
    if(props.selected === 'your_groups') {
        groups = groups.filter(group => group.isAdmin)
    }
    return {
        groups
    }
}

export default connect(mapStateToProps)(GroupList)