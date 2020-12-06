import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import './cab.css';
import './index.min.css';
import { Radio, Button, Message } from 'element-react/next';

const baseUrlApi = 'http://localhost:8000/api/v1';

const initialState = {
    name: '',
    email: '',
    phone: '',
    clinic_schedule_id:'',
    time_id:'',
    date: '',
    cmt: '',
    loading: false,
    schedules: [],
    arrayTimes: [],
};

class Calendars extends Component {
    state = Object.assign({}, initialState);
    onGetClinicSchedules() {
      axios.get(`${baseUrlApi}/clinic-schedules`, { params: { service_id: 14 } }).then(response => {
        const { data } = response.data;
        this.setState({
            schedules: [...[{ id: 0, name: 'Chọn ngày khám' }], ...data]
        });
      }).catch(e => {
        console.log(e);
      })
    }
    componentDidMount() {
      this.onGetClinicSchedules();
    }
    dataChange(ev){
		this.setState({
		  [ev.target.name]: ev.target.value
		})
    }
    setClinicSchedule(event) {
        const value = event.target.value;
        const schedule = this.state.schedules.filter(schedule => schedule.id === Number.parseInt(value))[0];
        this.setState({
            clinic_schedule_id: value,
            arrayTimes: [...schedule.times]
        });
    }
    setTime(time_id) {
        this.setState({ time_id });
    }
	postData = async (ev) =>{
		ev.preventDefault();
        this.setState({ loading: true });
	    const data = this.state;
	    axios.post(`${baseUrlApi}/create-orders`, data).then(response => {
            this.setState({ loading: false });
            const result = response.data;
            if (result.error_code === 0) {
                this.setState(initialState);
                Message.success(result.message);
            } else {
                Message.error(result.message);
            }
        });
    }

    render() {

        return (
            <div className="main">
                <Header />
                <div className="container">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Điền thông tin</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.postData.bind(this)}>
                                <div className="post-form">
                                    <div className="form-group">
                                        <label>Họ và tên</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày sinh</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="date"
                                            value={this.state.date}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số CMND/PASSPORT</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="cmt"
                                            value={this.state.cmt}
                                            onChange={this.dataChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ngày khám bệnh</label>
                                        <select className="form-control"
                                                name="clinic_schedule_id"
                                                value={this.state.clinic_schedule_id}
                                                onChange={this.setClinicSchedule.bind(this)}>
                                            {this.state.schedules.map((option) => (
                                                <option value={option.id} key={option.id}>{option.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Chọn lịch khám</label>
                                        <div className="clearfix"></div>
                                        <Radio.Group value={this.state.time_id} onChange={this.setTime.bind(this)}>
                                            {this.state.arrayTimes.map((time) => (
                                                <Radio value={time.id}>{time.name}</Radio>
                                            ))}
                                        </Radio.Group>
                                    </div>
                                    <div className="text-center">
                                        <Button type="success" onClick={this.postData.bind(this)} loading={this.state.loading}>Xác nhận</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Calendars;
