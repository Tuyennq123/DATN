import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../css/sb-admin-2.min.scss';
import '../Doctor';
import './style.scss'
const Navbar = props => {
        return (
            <div className="menu">
 <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
      <i className="fas fa-laugh-wink" />
    </div>
    <div className="sidebar-brand-text mx-3">Quản trị <sup></sup></div>
  </a>
  {/* Divider */}

  <hr className="sidebar-divider my-0" />
              {/* <li className="nav-item">
                  <Link className="nav-link" to="/admin">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Dashboard</span>
                  </Link>
              </li> */}
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/post">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Bài viết</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/service">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Dịch vụ</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/timeclass">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Khung giờ</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/users">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Tài khoản</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/customer">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Khách hàng</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/doctor">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Bác sĩ</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/orders">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Danh sách đặt lịch</span>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/admin/OderDoctor">
                      <i className="fas fa-fw fa-tachometer-alt" />
                      <span>Lịch khám</span>
                  </Link>
              </li>
  {/* Divider */}
 
  {/* Nav Item - Pages Collapse Menu */}
  
   
  {/* Nav Item - Utilities Collapse Menu */}

  {/* Divider */}

  {/* Nav Item - Pages Collapse Menu */}
  {/* <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-folder" />
      <span>Pages</span>
    </a>
    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Login Screens:</h6>
        <a className="collapse-item" href="login.html">Login</a>
        <a className="collapse-item" href="register.html">Register</a>
        <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
        <div className="collapse-divider" />
        <h6 className="collapse-header">Other Pages:</h6>
        <a className="collapse-item" href="404.html">404 Page</a>
        <a className="collapse-item" href="blank.html">Blank Page</a>
      </div>
    </div>
  </li> */}
  {/* Nav Item - Charts */}
  {/* <li className="nav-item">
    <a className="nav-link" href="charts.html">
      <i className="fas fa-fw fa-chart-area" />
      <span>Charts</span></a>
  </li> */}
  
  {/* Sidebar Toggler (Sidebar) */}
  
</ul>
            </div>
        );
    }


export default Navbar;