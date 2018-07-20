import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {inviteToGroup} from '../actions/groups'
import {Input, Button, Form, FormGroup, Label, Alert} from 'reactstrap'

class GroupInviteForm extends Component {
    state = {
        email: '',
    }

    handleSubmit = e => {
        e.preventDefault()
        const payload = {...this.state}
        payload.group_id = this.props.group_id
        this.setState({email: ''})
        this.props.inviteToGroup(payload)
    }

    render() {
        let {success_message} = this.props
        let flash
        if(success_message) {
            if(success_message.invite_success) {
                flash = (<Alert color="success">
                Invitation sent!
              </Alert>)
            } else {
                flash = (<Alert color="warning">
                Error - invalid email!
              </Alert>)
            }
        } else {
            flash = null
        }
        return (
            <div className="mb-2">
            <Form inline
            onSubmit={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Invite a friend</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
              onChange={e=>{this.setState({email: e.target.value})}}/>
            </FormGroup>
            <Button>Invite</Button>
          </Form>
          {flash}
          </div>
        )
    }
} 

const mapStateToProps = (state, props) => {
    const success_message = state.confirmation_messages.filter(message => message.hasOwnProperty('invite_success'))[0]
    const new_props = {
        ...props,

    }
    if(success_message) {
        new_props.success_message = success_message
    } else {
        new_props.success_message = null
    }
    return new_props
}

const mapDispatchToProps = dispatch => bindActionCreators({inviteToGroup}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GroupInviteForm)