import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bookRocket, cancelRocket } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const [reserve, setReserve] = useState(false);
  const dispatch = useDispatch();
  /* eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }] */
  const handleReserve = (e, rocket) => {
    rocket.reserved
      ? dispatch(cancelRocket(e.target.id))
      : dispatch(bookRocket(e.target.id));

    setReserve(!reserve);
  };
  /* eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }] */
  const displayRockets = rockets.map((rocket) => (
    <Row key={rocket.id} className="g-0">
      <Col className="col-2">
        <Image src={rocket.flickrImages} className="img-thumbnail" />
      </Col>
      <Col className="col-10">
        <Card.Body>
          <Card.Title className="fw-bold">{rocket.rocketName}</Card.Title>
          <Card.Text>
            {rocket.reserved ? (
              <Badge bg="info" className="me-2">
                Reserved
              </Badge>
            ) : null}
            {rocket.description}
          </Card.Text>
          <Button
            id={rocket.id}
            variant={rocket.reserved ? 'outline-secondary' : 'primary'}
            onClick={(e) => {
              handleReserve(e, rocket);
            }}
          >
            {rocket.reserved ? 'Cancel' : 'Reserve'}
          </Button>
        </Card.Body>
      </Col>
    </Row>
  ));

  return (
    <Container fluid className="mt-5">
      {displayRockets}
    </Container>
  );
};
export default Rockets;
