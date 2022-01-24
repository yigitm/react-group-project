import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';
import Logo from '../images/planet.png';

const Nav = () => (
  <Router>
    <nav>
      <div className="nav-items">
        <img src={Logo} />
        <h1>Space Travelers' Hub</h1>
        <ul>
          <li>
            <Link to="/">Rockects</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
export default Nav;
