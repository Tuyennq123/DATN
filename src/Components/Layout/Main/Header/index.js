import React, { Component } from 'react';
import './header.scss';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Header = (prop) => {
        return (
            <div>
                  {/* <ul>
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                      <Link to="/contact">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul> */}
                  <header>
  <div className="header-top">
    <div className="container">
      <div className="header-top-row">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <ul className="header-top-list">
              <li className="header-top-item">
                <i className="fa fa-envelope" />
                <span>Email:</span>
                <a className="smooth" href="/" title>hotro@keyweb.vn</a>
              </li>
              <li className="header-top-item">
                <i className="fa fa-facebook-square" />
                <span>Tư vấn trực tiếp</span>
                <a className="smooth" href title>0123456789</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-6">
            <ul className="header-top-list-right">
              <li className="header-top-item relative">
                <a href title>Tài khoản</a>
                <ul className="account-list">
                  <li className="account-item">
                    <a href title>Đăng nhập</a>
                  </li>
                  <li className="account-item">
                    <a href title>Đăng kí</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-middle">
    <div className="container">
      <button type="button" id="show-megamenu" data-toggle="collapse" className="navbar-toggle smooth">
        <i className="fa fa-bars" aria-hidden="true" />
      </button>
      <div className="row row10">
        <div className="col-lg-3 col-md-3 col10">
          <div className="header-logo">
            <a href="#" title className="smooth">
              <img src="images/logo/logo.png" className="" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col10">
          <div className="header-search">
            <form method>
              <div className="header-search-ip">
                <div className="header-search-text">
                  <input type="text" name className="form-control search-feild" placeholder="Tìm kiếm" />
                </div>
                <button className="search-submit smooth" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </div>
              <div className="search-type">
                <h3 className="search-type-title">Tìm kiếm theo</h3>
                <ul className="header-search-list">
                  <li className="header-search-item">
                    <input type="radio" name="search-type-radio" defaultChecked />
                    <span>Sản phẩm và dịch vụ</span>
                  </li>
                  <li className="header-search-item">
                    <input type="radio" name="search-type-radio" />
                    <span>Bài viết</span>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col10">
          <div className="header-hotline">
            <img src="images/another/call.png" align title />
            <a href title className="header-phone-number">02466662016</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-menu">
    <div className="container">
      <nav className="main-nav">
        <span id="remove-menu"><i className="fa fa-times" aria-hidden="true" /></span>
        <ul>
          <li className="current-active">
          <Link to="/">Trang chủ</Link>
            {/* <a href="#" title>Trang chủ</a> */}
          </li>
          {/* <li>
            <a href="#" title>Trang chủ</a>
              <ul className="sub-menu">
              <li>
                <a href="#" title>Trang chủ</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" title>Trang chủ</a>
                  </li>
                  <li>
                    <a href="#" title>Trang chủ</a>
                  </li>
                  <li>
                    <a href="#" title>Trang chủ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}
          <li>
          <Link to="/tintuc">Tin tức</Link>
          </li>
          <li>
          <Link to="/gioithieu">Giới thiệu</Link>
          </li>
          <li>
          <Link to="/dichvu">Dịch vụ</Link>
          </li>
          <li>
          <Link to="/gioithieu">Liên hê</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
            </div>





        );
    }

export default Header;