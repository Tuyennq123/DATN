import React, { Component } from 'react';
// import Footer from '../../Admin/Footer';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';



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
        return (
            <div>
                <Header />
                <div class="breadcrumb-page">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Tin tức</li>
                            </ol>
                        </nav>
                    </div>
	            </div>
             
                <div className="service-page">
        <div className="container">
          <div className="service-page-desc">
            <h1 className="service-page-title">Dịch vụ</h1>
            <div className="s-content">
              <p>Khách hàng có nhu cầu, chúng tôi có dịch vụ.</p>
              <p>Dịch vụ chúng tôi luôn cung cấp các dịch vụ theo từng nhu cầu khách hàng. Ngày càng nhiều dịch vụ được đưa ra, nhằm một mục đích duy nhất đó là đem lại sự hài lòng cho khách hàng - những người đã và đang cần khám chữa bệnh trong thời gian nhanh nhất.</p>
            </div>
          </div>
          <div className="row row10">
          {this.state.service.map((item, index) => 
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-xxs-12 col10">
              <div className="service-item">
                <div className="service-image">
                  <a href="#" className="smooth hv-border-inline-bg" title>
                    <img src="images/services/1.png" alt="" />
                  </a>
                </div>
                <h3 className="service-title">
                  <a href="#" className="smooth" title>{item.content}</a>
                </h3>
              </div>
            </div>
)} 
          </div>
          <div className="te-pagination">
            <a className="smooth" href="#"><i className="fa fa-angle-double-left" /></a>
            <a className="smooth" href="#"><i className="fa fa-angle-left" /></a>
            <a className="smooth" href="#">1</a>
            <strong>2</strong>
            <a className="smooth" href="#">3</a>
            <a className="smooth" href="#"><i className="fa fa-angle-right" /></a>
            <a className="smooth" href="#"><i className="fa fa-angle-double-right" /></a>
          </div>
        </div>
      </div>
      <Footer />
            </div>
        );
    }
}

export default Serviceinfo;