import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom'
import moment from 'moment'

const EventCard = ({event, rsvp, cancel}) => {
    const {image_url, description, location, time, title, group_title, rsvp_id, id, group_id} = event
    const interact = 
    rsvp_id ? (<Button color="warning" onClick={()=>cancel(id)}>Cancel</Button>) 
    : (<Button onClick={()=>rsvp(id)}>RSVP</Button>)
  return (
      <Card style={{width: '100%'}} className="mb-2">
        <Row>
          <Col sm={8}>
            <CardBody>
            <CardTitle><Link to={`/events/${id}`}>{title}</Link></CardTitle>
            <CardSubtitle><Link to={`/groups/${group_id}`}>{group_title}</Link></CardSubtitle>
            <CardText>{location}</CardText>
            <CardText>{moment(time).format('MMMM Do YYYY, h:mm:ss a')}</CardText>
            <Link to={`/events/${id}`} style={{color: 'white', textDecoration: 'none'}}><Button color="primary">Details</Button></Link>
            {interact}
            </CardBody>
          </Col>
          <Col sm={4} className="float-left">
            <CardImg style={{width: '100%', maxHeight: '300px'}} src={image_url}/>
          </Col>
        </Row>
      </Card>
  );
};

export default EventCard;