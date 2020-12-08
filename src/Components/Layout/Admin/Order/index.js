import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';
import axios from 'axios';
const baseUrlApi = 'http://localhost:8000/api/v1';

class Order extends Component {
    state = {
        tableData: [],
    }
    onGetListOrders() {
        axios.get(`${baseUrlApi}/orders`).then(response => {
            const { data } = response.data;
            this.setState({
                tableData: [...data]
            });
        });
    }
    componentDidMount() {
        this.onGetListOrders();
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
                                                        <th scope="col">Số điên thoại</th>
                                                        <th scope="col">Ngày sinh</th>
                                                        <th scope="col">CMND/PASSPORT</th>
                                                        <th scope="col">Dịch vụ</th>
                                                        <th scope="col">Lịch khám</th>
                                                        <th scope="col">Ngày tạo</th>
                                                        <th scope="col">Hành động</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {this.state.tableData.map((item, index) =>
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.customer.name}</td>
                                                        <td>{item.customer.phone}</td>
                                                        <td>{item.customer.date}</td>
                                                        <td>{item.customer.cmt}</td>
                                                        <td>{item.schedule.service.name}</td>
                                                        <td>{item.time.name}</td>
                                                        <td>{item.created_at}</td>
                                                        <td>

                                                        </td>
                                                    </tr>
                                                )}
                                                </tbody>
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
export default Order;
