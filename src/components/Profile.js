import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);

  const filteredReservations = rockets.filter((rocket) => (rocket.reserved ? rocket : null));

  const reservedList = filteredReservations.map((rocket) => (
    <Accordion key={rocket.id}>
      <Accordion.Item eventKey={rocket.id}>
        <Accordion.Header>{rocket.rocketName}</Accordion.Header>
        <Accordion.Body>{rocket.description}</Accordion.Body>
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
          {reservedList}
        </Col>
      </Row>
    </Container>
  );
};
export default Profile;
