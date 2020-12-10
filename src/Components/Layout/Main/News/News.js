import React, { Component } from 'react';
// import Footer from '../../Admin/Footer';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';


class News extends Component {

state ={
  posts: [],

}
  componentDidMount() {
    axios.post('http://localhost:8000/api/post')
    .then(res => {
    const posts = res.data.data;
    this.setState({ posts });
    console.log(posts)
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
                                <li class="breadcrumb-item active" aria-current="page">Tin tức</li>
                            </ol>
                        </nav>
                    </div>
	            </div>
      <div className="news-page">
        <div className="container">
          <div className="row row10">
            <div className="col-lg-8 col-md-8 col-10">


            {this.state.posts.map((item, index) => 
              <div className="news-box">
                <div className="news-image">
                  <a href="#" className="c-img" title>
                  <img src={`${baseUrl}${item.feature_image}`}/>
                  </a>
                </div>
                <div className="news-info">
                  <h3 className="news-title">
                    <a href="#" className="smooth" title>
                      {item.title}
                    </a>
                  </h3>
                  <div className="news-desc s-content text5line">
                    {item.content}
                  </div>
                </div>
              </div>
 )} 


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
            <div className="col-lg-4 col-md-4 col-10">
              <h2 className="lastest-news-bigtitle"><span>Tin tức mới nhất</span></h2>
              <div className="lastest-news clearfix">
                <div className="lastest-news-item">
                  <div className="lastest-news-image hv-light">
                    <a href="#" className title>
                      <img src="images/services/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lastest-news-info">
                    <h3 className="lastest-news-title text4line">
                      <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
                    </h3>
                  </div>
                </div>
                <div className="lastest-news-item">
                  <div className="lastest-news-image hv-light">
                    <a href="#" className title>
                      <img src="images/services/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lastest-news-info">
                    <h3 className="lastest-news-title text4line">
                      <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
                    </h3>
                  </div>
                </div>
                <div className="lastest-news-item">
                  <div className="lastest-news-image hv-light">
                    <a href="#" className title>
                      <img src="images/services/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lastest-news-info">
                    <h3 className="lastest-news-title text4line">
                      <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
                    </h3>
                  </div>
                </div>
                <div className="lastest-news-item">
                  <div className="lastest-news-image hv-light">
                    <a href="#" className title>
                      <img src="images/services/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lastest-news-info">
                    <h3 className="lastest-news-title text4line">
                      <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
                    </h3>
                  </div>
                </div>
                <div className="lastest-news-item">
                  <div className="lastest-news-image hv-light">
                    <a href="#" className title>
                      <img src="images/services/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="lastest-news-info">
                    <h3 className="lastest-news-title text4line">
                      <a href="#" className="smooth" title>Nguyên nhân và triệu chứng bệnh loãng xương</a>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="news-page-posters">
                <div className="poster-item">
                  <a href="#" className="hv-border-inline-bg">
                    <img src="images/posters/1.png" />
                  </a>
                </div>
                <div className="poster-item">
                  <a href="#" className="hv-border-inline-bg">
                    <img src="images/posters/1.png" />
                  </a>
                </div>
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

export default News;