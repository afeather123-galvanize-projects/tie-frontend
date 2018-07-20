import React from 'react'
import {Row, Col, Form, FormGroup, Label, Input, Button, Container, Jumbotron} from 'reactstrap'

class Login extends React.Component {
    
    state = {
        email: '',
        password: '',
      }


    render() {
        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.handleSubmit(this.state)
        }

        return (
            <Container style={{height: '80vh', position: 'relative'}}>
                <Row style={{margin: 0, position: 'absolute', top: '50%', transform: 'translate(0%, -50%)'}}>
                    <Col sm="8">
                    <div>
                    <Jumbotron>
                        <h1 className="display-3">Welcome to Tie!</h1>
                        <p className="lead">A site where you can plan coordinate and keep in touch with the groups and events you care about the most.</p>
                        <hr className="my-2" />
                        <p>Are you part of an organization looking for planning software? You should pick this one because why not!</p>
                        <p className="lead">
                        </p>
                    </Jumbotron>
                    </div>
                    </Col>
                    <Col sm="4">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input id="email" 
                                type="email" 
                                placeholder="john@doe.com" 
                                onChange={e=>this.setState({email:e.target.value})}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input id="password" type="password" 
                                placeholder="john@doe.com" 
                                onChange={e=>this.setState({password:e.target.value})}/>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login