import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from "react-router-dom";


class OderDoctor extends Component {
    state = {
      listcalendar: [],
    }

    componentDidMount() {
      axios.post('http://localhost:8000/api/list-calendar')
      .then(res => {
		  const listcalendar = res.data.data;
		  this.setState({ listcalendar });
		  console.log(listcalendar)
		})
        .catch(error => console.log(error));
  }


    render() {
     
        return(
            <div className="admin-page">
                <div id="wrapper">
                    <Navbar />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Topbar />
                            <div className="container-fluid">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Danh sách khách hàng</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">STT</th>
                                                        <th scope="col">Họ và tên</th>
                                                        <th scope="col">Dịch vụ</th>
                                                        <th scope="col">Lịch khám</th>
                                                        <th scope="col">Ngày tạo</th>
                                                        <th scope="col">Trạng thái</th>
                                                        <th scope="col">Hành động</th>
                                                    </tr>
                                                </thead>
                                                {this.state.listcalendar.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.customer_id}</td>
                                                        <td>{item.service_id}</td>
                                                        <td>{item.time_id}</td>
                                                        <td>
                                                            {item.clinic_schedule_id}
                                                        </td>
                                                        <td>{item.status}</td>
                                                        <td>
                                                        <Link to="/admin/OderDoctor/AddOder">
                                                          Thêm hồ sơ khám
                                                        </Link>
                                                            {/* <button className="btn btn-warning" onClick={(e) => this.edit(item.id, e)}>Thêm hồ sơ khám</button> */}
                                                            <button className="btn btn-info" onClick={(e) => this.deleteRow(item.id, e)}>Hủy khám</button>
                                                        </td>
                                                    </tr>
                                                )}
                                            </table>
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
export default OderDoctor;
