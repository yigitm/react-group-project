import React from 'react';
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
  const dispatch = useDispatch();
  /* eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }] */
  const handleReserve = (e, rocket) => {
    rocket.reserved
      ? dispatch(cancelRocket(e.target.id))
      : dispatch(bookRocket(e.target.id));
  };
  /* eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }] */
  const displayRockets = rockets.map((rocket) => (
    <Row key={rocket.id} className="g-1 mb-3">
      <Col className="col-2">
        <Image src={rocket.flickrImages} className="img-thumbnail border-0" />
      </Col>
      <Col className="col-10">
        <Card.Body>
          <Card.Title className="fw-bold">{rocket.rocketName}</Card.Title>
          <Card.Text>
            {rocket.reserved && (
              <Badge bg="info" className="me-2">
                Reserved
              </Badge>
            )}
            {rocket.description}
          </Card.Text>
          {rocket.reserved && (
            <Button
              variant="outline-secondary"
              id={rocket.id}
              onClick={(e) => {
                handleReserve(e, rocket);
              }}
            >
              Cancel
            </Button>
          )}
          {!rocket.reserved && (
            <Button
              variant="primary"
              id={rocket.id}
              onClick={(e) => {
                handleReserve(e, rocket);
              }}
            >
              Reserve
            </Button>
          )}
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
