import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bookRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const [reserve, setReserve] = useState(false);
  const dispatch = useDispatch();

  const handleReserve = (e) => {
    dispatch(bookRocket(e.target.id));
    setReserve(!reserve);
  };

  const displayRockets = rockets.map((rocket) => (
    <Row key={rocket.id} className="g-0">
      <Col className="col-2">
        <Image src={rocket.flickrImages} className="img-thumbnail" />
      </Col>
      <Col className="col-10">
        <Card.Body>
          <Card.Title className="fw-bold">{rocket.rocketName}</Card.Title>
          <Card.Text>{rocket.description}</Card.Text>
        </Card.Body>
        <Button
          id={rocket.id}
          variant={rocket.reserved ? 'outline-secondary' : 'primary'}
          onClick={(e) => {
            handleReserve(e);
          }}
        >
          {rocket.reserved ? 'Cancel' : 'Reserve'}
        </Button>
      </Col>
    </Row>
  ));

  return <Container fluid>{displayRockets}</Container>;
};
export default Rockets;
