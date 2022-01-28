import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from '../components/Profile';

describe('Profile.js: component test', () => {
  test('Profile.js: should render items that has `reserved: true` property', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: true,
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: false,
    };
    const rockets = [falcon1, falcon9];

    const filteredReservations = rockets.filter((rocket) =>
      rocket.reserved ? rocket : null,
    );

    const reservedList = filteredReservations.map((rocket) => (
      <Accordion key={rocket.id}>
        <Accordion.Item eventKey={rocket.id}>
          <Accordion.Header>{rocket.rocketName}</Accordion.Header>
          <Accordion.Body>{rocket.description}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));

    const tree = render(
      <Provider store={store}>
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
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Profile.js: should return items that has `reserved: true` property', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: true,
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: false,
    };
    const rockets = [falcon1, falcon9];

    const filteredReservations = rockets.filter((rocket) =>
      rocket.reserved ? rocket : null,
    );

    expect(filteredReservations.length).toEqual(1);
  });

  test('Profile.js: should NOT return items that has `reserved: false` property', () => {
    const falcon1 = {
      id: '1',
      rocketName: 'Falcon 1',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: false,
    };
    const falcon9 = {
      id: '2',
      rocketName: 'Falcon 9',
      description: 'Lorem ipsum onum',
      flickrImages: 'image_url',
      reserved: false,
    };
    const rockets = [falcon1];

    const filteredReservations = rockets.filter((rocket) =>
      rocket.reserved ? rocket : null,
    );

    filteredReservations.map((reservation) => {
      expect(reservation.reserved.length).toEqual(0);
    });
  });
});
