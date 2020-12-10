import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from "react-router-dom";
import axios from 'axios';
import './home.scss';

class Home extends Component {
  state = {
    service: [],
    posts: [],
    postsid: [],
  }
  showservice() {
      axios.post('http://localhost:8000/api/service')
      .then(res => {
      const service = res.data.data;
      this.setState({ service });
    })
        .catch(error => console.log(error));
  }

  showpost() {
    axios.get('http://localhost:8000/api/4postnew')
    .then(res => {
    const posts = res.data.data;
    this.setState({ posts });
    console.log(posts)
  })
      .catch(error => console.log(error));
}

showpostid() {
  axios.get(`http://localhost:8000/api/post/` + 1).then(res => {
  const postsid = res.data.data;
  this.setState({ postsid });
  })
      .catch(error => console.log(error));
}

componentDidMount() {
  this.showservice();
  this.showpost();
  this.showpostid();
}
  render() {
    var baseUrl = 'http://localhost:8000/';

    return (
      <div>
           <div>
                <Header />
                <div className="home-slider">
                    <img src="images/slides/slide-1.png" alt />
                </div>
                    <div  className="home-introduce it">
                        <div className="container">
                            <h3 className="introduce-title">
                                <a href="#" className="smooth" title>
                                    <span>Giới thiệu</span>
                                </a>
                            </h3>
                            <div className="row row10">
                                <div className="col-lg-4 col-md-4 col10">
                                    <div className="introduce-image hv-light">
                                    <img src="images/doctors/bs2.jpg" title alt />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col10">
                                    <div className="introduce-desc s-content">
                                        <p>
                                            Chính thức đi vào hoạt động từ năm 2014. Phòng khám phụ 
                                            sản 55 Yên Lãng khẳng định vị thế thương hiệu là một trong những
                                            phòng khám uy tín ở Hà Nội. Sự tin tưởng và đồng hành của hàng triệu n
                                            gười dân đối với dịch vụ của chúng tôi trong thời gianq qua là sự phản ánh 
                                            chân thực cho thái độ làm việc nghiêm túc, chuẩn mực cao trong chất lượng khám chữa bệnh.
                                            Để tạo ra từng dấu ấn quan trọng trong sự phát triển. Phòng khám phụ sản 55 Yên Lãng 
                                            kiên trì theo đuổi chiến lược mang bản sắc riêng của mình. Bác sĩ tận tâm chu đáo, bệnh nhân đặt lịch khám trước để không mất thời gian đợi chời khi đến khám
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-doctor home-introduce">
        <div className="container">
          <h3 className="introduce-title">
            <a href="#" className="smooth" title>
              <span>Bác sỹ</span>
            </a>
          </h3>
          <div className="row row10">
            <div className="col-lg-5 col-md-5 col-sm-5 col10">
              <div className="doctor-avatar hv-scale">
                <a href="#" className="smooth c-img" title>
                  <img src="images/doctors/bs1.jpeg" className alt="" />
                </a>
              </div>
              <div className="doctor-name-box">
                <a href="#" className="smooth" title>
                  <p className="doctor-name-bg">
                    {/* <span>BS</span> Tạ Như Anhs */}
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col10">
              <div className="doctor-main-info">
                <h4 className="doctor-education">
                  Bác Sĩ
                </h4>
                <h3 className="doctor-name">
                  Tạ Như Anh
                </h3>
                <h3 className="doctor-position">
                  Phụ Trách Phòng Khám Sản Phụ Khoa 55 Yên Lãng
                </h3>
              </div>
              <div className="doctor-item-detail">
                <p><b>Chức vụ:</b></p>
                <p>Bác sĩ phụ trách thăm khám chính tại Phòng khám Sản phụ khoa 55 Yên Lãng</p>
              </div>
              <div className="doctor-item-detail">
                <p><b>Quá trình đào tạo:</b></p>
                <p>Năm 2000: Tốt nghiệp trường Đại học Y Hà Nội .</p>
                <p>Năm 2003: Hoàn thành khóa học chuyên khoa Chẩn đoán hình ảnh .</p>
                <p>Từng làm việc tại Phòng khám Sông Nhuệ</p>
                <p>Từng công tác tại khoa Siêu âm của Phòng khám 125 Thái Thịnh – Quận Đống Đa – Hà Nội. .</p>
              </div>
              <div className="doctor-item-detail">
                <p><b>Thế mạnh chuyên môn:</b></p>
                <p>Hơn 20 năm trong lĩnh vực chẩn đoán thai kì</p>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <div className="home-service home-introduce">
        <div className="container">
          <h3 className="introduce-title">
            <a href="#" className="smooth" title>
              <span>Đăng Ký Dịch Vụ Khám</span>
            </a>
          </h3>
          <div className="col-lg-12 col-md-12 col10">
        <div className="introduce-desc s-content tct">
            <h3>Vui lòng chọn dịch vụ để đăng ký khám theo yêu cầu của quý khách</h3>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col10">
        <ul className="service-list">
        {this.state.service.map((item, index) =>
          <li className="service-item">
            <div className="service-image fixsm">
                    <Link to={`/datlich/${item.id}`}>
                      <a href="#" className="smooth" title>
                      <img src={`${baseUrl}${item.image}`}/>
                      </a>
                    </Link>
            </div>
            <h3 className="service-name">
                    <Link to={`/datlich/${item.id}`}>
                        <a href="#" className="smooth" title>{item.name}</a>
                    </Link>
            </h3>
          </li>
)}
        </ul>
      </div>
        </div>
      </div>
      <div className="home-news">
        <div className="container">
          <div className="row row10">
            <div className="col-lg-8 col-md-8 col10">
              <h3 className="introduce-title">
                <a href="#" className="smooth" title>
                  <span>Tin tức</span>
                </a>
              </h3>
              <div className="row row10">
                <div className="col-lg-7 col-md-7 col-sm-7 col10">
                  <div className="hot-news-box">
                    <div className="hot-news-image">
                      <a href="#" className="smooth" title>
                      <img src={`${baseUrl}${this.state.postsid.feature_image}`}/>
                      </a>
                    </div>
                  </div>
                  <div className="hot-news-detail">
                    <h4 className="hot-news-title">
                      <a href="#" className="smooth" title>{this.state.postsid.title}</a>
                    </h4>
                    <p className="hot-news-desc text3line">{this.state.postsid.content}</p>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 col-sm-5 col10">
                  <ul className="small-news">
                  {this.state.posts.map((item, index) => 
                    <li className="small-news-item">
                      <div className="small-new-image hot-news-image">
                        <Link to={`/chitiettin/${item.id}`}>
                          <a href="#" className="smooth" title>
                          <img src={`${baseUrl}${item.feature_image}`}/>
                          </a>
                        </Link>
                      </div>
                      <div className="small-news-info">
                        <h5 className="small-news-title">
                          <Link to={`/chitiettin/${item.id}`}>
                            <a href="#" className="smooth text4line" title>
                              {item.title}
                            </a>
                          </Link>
                        </h5>
                        <p className="small-news-desc text4line">Nguyên nhân của hiện tượng loãng xương Các nguyên nhân chính dẫn đến bệnh loãng xương bao gồm lão hóa dẫn đến sự sụt giảm estrogen ở phụ nữ mãn …</p>
                      </div>
                    </li>
 )} 
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col10">
              <h3 className="introduce-title">
                <a href="#" className="smooth" title>
                  <span>Video</span>
                </a>
              </h3>
              <div className="news-video">
              <iframe width height src="https://www.youtube.com/embed/ZAzWT8mRoR0" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; icture-in-picture" allowFullScreen />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-grateful">
        <div className="container">
          <h3 className="introduce-title">
            <a href="#" className="smooth" title>
              <span>Góc tri ân</span>
            </a>
          </h3>
          <div className="row row10 home-grateful-slider">
            <div className="col-lg-4 col-md-4 col10">
              <div className="customer-info-box">
                <div className="customer-avatar hv-light">
                  <img src="images/customers/4.jpg" alt="" />
                </div>
                <div className="customer-info">
                  <h5 className="customer-name">Nguyễn Thúy</h5>
                  <p>Nhân viên văn phòng</p>
                  <p>27 tuổi</p>
                </div>
              </div>
              <div className="grateful-detail-box">
                <div className="grateful-detail text4line">
                  Phòng khám sản 55 Yên Lãng có nhiều chính sách khám chữa bệnh rất hay nên tôi rất thích. Tôi mới khám sản ở đây xong, dịch vụ rất tốt. Bác sĩ tận tâm chu đáo
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col10">
              <div className="customer-info-box">
                <div className="customer-avatar hv-light">
                  <img src="images/customers/2.jpg" alt="" />
                </div>
                <div className="customer-info">
                  <h5 className="customer-name">Vũ Hiển</h5>
                  <p>Kiến trúc sư</p>
                  <p>30 tuổi</p>
                </div>
              </div>
              <div className="grateful-detail-box">
                <div className="grateful-detail text4line">
                    Phòng khám sản 55 Yên Lãng với dịch vụ đặt lịch khám online rất hay, tôi đặt lịch trước và đưa vợ đi khám thai rất nhanh, không phải đợi chờ lâu
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col10">
              <div className="customer-info-box">
                <div className="customer-avatar hv-light">
                  <img src="images/customers/3.jpg" alt="" />
                </div>
                <div className="customer-info">
                  <h5 className="customer-name">Trần Thu</h5>
                  <p>Kế toán</p>
                  <p>24 tuổi</p>
                </div>
              </div>
              <div className="grateful-detail-box">
                <div className="grateful-detail text4line">
                  Bác sĩ rất tận tình chu đáo khám bệnh, nhân viên y tá niềm nở với bệnh nhân
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer />

            </div>
      </div>
    );
  }
}

export default Home;