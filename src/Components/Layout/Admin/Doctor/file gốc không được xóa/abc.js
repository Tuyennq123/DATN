import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';


class Doctor extends Component {
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
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		axios
			.post('http://localhost:8000/api/post/store', this.state)
			.then(response => {
                console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			console.log(this.state)
	}

	render() {
		const {id, title, slug, content,  status,  create_at, update_at, is_delete} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="slug"
							value={slug}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="content"
							value={content}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="number"
							name="status"
							value={status}
							onChange={this.changeHandler}
						/>
					</div>
                   
                    <div>
						<input
							type="text"
							name="create_at"
							value={create_at}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="update_at"
							value={update_at}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="number"
							name="is_delete"
							value={is_delete}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default Doctor
