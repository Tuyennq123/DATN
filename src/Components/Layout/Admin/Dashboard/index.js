import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';


class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
            slug: '',
            content: '',
            status: '',
            is_delete: '',
            create_at: '',
            update_at: '',
            loading: false,
            message: 'hello',
            file: null
		}
	}

	dataChange(ev){
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  postData(ev){
    ev.preventDefault()
    const title = this.state.title;
    const slug = this.state.slug;
    const content = this.state.content;
	const status = this.state.status;
	const update_at = this.state.update_at;
	const create_at = this.state.create_at;



    this.setState({
      loading: true
    })

    const data = {
      title,
      slug,
      content,
	  status,
	  create_at,
	  update_at, 
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



	render() {
		return (
			<div>
				<form onSubmit={this.postData.bind(this)}>
					<div>
						<input
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.dataChange.bind(this)}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="slug"
							value={this.state.slug}
							onChange={this.dataChange.bind(this)}
						/>
					</div>
					<div>
						<input
							type="text"
							name="content"
							value={this.state.content}
              				onChange={this.dataChange.bind(this)}
						/>
					</div>
        
                    <div>
						<input
							type="number"
							name="status"
							value={this.state.status}
							onChange={this.dataChange.bind(this)}
						/>
					</div>
                   
                    <div>
						<input
							type="date"
							name="create_at"
							value={this.state.create_at}
              onChange={this.dataChange.bind(this)}
						/>
					</div>
                    <div>
						<input
							type="date"
							name="update_at"
							value={this.state.update_at}
              onChange={this.dataChange.bind(this)}
						/>
					</div>
                    <div>
						<input
							type="number"
							name="is_delete"
							value={this.state.is_delete}
              onChange={this.dataChange.bind(this)}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default Dashboard
