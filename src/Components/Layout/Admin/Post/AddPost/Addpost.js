import React, { Component } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Topbar from '../../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
// import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
class Addpost extends Component {    
    state = { 
	  posts: [],
	  title: '',
	  slug: '',
	  content: '',
	  status: '',
	  is_delete: '',
	  created_at: '',
	  id:'',
	  updated_at: '',
	  loading: false,
	  message: 'hello',
	  showModal: false,
    }

	// Add post
    dataChange(ev){
		this.setState({
		  [ev.target.name]: ev.target.value
		})
	  }
	
	postData = async (ev) =>{
		ev.preventDefault()
		const title = this.state.title;
		const slug = this.state.slug;
		const content = this.state.content;
    const status = this.state.status;
    const updated_at = this.state.updated_at;
		const created_at = this.state.created_at;
	
	const data = {
		  title,
		  slug,
		  content,
      status,
      created_at,
      updated_at

    }
    
    axios.post('http://localhost:8000/api/post/store', data)
    .then(response => {
      console.log(response);
      this.setState({
        loading: false,
        message: response.data 
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({
        loading: false
      })
    })
	
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
                                <form onSubmit={this.postData.bind(this)}>
                                    <div className="form-group ">
                                        <label>Tiêu đề</label>
                                            <input
                                                className="form-control" 
                                                type="text"
                                                name="title"
                                                value={this.state.title}
                                                onChange={this.dataChange.bind(this)}
                                            />
                                    </div>
                                    <div className="form-group ">
                                        <label>Slug</label>
                                            <input
                                                className="form-control" 
                                                type="text"
                                                name="slug"
                                                value={this.state.slug}
                                                onChange={this.dataChange.bind(this)}
                                            />
                                    </div>
                                    <div className="form-group ">
                                        <label>Nội dung chính</label>
                                            <input
                                                className="form-control" 
                                                type="text"
                                                name="content"
                                                value={this.state.content}
                                                onChange={this.dataChange.bind(this)}
                                            />
                                    </div>
                                    <div className="form-group ">
                                    <label>Trạng thái</label>
                                                <input
                                                className="form-control" 
                                                type="number"
                                                name="status"
                                                value={this.state.status}
                                                onChange={this.dataChange.bind(this)}
                                                />
                                    </div>
                                            <div className="form-group ">
                                    <label>Ngày tạo</label>
                                                <input
                                    className="form-control" 
                                                    type="date"
                                                    name="create_at"
                                                    value={this.state.create_at}
                                                    onChange={this.dataChange.bind(this)}
                                                />
                                            </div>
                                            <div className="form-group ">
                                    <label>Ngày cập nhập</label>
                                    <input 
                                                    className="form-control" 
                                                    type="date"
                                                    name="update_at"
                                                    value={this.state.update_at}
                                                    onChange={this.dataChange.bind(this)}
                                                />
                                            </div>
                                            <div className="form-group ">
                                              <input
                                              className="form-control" 
                                              type="number"
                                              name="is_delete"
                                              value={this.state.is_delete}
                                              onChange={this.dataChange.bind(this)}
                                                />
                                           </div>
                                            <button type="submit" onClick={this.saveItem}>Submit</button>
                                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    </div>
      );
    }
  }
  

export default Addpost;