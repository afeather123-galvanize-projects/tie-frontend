import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {createGroup} from '../actions/groups'

class CreateGroupForm extends Component {

    state = {
        title: '',
        description: '',
        image_url: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    render() {
        console.log(this.props)
        return (
        <div className="mb-2">
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" placeholder="title" id="title" onChange={e=>this.setState({title: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="image_url">Image URL</Label>
                <Input type="text" placeholder="image URL" id="image_url" onChange={e=>this.setState({image_url: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" placeholder="description" id="description" onChange={e=>this.setState({description: e.target.value})}/>
            </FormGroup>
            <Button>Create it!</Button>
        </Form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit: createGroup}, dispatch)

export default connect(null, mapDispatchToProps)(CreateGroupForm)
