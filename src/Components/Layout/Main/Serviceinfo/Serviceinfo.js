import React, { Component } from 'react';
// import Footer from '../../Admin/Footer';
import { Link } from "react-router-dom";
import Calendars from '../../Main/Calendars/Calendars';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import './sv.scss';



class Serviceinfo extends Component {

state = {
  service: [],
}
  componentDidMount() {
    axios.post('http://localhost:8000/api/service')
    .then(res => {
    const service = res.data.data;
    this.setState({ service });
    console.log(service)
  })
      .catch(error => console.log(error));
}

    render() {
    var baseUrl = 'http://localhost:8000/';

        return (
            <div>
                <Header />
                <div class="breadcrumb-page">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Đặt lịch</li>
                            </ol>
                        </nav>
                    </div>
	            </div>
                <div className="service-page">
        <div className="container">
          <div className="service-page-desc">
            <h1 className="service-page-title">Đăng ký dịch vụ khám</h1>
            <div className="s-content">
              <h3>Quý khách vui lòng chọn dịch vụ đăng ký khám</h3>
            </div>
          </div>
          <div className="row row10">
          {this.state.service.map((item, index) =>
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-xxs-12 col10">
              <div className="service-item">
                <div className="service-image">
                    <Link to={`/datlich/${item.id}`}>
                      <a href="#" className="smooth hv-border-inline-bg" title>
                  <img src={`${baseUrl}${item.image}`}/>
                      </a>
                    </Link>
                </div>
                <h3 className="service-title">
                    <Link to={`/datlich/${item.id}`}>
                        <a href="#" className="smooth" title>{item.content}</a>
                    </Link>
                </h3>
              </div>
            </div>
)}
          </div>
          {/* <div className="te-pagination">
            <a className="smooth" href="#"><i className="fa fa-angle-double-left" /></a>
            <a className="smooth" href="#"><i className="fa fa-angle-left" /></a>
            <a className="smooth" href="#">1</a>
            <strong>2</strong>
            <a className="smooth" href="#">3</a>
            <a className="smooth" href="#"><i className="fa fa-angle-right" /></a>
            <a className="smooth" href="#"><i className="fa fa-angle-double-right" /></a>
          </div> */}
        </div>
      </div>
      <Footer />
            </div>
        );
    }
}

export default Serviceinfo;
