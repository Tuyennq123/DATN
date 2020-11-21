import React, { Component } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Topbar from '../../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
// import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
class Addservice extends Component {    
    state = { 
	    service: [],
	    name: '',
	    content: '',
        is_delete: '',
	    short_desc: '',
	    created_at: '',
	    id:'',
        updated_at: '',
        price: '',
    }

	// Add post
    dataChange(ev){
		this.setState({
		  [ev.target.name]: ev.target.value
		})
	  }
	
	postData = async (ev) =>{
		ev.preventDefault()
        const name = this.state.name;
		const price = this.state.price;
		const short_desc = this.state.short_desc;
		const content = this.state.content;
        const updated_at = this.state.updated_at;
		const created_at = this.state.created_at;
	
	const data = {
        name,
        short_desc,
        content,
        created_at,
        updated_at,
        price,

    }
    
    axios.post('http://localhost:8000/api/service/store', data)
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
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group ">
                                    <label>Tiêu đề</label>
                                        <input
                                            className="form-control" 
                                            type="number"
                                            name="price"
                                            value={this.state.price}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group ">
                                        <label>short_desc</label>
                                            <input
                                                className="form-control" 
                                                type="text"
                                                name="short_desc"
                                                value={this.state.short_desc}
                                                onChange={this.dataChange.bind(this)}
                                            />
                                    </div>
                                    <div className="form-group ">
                                        <label>content</label>
                                            <input
                                                className="form-control" 
                                                type="text"
                                                name="content"
                                                value={this.state.content}
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
  

export default Addservice;