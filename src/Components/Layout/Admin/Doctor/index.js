import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


class Doctor extends Component {    
    state = {
      posts: [],
    //   showModal: false,
      title: '',
    }
    componentDidMount() {
      axios.post('http://localhost:8000/api/post')
        .then(res => {
          const posts = res.data.data;
          this.setState({ posts });
          console.log(posts);
        })
        .catch(error => console.log(error));
    }

    deleteRow(id, e){
        axios.post(`http://localhost:8000/api/post/destroy/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const posts = this.state.posts.filter(item => item.id !== id);
            console.log(id);
            this.setState({ posts });
          })
      
      }
      handleChange = event => {
        this.setState ({ title:event.target.value });

      }
    render(){
      return(
    <div className="admin-page">
        <div id="wrapper">
            <Navbar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid">
                        <div>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách bài viết</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">Tiêu đề</th>
                                            <th scope="col">Nội dung</th>
                                            <th scope="col">
                                                <button onClick={this.open} type="button" class="btn btn-success">
                                                    <i class="fas fa-plus-square">Thêm</i>
                                                </button>
                                            </th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.posts.map((item, index) => 
                                                         <tr key={index}> 
                                                         <td>{item.id}</td> 
                                                         <td>{item.title}</td> 
                                                         <td>{item.body}</td> 
                                                         <td> 
                                                            <button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Delete</button>
                                                        </td> 
                                                         </tr> 
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
      );
    }
  }
  

export default Doctor;