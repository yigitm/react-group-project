import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  const displayRockets = rockets.map((rocket) => (
    <Card key={rocket.id} style={{ width: '18rem' }}>
      <Card.Img src={rocket.flickrImages} />
      <Card.Body>
        <Card.Title>{rocket.rocketName}</Card.Title>.
        <Card.Text>{rocket.description}</Card.Text>
        <Button variant="primary">Reserve Rocket</Button>
      </Card.Body>
    </Card>
  ));

  return displayRockets;
};
export default Rockets;
