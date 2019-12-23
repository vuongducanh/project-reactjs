import React from 'react';
import './side-bar.scss';
import {
  Link
} from "react-router-dom";

function SideBar() {
  return (
    <div className="slide-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;
