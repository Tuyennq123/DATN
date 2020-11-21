import React, { Component } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Topbar from '../../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
// import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
class AddCustomer extends Component {    
    state = { 
        customer: [],
        name: '',
        email: '',
        phone: '',
        created_at: '',
        updated_at: '',
        id:'',
        date: '',
        cmt: '',
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
        const name = this.state.name;
        const email = this.state.email;
        const cmt = this.state.cmt;
		    const phone  = this.state.phone;
        const updated_at = this.state.updated_at;
		    const created_at = this.state.created_at;
	
	const data = {
        name,
        created_at,
        updated_at,
        email,
        phone,
        cmt,
    }
    
    axios.post('http://localhost:8000/api/customer/store', data)
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
              <label>Họ và tên</label>
                <input
                  className="form-control" 
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.dataChange.bind(this)}
                />
              </div>
            <div className="form-group ">
              <label>Email</label>
							<input
                className="form-control" 
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
            <div className="form-group ">
              <label>Số điện thoại</label>
							<input
                className="form-control" 
								type="number"
								name="phone"
								value={this.state.phone}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
						<div className="form-group ">
              <label>Date</label>
							<input
                className="form-control" 
								type="date"
								name="date"
								value={this.state.date}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
						<div className="form-group ">
              <label>Chứng minh thư</label>
              <input 
                className="form-control" 
								type="number"
								name="cmt"
								value={this.state.cmt}
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
  

export default AddCustomer;