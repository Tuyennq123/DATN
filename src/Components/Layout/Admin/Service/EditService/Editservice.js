import React, { Component } from 'react';
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Topbar from '../../Topbar';
import axios from 'axios';
import swal from 'sweetalert';

class Editservice extends Component {    
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

    updateRow(id, e){
        axios.post(`http://localhost:8000/api/service/update/` + id)
          .then(res => {
            console.log(res);
            console.log(res.data);
            const service = this.state.service.filter(item => item.id !== id);
            console.log(id);
            this.setState({ service });
            swal({
              title: "Good job!",
              text: "You clicked the button!",
              icon: "success",
              button: "Aww yiss!",
            });
          })
      
  }
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

	// Add post
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
    swal({
      title: "Cập nhập thành công",
      text: "You clicked the button!",
      icon: "success",
      button: "Xác nhận !",
    });
    
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
  

export default Editservice;