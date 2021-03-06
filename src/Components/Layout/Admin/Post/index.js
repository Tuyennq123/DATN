import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import swal from 'sweetalert';
import { Modal, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { toastSuccess, toastWarning } from '../../../../Helper/toastHelper';
import './posts.scss';
class Doctor extends Component {    
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
    componentDidMount() {
      axios.post('http://localhost:8000/api/post')
      .then(res => {
		  const posts = res.data.data;
		  this.setState({ posts });
		  console.log(posts)
		})
        .catch(error => console.log(error));
  }
	
	deleteRow(id, e){
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((willDelete) => {
			if (willDelete) {
			  swal("Poof! Your imaginary file has been deleted!", {
				icon: "success",
			  });
			} else {
			  swal("Your imaginary file is safe!");
			}
		axios.post(`http://localhost:8000/api/post/destroy/` + id)
		.then(res => {
		  console.log(res);
		  console.log(res.data);
		  const posts = this.state.posts.filter(item => item.id !== id);
		  console.log(id);
		  this.setState({ posts });
		})
	});
  
	  }


	  
	  updateRow(id, e){
        axios.post(`http://localhost:8000/api/post/update/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const posts = this.state.posts.filter(item => item.id !== id);
            console.log(id);
            this.setState({ posts });
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
    
    
	
	  }
	  close = () => {
        this.setState({ showModal: false }); 
      } 
    
    open = () => {
        this.setState({ showModal: true });
    }
    
    // Edit post
  	EditRow = (id) =>{
		const postUpdated = [...this.state.posts];
		const item = postUpdated.find(item=>item.id===id);
		this.setState({
			posts: [...postUpdated],
			title: item.title,
			slug: item.slug,
			content: item.content,
			status: item.status,
			is_delete: item.is_delete,
		  create_at: item.create_at, 
			update_at: item.update_at,
			id:item.id,
			loading: false,
			message: 'hello',
			showModal: false, 
		 }) 
		 this.open()  
	  }  
    // Save post
	  saveItem = async () =>{
	let posts = [...this.state.posts];
	this.state.posts.map((item,index)=>{
		if (item.id===this.state.id) {
			posts[index] = [this.state]
		}
	})
	this.setState({posts})
	await axios.post(`http://localhost:8000/api/post/update/` + this.state.id, {...this.state});
	await axios.post('http://localhost:8000/api/post') 
        .then(res => {
		  const posts = res.data.data;
		  this.setState({ posts });
		  console.log(posts)
		})
        .catch(error => console.log(error));

		await this.close(); 
		await toastSuccess('Sua thanh cong');
	  } 
  
    render(){
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
                                            <th scope="col">Tiêu đề</th>
                                            <th scope="col">Slug</th>
                                            <th scope="col">Nội dung</th>
                                            <th scope="col">Create_at</th>
                                            <th scope="col">Update_at</th>
                                            <th scope="col">
                                                <button type="button" class="btn btn-success">
                                                      <Link to="/admin/post/addpost">
                                                        Thêm
                                                      </Link>
                                                </button>
                                            </th>
                                            </tr>
                                        </thead>
                                            <tbody>
                                                    {this.state.posts.map((item, index) => 
                                                         <tr key={index}> 
                                                         {/* <td>{item.id}</td>  */}
                                                         <td>{item.title}</td>
                                                         <td>{item.slug}</td> 
                                                         <td>{item.content}</td> 
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
  

export default Doctor;