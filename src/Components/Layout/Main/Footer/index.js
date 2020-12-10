import React, { Component } from 'react';
import './footer.scss';

class index extends Component {
    render() {
        return (
            <div>
                <footer>
  <div className="container">
    <div className="row row10">
      <div className="col-lg-4 col-md-4 col-sm-12 col10">
        <h2 className="footer-info-title">
          Phòng khám Phụ Sản 55 Yên Lãng
        </h2>
        <ul className="footer-info-list">
          <li className="footer-info-item">
            Bệnh viện đa khoa đã có những bước tiến phát triển mạnh mẽ về công nghệ y khoa. 								
          </li>
          <li className="footer-info-item">
            Thứ 2 - Thứ 6: 8h00 - 22h00
          </li>
          <li className="footer-info-item">
            Thứ 7 - Chủ nhật: 8h00 - 21h00
          </li>
          <li className="footer-info-item">
            <strong>Địa chỉ: </strong>55 Yên Lãng - Hà Nội 
          </li>
          <li className="footer-info-item">
            <strong>Email: </strong>phusan55yenlang@gmaiol.com.vn
          </li>
          <li className="footer-info-item">
            <strong>Điện thoại: </strong>012345678
          </li>
        </ul>
      </div>
      <div className="col-lg-8 col-md-8 col10">
        <div className="row row10">
          <div className="col-lg-4 col-md-4 col-sm-4 col10">
            <h5 className="footer-info-title">
              Chăm sóc khách hàng
            </h5>
            <ul className="footer-info-list">
              <li className="footer-info-item">
               Giới thiệu
              </li>
              <li className="footer-info-item">
                Quy định chung
              </li>
              <li className="footer-info-item">
                Chính sách bảo mật
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col10">
            <h5 className="footer-info-title">
              Dịch vụ
            </h5>
            <ul className="footer-info-list">
              <li className="footer-info-item">
                <p>Siêu âm thai 2D</p>
              </li>
              <li className="footer-info-item">
              <p>Siêu âm thai 3D</p>
              </li>
              <li className="footer-info-item">
              <p>Siêu âm thai màu</p>
              </li>
              <li className="footer-info-item">
              <p>Siêu âm thai đặc biệt</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col10">
            <h5 className="footer-info-title">
              Fanpage
            </h5>
            <div className="footer-social-links">
              <a href="#" className="smooth" title>
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="smooth" title>
                <i className="fa fa-google" aria-hidden="true" />
</a>
              <a href="#" className="smooth" title>
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              <a href="#" className="smooth" title>
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

            </div>
            
        );
    }
}

export default index;