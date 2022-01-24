import React from 'react';
import {
  BrowserRouter as Router, Route, Routes, NavLink,
} from 'react-router-dom';
import Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';
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
          <NavLink exact to="/" className="links" activeClassName="active">Rockets</NavLink>
        </li>
        <li>
          <NavLink exact to="/missions" className="links" activeClassName="active">Missions</NavLink>
        </li>
        <p className="vl">|</p>
        <li>
          <NavLink exact to="/profile" className="links" activeClassName="active">My Profile</NavLink>
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
