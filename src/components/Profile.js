import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const reservations = useSelector((state) => state.rocketsReducer);
  const displayReservations = reservations.map((reservation) => (
    <Accordion key={reservation.id}>
      <Accordion.Item eventKey={reservation.id}>
        <Accordion.Header>{reservation.rocketName}</Accordion.Header>
        <Accordion.Body>{reservation.description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  ));

  return (
    <Container className="mt-5">
      <Row>
        <Col className="col-6 d-flex">
          <h1>My Missions</h1>
        </Col>
        <Col className="col-6 d-flex flex-column">
          <h1>My Rockets</h1>
          {displayReservations}
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
