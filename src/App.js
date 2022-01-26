import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Nav from './components/Nav';
import { getMissions } from './redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>
      <Nav />
    </div>
  );
};

export default App;
