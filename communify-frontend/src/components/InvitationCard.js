import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {acceptInvitation} from '../actions/groups'

const InvitationCard = ({group, acceptInvitation}) => {
    const {image_url, description, title, id} = group
    return (
        <Card style={{width: '100%'}} className="mb-2">
        <Row>
            <Col xs={8}>
              <CardBody>
                <CardTitle><Link to={`/groups/${id}`}>{title}</Link></CardTitle>
                <CardText>{description}</CardText>
                <Button color="primary" onClick={() => acceptInvitation(group.group_id)}>Accept Invite</Button>
              </CardBody>      
            </Col>
            <Col xs={4}>
              <CardImg width="100%" src={image_url}/>
            </Col>
          </Row> 
      </Card>
    )
}

const mapStateToProps = (state, props) => {
    return props
}

const mapDispatchToProps = dispatch => bindActionCreators({acceptInvitation}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InvitationCard)