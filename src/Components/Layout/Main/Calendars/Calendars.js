import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import './cab.css';


class Calendars extends Component {
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
        timecalender: [],
    }
    componentDidMount() {
      axios.post('http://localhost:8000/api/timecalender')
      .then(res => {
		  const timecalender = res.data.data;
		  this.setState({ timecalender });
		  console.log(timecalender)
		})
        .catch(error => console.log(error));
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

    render() {
      
        return (
            <div>
                <Header />
                <div className="container">
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
								value={this.item.time_start}
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
            <div>
        <label className="wrapper" htmlFor="states">Ngày khám bệnh</label>
        <div className="button dropdown"> 
          <select id="colorselector">
            <option value="red">12/2/2020</option>
            <option value="yellow">13/2/2020</option>
            <option value="blue">14/2/2020</option>
          </select>
        </div>
       



        <div className="output">
          <div id="red" className="colors red">

          {/* <div class="foscheck">
            <input type="checkbox" id="fos18" value="1" name="fooby[1][]" />
            {this.state.timecalender.map((item, index) => 
            <label for="fos18">
                <tr key={index}> 
                  <td>{item.time_start}</td>
                </tr> 
            </label>
            )} 
          </div> */}

            {this.state.timecalender.map((item, index) => 
                <tr key={index}>
                  <input type="checkbox" id="fos18" value="1" name="fooby[1][]" /> 
                  <td>{item.time_start}</td>
                </tr> 
            )} 

          
          </div>
          <div id="yellow" className="colors yellow">
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
          </div>
          <div id="blue"  className="colors blue">
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
            <label>
              <input type="checkbox" class="radio" value="1" name="fooby[1][]" />Kiwi
            </label>
          </div>
        </div>
      </div>
          
						<button type="submit" onClick={this.saveItem}>Submit</button>
					</form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                
            </div>
        );
    }
}

export default Calendars;