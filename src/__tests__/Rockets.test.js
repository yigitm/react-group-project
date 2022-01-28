import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

describe('Rockets.js: component test', () => {
  test('Rockets.js: should render cancel & book rocket buttons according to reserved value', () => {
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

    const displayRockets = rockets.map((rocket) => (
      <Row key={rocket.id} className="g-1 mb-3">
        <Col className="col-2">
          <Image src={rocket.flickrImages} className="img-thumbnail border-0" />
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

    const tree = render(
      <Provider store={store}>
        <Container fluid className="mt-5">
          {displayRockets}
        </Container>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Rockets.js: should return rocket if `reserved: true` to display badge & reserve button', () => {
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
    const badge = [];

    rockets.map((rocket) => {
      rocket.reserved ? badge.push(rocket) : null;
    }),
      expect(badge.length).toEqual(1);
  });

  test('Rockets.js: should return null if `reserved: false` to display cancel button', () => {
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

    const rockets = [falcon1, falcon9];
    const cancelButtons = [];

    rockets.map((rocket) => {
      rocket.reserved ? rocket : cancelButtons.push(null);
    });

    expect(cancelButtons.length).toEqual(2);
  });
});
