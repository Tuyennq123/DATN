import React, { Component } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Topbar from '../../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
// import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
class Addtime extends Component {    
    state = { 
	    timecalender: [],
	  name: '',
	  message: '',
      time_start: '',
	  time_end: '',
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
		const name = this.state.name;
        const time_start = this.state.time_start;
		const time_end  = this.state.time_end;
		const message = this.state.message;
        const updated_at = this.state.updated_at;
		const created_at = this.state.created_at;
	
		const data = {
        name,
        time_start,
	    message,
        created_at,
        updated_at
    }

    axios.post('http://localhost:8000/api/timecalender/store', data)
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
              <label>Ca khám</label>
                <input
                  className="form-control" 
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.dataChange.bind(this)}
                />
              </div>
            <div className="form-group ">
              <label>Giờ bắt đầu</label>
							<input
                className="form-control" 
								type="text"
								name="time_start"
								value={this.state.time_start}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
            <div className="form-group ">
              <label>Giờ kết thúc</label>
							<input
                className="form-control" 
								type="text"
								name="time_end"
								value={this.state.time_end}
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
              <label>Lời nhắn</label>
							<input
               className="form-control" 
								type="text"
								name="message"
								value={this.state.message}
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
  

export default Addtime;