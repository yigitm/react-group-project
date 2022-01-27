import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';

describe('Rockets', () => {
  const rockets = [
    {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'Lorem Ipsum Onum',
      flickrImages: 'https://imgur.com/DaCfMsj.jpg',
      reserved: false,
    },
  ];
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
  test('Test', () => {
    displayRockets;
    const rocketName = 'Falcon 1';
    expect(rocketName).toBeInTheDocument();
  });
});
