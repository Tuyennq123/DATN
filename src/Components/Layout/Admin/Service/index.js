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
class Service extends Component { 

    state = { 
	  service: [],
	  name: '',
	  content: '',
    is_delete: '',
	  short_desc: '',
	  created_at: '',
	  id:'',
	  updated_at: '',
	  loading: false,
	  message: 'hello',
    showModal: false,
    image:'',
    }
    componentDidMount() {
      axios.post('http://localhost:8000/api/service')
      .then(res => {
		  const service = res.data.data;
		  this.setState({ service });
		  console.log(service)
		})
        .catch(error => console.log(error));
  }
  
	deleteRow(id, e){
        axios.post(`http://localhost:8000/api/service/destroy/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const service = this.state.service.filter(item => item.id !== id);
            console.log(id);
            this.setState({ service });
          })
          // .then(()=> toastWarning('Xoa thanh cong'))
  
	  }
	  
	  updateRow(id, e){
        axios.post(`http://localhost:8000/api/service/update/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const service = this.state.service.filter(item => item.id !== id);
            console.log(id);
            this.setState({ service });
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
		const image = this.state.image;
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
      image,
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
		const postUpdated = [...this.state.service];
		const item = postUpdated.find(item=>item.id===id);
		this.setState({
			service: [...postUpdated],
			name: item.name,
			short_desc: item.short_desc,
			content: item.content,
			is_delete: item.is_delete,
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
	let service = [...this.state.service];
	this.state.service.map((item,index)=>{
		if (item.id===this.state.id) {
			service[index] = [this.state]
		}
	})
	this.setState({service})
	await axios.post(`http://localhost:8000/api/service/update/` + this.state.id, {...this.state});
	await axios.post('http://localhost:8000/api/service') 
        .then(res => {
		  const service = res.data.data;
		  this.setState({ service });
		  console.log(service)
		})
        .catch(error => console.log(error));

		await this.close(); 
    // await toastSuccess('Sua thanh cong');
    
    } 
    


    render(){

    var baseUrl = 'http://localhost:8000/';
    console.log(baseUrl)

  
      return(
    <div className="admin-page">
		<div> 
		  <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm bài viết</Modal.Title>
            </Modal.Header>
				<Modal.Body>
				<form onSubmit={this.postData.bind(this)}>
						<div className="form-group ">
              <label>Tiêu đề</label>
                <input
                  className="form-control" 
                  type="name"
                  name="name"
                  value={this.state.name}
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
                                    <h6 className="m-0 font-weight-bold text-primary">Danh sách bài viết</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                        <thead>
                                            <tr>
                                            {/* <th scope="col">STT</th> */}
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Short_desc</th>
                                            <th scope="col">Content</th>
                                            <th scope="col">Create_at</th>
                                            <th scope="col">Update_at</th>
                                            <th scope="col">
                                            <button type="button" class="btn btn-success">
                                                      <Link to="/admin/service/addservice">
                                                        Thêm
                                                      </Link>
                                                </button>
                                            </th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.service.map((item, index) => 
                                                         <tr key={index}> 
                                                         {/* <td>{item.id}</td>  */}
                                                         <td>{item.name}</td>
                                                         <td>{item.price}</td> 
                                                         <td>{item.short_desc}</td> 
                                                         <td>{item.content}</td> 
                                                         <td>{item.created_at}</td>
                                                         <td>
                                                         <img src={`${baseUrl}${item.image}`}/>
                                                         

                                                           </td>
                                                         	<button className="btn btn-danger" onClick={(e) => this.deleteRow(item.id, e)}>Delete</button>
															                            <button className="btn btn-warning" onClick={(e) => this.EditRow(item.id)}>Edit</button> 
                                                         
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
  

export default Service;