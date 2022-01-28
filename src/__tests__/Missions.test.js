import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Mission from '../components/missions/Mission';
import Missions from '../components/missions/Missions';
import missionsReducer, {
  joinMissions,
  leaveMissions,
} from '../redux/missions/missions';

describe('Testing User Interation: ', () => {
  const mission = {
    mission_id: '9D1B7E0',
    name: 'Thaicom',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  };

  const mission2 = {
    mission_id: '9D1B7E0',
    name: 'Thaicom',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  };

  it('Tests Mission render', () => {
    const tree = render(
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-3 border" scope="col">
                Mission
              </th>
              <th className="fs-3 border" scope="col">
                Description
              </th>
              <th className="fs-3 border" scope="col">
                Status
              </th>
              <th className="fs-3 border" scope="col">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <Provider store={store}>
              <Mission key={mission.mission_id} mission={mission} />
            </Provider>
          </tbody>
        </table>
      </div>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tests Missions render', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tests Join Button', () => {
    const missionsArr = [];
    missionsArr.push(mission);
    const joined = missionsReducer(
      missionsArr,
      joinMissions(mission.mission_id),
    );
    const tree = render(
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-3 border" scope="col">
                Mission
              </th>
              <th className="fs-3 border" scope="col">
                Description
              </th>
              <th className="fs-3 border" scope="col">
                Status
              </th>
              <th className="fs-3 border" scope="col">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <Provider store={store}>
              <Mission key={joined[0].mission_id} mission={joined[0]} />
            </Provider>
          </tbody>
        </table>
      </div>,
    );
    expect(tree).toMatchSnapshot();
    expect(screen.getByTestId('joinButton')).toHaveTextContent(
      'Cancel Mission',
    );
  });

  it('Tests Leave Button', () => {
    const missionsArr = [];
    missionsArr.push(mission2);
    const joined = missionsReducer(
      missionsArr,
      leaveMissions(mission2.mission_id),
    );
    const tree = render(
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="fs-3 border" scope="col">
                Mission
              </th>
              <th className="fs-3 border" scope="col">
                Description
              </th>
              <th className="fs-3 border" scope="col">
                Status
              </th>
              <th className="fs-3 border" scope="col">
                {' '}
              </th>
            </tr>
          </thead>
          <tbody>
            <Provider store={store}>
              <Mission key={joined[0].mission_id} mission={joined[0]} />
            </Provider>
          </tbody>
        </table>
      </div>,
    );
    expect(tree).toMatchSnapshot();
    expect(screen.getByTestId('joinButton')).toHaveTextContent('Join Mission');
  });
});
