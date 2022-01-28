import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/rockets/rockets';
import Nav from './components/Nav';
import { getMissions } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
    dispatch(getMissions());
  }, []);

  return <Nav />;
};

export default App;
