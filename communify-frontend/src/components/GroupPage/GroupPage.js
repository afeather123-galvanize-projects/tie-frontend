import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchGroups} from '../../actions/groups'
import {Container} from 'reactstrap'
import GroupList from '../GroupList/GroupListContainer'
import GroupFilter from '../GroupFilter'
import CreateGroupForm from '../CreateGroupForm'

class GroupPage extends Component {

    componentDidMount() {
        if(this.props.fetchGroups) {
            this.props.fetchGroups()
        }
    }

    state = {
        selected: 'all_groups'
    }

    changeSelection = (selected) => {
        this.setState({selected})
    }

    render() {
        const show = this.state.selected !== 'create_group' ? (<GroupList selected={this.state.selected}/>) : <CreateGroupForm />;
        
        return (
            <Container>
                <GroupFilter 
                selected={this.state.selected}
                changeSelection={this.changeSelection}/>
                {show}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        groups: state.groups
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchGroups}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GroupPage)