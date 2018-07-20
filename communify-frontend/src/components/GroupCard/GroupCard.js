import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'

const GroupCard = ({group}) => {
    const {image_url, description, title, isAdmin, id} = group
    return (
        <Card style={{width: '100%'}} className="mb-2">
        <Row>
            <Col xs={8}>
              <CardBody>
                <CardTitle><Link to={`/groups/${id}`}>{title}</Link></CardTitle>
                <CardText>{description}</CardText>
                <Button color="primary"><Link to={`/groups/${id}`} style={{color: 'white', textDecoration: 'none'}}>Details</Link></Button>
              </CardBody>      
            </Col>
            <Col xs={4}>
              <CardImg style={{width: '100%', maxHeight: '300px'}} src={image_url}/>
            </Col>
          </Row>
        
        
      </Card>
    )
}

export default GroupCard