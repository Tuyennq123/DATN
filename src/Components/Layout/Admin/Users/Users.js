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
class Users extends Component {    
    state = { 
      user: [],
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
      axios.post('http://localhost:8000/api/user')
      .then(res => {
		  const user = res.data.data;
		  this.setState({ user });
		  console.log(user)
		})
        .catch(error => console.log(error));
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
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách ca khám</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                            {/* <th scope="col">STT</th> */}
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Email verrife</th>
                                            <th scope="col">Password</th>
                                            <th scope="col">image</th>
                                            <th scope="col">Role</th>
                                            <th scope="col"> Created_at</th>
                                            <th scope="col"> Update_at</th>
                                            {/* <th scope="col">
                                            <button type="button" class="btn btn-success">
                                                      <Link to="/admin/timeclass/addtime">
                                                        Thêm
                                                      </Link>
                                                </button>
                                            </th> */}
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.user.map((item, index) => 
                                                         <tr key={index}> 
                                                         <td>{item.name}</td>
                                                         <td>{item.email}</td>
                                                         <td>{item.email_verified_at}</td>
                                                         <td>{item.password}</td>
                                                         <td>{item.image}</td>
                                                         <td>{item.role}</td>
                                                         <td>{item.created_at}</td>
                                                         <td>{item.updated_end}</td>
                                                         {/* <td>  */}
                                                         	{/* <button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Delete</button> */}
															{/* <button className="btn btn-warning" onClick={(e) => this.EditRow(item.id)}>Edit</button>  */}

                                                            {/* <button className="btn btn-danger">Delete</button> */}
															{/* <button className="btn btn-warning">Edit</button>  */}
                                                         {/* </td>  */}
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
  

export default Users;