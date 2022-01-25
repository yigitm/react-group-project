import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  const displayRockets = rockets.map((rocket) => (
    <Row key={rocket.id} className="g-0">
      <Col className="col-2">
        <Image src={rocket.flickrImages} className="img-thumbnail" />
      </Col>
      <Col className="col-10">
        <Card.Body>
          <Card.Title className="fw-bold">{rocket.rocketName}</Card.Title>
          <Card.Text>{rocket.description}</Card.Text>
          <Button>Reserve Rocket</Button>
        </Card.Body>
      </Col>
    </Row>
  ));

  return <Container fluid>{displayRockets}</Container>;
};
export default Rockets;
