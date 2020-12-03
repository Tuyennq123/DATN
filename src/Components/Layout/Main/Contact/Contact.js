import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3035970924802!2d105.77785499786985!3d21.020534978583704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ac865806f3%3A0xe622b11fb8df6b87!2sC%C3%B4ng+ty+TNHH+KEYSKY!5e0!3m2!1svi!2s!4v1489220781420" width="100%" height={400} frameBorder={0} style={{border: 0, pointerEvents: 'none', verticalAlign: 'middle'}} allowFullScreen />
                </div>
                <div className="contact-page news-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="lastest-news-bigtitle contact-title"><span>Liên hệ với chúng tôi</span></h2>
              <form className="contact-form">
                <div className="row row5">
                  <div className="form-group col-lg-6 col5">
                    <label htmlFor="inputName">Họ và tên</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Họ và tên" />
                  </div>
                  <div className="form-group col-lg-6 col5">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textArea">Nội dung</label>
                  <textarea className="form-control" id="textArea" placeholder="Nội dung tin nhắn" defaultValue={""} />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success smooth">Gửi</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="lastest-news-bigtitle contact-title"><span>Công ty TNHH Keysky</span></h2>
              <div className="contact-item clearfix">
                <span><b>Điện thoại: </b></span>
                <p>024 6666 2016</p>
              </div>
              <div className="contact-item clearfix">
                <span><b>Hotline</b></span>
                <p>024 6666 2016</p>
              </div>
              <div className="contact-item clearfix">
                <span><b>Email: </b></span>
                <p>hotro@keyweb.vn</p>
              </div>
              <div className="contact-item clearfix">
                <span><b>Giờ mở cửa</b></span>
                <p>Thứ 2 - Thứ 6: 8h00 - 22h00 <br />
                  Thứ 7 - Chủ nhật: 8h00 - 21h00</p>
              </div>
              <div className="contact-item clearfix">
                <span><b>Địa chỉ: </b></span>
                <p>Số 9 Duy Tân - Cầu Giấy - Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;