import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from './redux/rockets/rockets';
import Nav from './components/Nav';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);

  return (
    <div>
      <Nav />
    </div>
  );
};

export default App;
