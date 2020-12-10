import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
// import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
class TimeClass extends Component {    
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
    componentDidMount() {
      axios.get('http://localhost:8000/api/timecalender')
      .then(res => {
		  const timecalender = res.data.data;
		  this.setState({ timecalender });
		  console.log(timecalender)
		})
        .catch(error => console.log(error));
  }
  
	deleteRow(id, e){
        axios.post(`http://localhost:8000/api/timecalender/destroy/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const timecalender = this.state.timecalender.filter(item => item.id !== id);
            console.log(id);
            this.setState({ timecalender });
          })
          // .then(()=> toastWarning('Xoa thanh cong'))
  
	  }
	  
	  updateRow(id, e){
        axios.post(`http://localhost:8000/api/timecalender/update/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const timecalender = this.state.timecalender.filter(item => item.id !== id);
            console.log(id);
            this.setState({ timecalender });
          })
      
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
    
	
	  }
	  close = () => {
        this.setState({ showModal: false }); 
      } 
    
    open = () => {
        this.setState({ showModal: true });
    }
    
    // Edit post
  	EditRow = (id) =>{
		const postUpdated = [...this.state.timecalender];
		const item = postUpdated.find(item=>item.id===id);
		this.setState({
			timecalender: [...postUpdated],
			name: item.name,
			time_start: item.time_start,
            time_end: item.time_end,
            message: item.message,
		    created_at: item.created_at, 
			updated_at: item.updated_at,
			id:item.id,
			loading: false,
			showModal: false, 
		 }) 
		 this.open()  
	  }  
    // Save post
	  saveItem = async () =>{
	let timecalender = [...this.state.timecalender];
	this.state.timecalender.map((item,index)=>{
		if (item.id===this.state.id) {
			timecalender[index] = [this.state]
		}
	})
	this.setState({timecalender})
	await axios.post(`http://localhost:8000/api/timecalender/update/` + this.state.id, {...this.state});
	await axios.post('http://localhost:8000/api/timecalender') 
        .then(res => {
		  const timecalender = res.data.data;
		  this.setState({ timecalender });
		  console.log(timecalender)
		})
        .catch(error => console.log(error));

		await this.close(); 
		// await toastSuccess('Sua thanh cong');
	  } 
  
    render(){
      return(
    <div className="admin-page">
		<div> 
		  <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Sửa ca khám</Modal.Title>
            </Modal.Header>
				<Modal.Body>
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
				</Modal.Body>
            <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
            </Modal.Footer>
        </Modal>
		</div>
        <div id="wrapper">
            <Navbar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <div className="container-fluid">
                        <div>
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách ca khám</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                            {/* <th scope="col">STT</th> */}
                                            <th scope="col">Ca khám</th>
                                            <th scope="col">Thời gian bắt đầu</th>
                                            <th scope="col">Thời gian kết thúc</th>
                                            <th scope="col">Lời nhắn</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Ngày sửa</th>
                                            <th scope="col">
                                            <button type="button" class="btn btn-success">
                                                      <Link to="/admin/timeclass/addtime">
                                                        Thêm
                                                      </Link>
                                                </button>
                                            </th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.timecalender.map((item, index) => 
                                                         <tr key={index}> 
                                                         {/* <td>{item.id}</td>  */}
                                                         <td>{item.name}</td>
                                                         <td>{item.time_start}</td>
                                                         <td>{item.time_end}</td>
                                                         <td>{item.message}</td>
                                                         <td>{item.created_at}</td>
                                                         <td>{item.updated_end}</td>
                                                         <td> 
                                                         	<button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Delete</button>
															                            <button className="btn btn-warning" onClick={(e) => this.EditRow(item.id)}>Edit</button> 
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
  

export default TimeClass;