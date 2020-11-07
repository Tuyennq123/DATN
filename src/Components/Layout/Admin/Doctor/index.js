import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


class Doctor extends Component {    
    state = {
      post: [],
      showModal: false,
    }
    componentDidMount() {
      axios.post('http://localhost:8000/api/post')
        .then(res => {
          const post = res.data;
          this.setState({ post });
          console.log(post);
        })
        .catch(error => console.log(error));
    }

    DeletePost = () =>{
        alert('Xóa');
    }

    EditPost = () =>{
        alert('Sửa');
    }

    close = () => {
        this.setState({ showModal: false });
      }
    
    open = () => {
        this.setState({ showModal: true });
      }

    render(){
      return(
    <div className="admin-page">
        <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Modal body
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
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
                                                    {
                                                        this.state.post.map((item, index) => 
                                                            <tr key={index}>
                                                                <th> 1</th>
                                                                <th>{ item.title} </th>
                                                                <th>{ item.content} </th>
                                                                <th> 
                                                                    <button onClick= {this.EditPost} type="button" class="btn btn-warning">
                                                                        <i class="fa fa-edit">Sửa</i>
                                                                    </button>
                                                                    <button onClick ={this.DeletePost} type="button" class="btn btn-danger">
                                                                        <i class="fa fa-plus-square">Xóa</i>
                                                                    </button>
                                                                </th>
                                                            </tr>
                                                            )
                                                    }
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