import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/rockets/rockets';
import Nav from './components/Nav';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData);
  }, []);

  return <Nav />;
};

export default App;
