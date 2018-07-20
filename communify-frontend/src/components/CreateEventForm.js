import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {createEvent} from '../actions/events'
import ReactDateTime from 'react-datetime'


class CreateEventForm extends Component {

    state = {
        title: '',
        description: '',
        image_url: '',
        time: Date.now(),
        location: '',
        showForm: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = {...this.state}
        delete payload.showForm
        payload.group_id = this.props.group_id
        this.props.handleSubmit(payload)
    }

    render() {
        console.log(this.props)
        const form = this.state.showForm ? (
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" placeholder="title" id="title" onChange={e=>this.setState({title: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="location">Loctation</Label>
                <Input type="text" placeholder="location" id="location" onChange={e=>this.setState({location: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" placeholder="description" id="description" onChange={e=>this.setState({description: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="image_url">Image URL</Label>
                <Input type="text" placeholder="image URL" id="image_url" onChange={e=>this.setState({image_url: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label for="time">Time</Label>
                <ReactDateTime onChange={e=>{this.setState({time:e})}}/>
            </FormGroup>
            <Button color="success">Create it!</Button>
        </Form>
        ) : null
        return (
        <div>
        <Button className="mb-2" 
        onClick={() => {this.setState({showForm: !this.state.showForm})}}
        color="primary">Create Event</Button>
        {form}
        </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    return props
}

const mapDispatchToProps = dispatch => bindActionCreators({handleSubmit: createEvent}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)
  