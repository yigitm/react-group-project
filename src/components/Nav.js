import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './missions/Missions';
import Profile from './profile/Profile';
import Logo from '../images/planet.png';
import './Nav.css';

const Nav = () => (
  <Router>
    <nav className="navbar">
      <div className="logoContainer">
        <img className="logo" src={Logo} alt="Logo" />
        <h1>Space Traveler`s Hub</h1>
      </div>
      <ul className="listContainer">
        <li>
          <NavLink to="/" className="links" activeclassname="active">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="links" activeclassname="active">Missions</NavLink>
        </li>
        <p className="vl">|</p>
        <li>
          <NavLink to="/profile" className="links" activeclassname="active">My Profile</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
export default Nav;
