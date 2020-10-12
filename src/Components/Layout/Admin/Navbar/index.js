import React, { Component } from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className="menu">
 <ul>
            <li>
              <Link to="bacsi">Bac si</Link>
            </li>
            <li>
              <Link to="/nhanvien">Nhan vien</Link>
            </li>
            <li>
              <Link to="/tintuc">Tin tuc</Link>
            </li>
          </ul>
            </div>
        );
    }
}

export default Navbar;