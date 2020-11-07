import React, { Component } from 'react';
import './home.scss';
import Header from '../Header';
import Footer from '../Footer';
import Slide from '../Slide';

const Home = (prop) => {
        return (
            <div>
                <Header />
                <Slide />
                    <div className="home-introduce">
                        <div className="container">
                            <h3 className="introduce-title">
                                <a href="#" className="smooth" title>
                                    <span>Giới thiệu</span>
                                </a>
                            </h3>
                            <div className="row row10">
                                <div className="col-lg-4 col-md-4 col10">
                                    <div className="introduce-image hv-light">
                                    <img src="images/introduce/intro.jpg" title alt />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col10">
                                    <div className="introduce-desc s-content">
                                        <p>
                                            Chính thức đi vào hoạt động từ năm 2011, hospital Health khẳng định vị thế thương hiệu là Bệnh viện đa khoa hàng đầu tại Hải Phòng. Sự tin tưởng và đồng hành của hàng triệu người dân đối với dịch vụ của chúng tôi trong gần một thập kỷ qua là sự phản ánh chân thực cho thái độ làm việc nghiêm túc, chuẩn mực cao trong chất lượng khám chữa bệnh.
                                            Để tạo ra từng dấu ấn quan trọng trong sự phát triển, hospital Health kiên trì theo đuổi chiến lược mang bản sắc riêng của mình:
                                            Chính thức đi vào hoạt động từ năm 2011, hospital Health khẳng định vị thế thương hiệu là Bệnh viện đa khoa hàng đầu tại Hải Phòng. Sự tin tưởng và đồng hành của hàng triệu người dân đối với dịch vụ của chúng tôi trong gần một thập kỷ qua là sự phản ánh chân thực cho thái độ làm việc nghiêm túc, chuẩn mực cao trong chất lượng khám chữa bệnh.
                                            Để tạo ra từng dấu ấn quan trọng trong sự phát triển, hospital Health kiên trì theo đuổi chiến lược mang bản sắc riêng của mình:
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
  <h3 className="introduce-title">
    <a href="#" className="smooth" title>
      <span>Dịch vụ nổi bật</span>
    </a>
  </h3>
  <div className="row row10">
    <div className="col-lg-4 col-md-4 col10">
      <div className="introduce-desc s-content">
        <p>
          Với mục tiêu mang đến dịch vụ chăm sóc sức khỏe toàn diện, hospital Health quy tụ đội ngũ Giáo sư, chuyên gia giàu kinh nghiệm, đồng thời ứng dụng hệ thống thiết bị y tế cao cấp, hiện đại nhập khẩu đồng bộ từ các nước tiên tiến hàng đầu trên thế giới. Dịch vụ chăm sóc chuyên nghiệp, tận tình với chuỗi khu phòng ban chức năng riêng biệt.
        </p>
        <p>
          Với sự nỗ lực không ngừng, hospital Health đã đạt được dấu ấn quan trọng, thành tựu trong phẫu thuật tim mạch được giới Y học biết đến rộng rãi, trị liệu hiệu quả cho hàng trăm ngàn người bệnh mãn tính ở các lĩnh vực chuyên khoa: Cơ xương khớp, Tiêu hóa, Tai mũi họng,…
        </p>
      </div>
    </div>
    <div className="col-lg-8 col-md-8 col10">
      <ul className="service-list">
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
        <li className="service-item">
          <div className="service-image">
            <a href="#" className="smooth" title>
              <img src="images/services/1.jpg" alt />
            </a>
          </div>
          <h3 className="service-name">
            <a href="#" className="smooth" title>Khám tầm soát tim mạch</a>
          </h3>
        </li>
      </ul>
    </div>
  </div>
</div>
dasdasd
<Footer />

            </div>
        );
    }

export default Home;