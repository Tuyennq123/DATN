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
class Customer extends Component {    
    state = { 
        customer: [],
	      name: '',
	      email: '',
        phone: '',
	      created_at: '',
	      updated_at: '',
	      id:'',
        phone: '',
        date: '',
	      cmt: '',
	      loading: false,
	      message: 'hello',
	      showModal: false,
    }
    componentDidMount() {
      axios.post('http://localhost:8000/api/customer')
      .then(res => {
		  const customer = res.data.data;
		  this.setState({ customer });
		  console.log(customer)
		})
        .catch(error => console.log(error));
  }
  
	deleteRow(id, e){
        axios.post(`http://localhost:8000/api/customer/destroy/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const customer = this.state.customer.filter(item => item.id !== id);
            console.log(id);
            this.setState({ customer });
          })
          // .then(()=> toastWarning('Xoa thanh cong'))
  
	  }
	  
	  updateRow(id, e){
        axios.post(`http://localhost:8000/api/customer/update/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const customer = this.state.customer.filter(item => item.id !== id);
            console.log(id);
            this.setState({ customer });
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
        cmt
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
		const postUpdated = [...this.state.customer];
		const item = postUpdated.find(item=>item.id===id);
		this.setState({
			customer: [...postUpdated],
            name: item.name,
            email: item.email,
            cmt: item.cmt,
            date: item.date,
            phone: item.phone,
		    created_at: item.created_at, 
			updated_at: item.updated_at,
			id:item.id,
			loading: false,
            showModal: false, 
            is_delete: item.is_delete,
			user_id: item.user_id,
            
		 }) 
		 this.open()  
	  }  
    // Save post
	  saveItem = async () =>{
	let customer = [...this.state.customer];
	this.state.customer.map((item,index)=>{
		if (item.id===this.state.id) {
			customer[index] = [this.state]
		}
	})
	this.setState({customer})
	await axios.post(`http://localhost:8000/api/customer/update/` + this.state.id, {...this.state});
	await axios.post('http://localhost:8000/api/customer') 
        .then(res => {
		  const customer = res.data.data;
		  this.setState({ customer });
		  console.log(customer)
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
                <Modal.Title>Sửa thông tin khách hàng</Modal.Title>
            </Modal.Header>
				<Modal.Body>
				<form onSubmit={this.postData.bind(this)}>
						<div className="form-group ">
              <label>Họ và tên</label>
                <input
                  className="form-control" 
                  type="name"
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
						<div className="form-group ">
              <label>Ngày tạo</label>
							<input
               className="form-control" 
								type="date"
								name="created_at"
								value={this.state.created_at}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
                        <div className="form-group ">
              <label>Ngày sửa</label>
							<input
               className="form-control" 
								type="date"
								name="updated_at"
								value={this.state.updated_at}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
                        <div className="form-group ">
              <label>is delete</label>
							<input
               className="form-control" 
								type="number"
								name="is_delete"
								value={this.state.is_delete}
								onChange={this.dataChange.bind(this)}
							/>
						</div>
                        <div className="form-group ">
              <label>user id</label>
							<input
               className="form-control" 
								type="number"
								name="user_id"
								value={this.state.user_id}
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
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách khách hàng</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                            {/* <th scope="col">STT</th> */}
                                            <th scope="col">Họ và tên</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Số điện thoại</th>
                                            <th scope="col">Ngày</th>
                                            <th scope="col">Số chứng minh thư</th>
                                            <th scope="col">User_id</th>
                                            <th scope="col">Ngày tạo</th>
                                            <th scope="col">Ngày sửa</th>
                                            <th scope="col">
                                            <button type="button" class="btn btn-success">
                                                      <Link to="/admin/customer/addcustomer">
                                                        Thêm
                                                      </Link>
                                                </button>
                                            </th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.customer.map((item, index) => 
                                                         <tr key={index}> 
                                                         {/* <td>{item.id}</td>  */}
                                                         <td>{item.name}</td>
                                                         <td>{item.email}</td>
                                                         <td>{item.phone}</td>
                                                         <td>{item.date}</td>
                                                         <td>{item.cmt}</td>
                                                         <td>{item.user_id}</td>
                                                         <td>{item.created_at}</td>
                                                         <td>{item.updated_at}</td>
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
  

export default Customer;