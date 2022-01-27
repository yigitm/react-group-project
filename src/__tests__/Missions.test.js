import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Mission from '../components/missions/Mission';
import Missions from '../components/missions/Missions';

describe('Testing User Interation: ', () => {
  const mission = {
    mission_id: '9D1B7E0',
    name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  };

  it('Tests Mission render', () => {
    const tree = render(<Provider store={store}><Mission key={mission.mission_id} mission={mission} /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  
  it('Tests Missions render', () => {
    const tree = render(<Provider store={store}><Missions /></Provider>);
    expect(tree).toMatchSnapshot();
  });

  
  it('Tests Join/Leave Button', () => {
    render(<Provider store={store}><Mission key={mission.mission_id} mission={mission} /></Provider>);
    fireEvent.click(screen.getByText('Cancel Mission'));
    expect(screen.getByTestId("joinButton")).toHaveValue('Join Mission');
  });
});