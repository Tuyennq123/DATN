import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route  } from "react-router-dom";
  // import Contact from '../Layout/Main/Contact'
  import Serviceinfo from '../Layout/Main/Serviceinfo/Serviceinfo'
  import Home from '../Layout/Main/Home/index'
  import News from '../Layout/Main/News/News'
  import Dashboard from '../Layout/Admin/Dashboard/index'
  import Doctor from '../Layout/Admin/Doctor'
  import Post from '../Layout/Admin/Post'
  import AddPost from '../Layout/Admin/Post/AddPost/Addpost'
  import EditPost from '../Layout/Admin/Post/EditPost/EditPost'
  import Service from '../Layout/Admin/Service'
  import Order from '../Layout/Admin/Order'
  import AddService from '../Layout/Admin/Service/AddService/Addservice'
  import Editservice from '../Layout/Admin/Service/EditService/Editservice'
  import TimeClass from '../Layout/Admin/TimeClass/TimeClass'
  import Addtime from '../Layout/Admin/TimeClass/Addtime/Addtime'
  import Users from '../Layout/Admin/Users/Users'
  import Customer from '../Layout/Admin/Customer/Customer'
  import AddCustomer from '../Layout/Admin/Customer/AddCustomer/AddCustomer'
  import Calendars from '../Layout/Main/Calendars/Calendars';
import AboutUs from '../Layout/Main/AboutUs';
import Contact from '../Layout/Main/Contact/Contact';
  const Routers = ({ })  => {
        return (
        <Router>
              <Route>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/gioithieu">
                    <AboutUs />
                  </Route>
                  <Route path="/tintuc">
                    <News />
                  </Route>
                  <Route path="/dichvu">
                    <Serviceinfo />
                  </Route>
                  <Route path="/datlich/:id" component={Calendars} />
                  <Route path="/lienhe">
                    <Contact />
                  </Route>
                </Switch>
              </Route>
              <Switch>
                <Route path="/admin" exact>
                  <Dashboard />
                </Route>
                <Route path="/admin/doctor">
                  <Doctor />
                </Route>
                <Route path="/admin/post" exact>
                  <Post />
                </Route>
                <Route path="/admin/post/addpost">
                  <AddPost />
                </Route>
                <Route path="/admin/post/editpost">
                  <EditPost />
                </Route>
                <Route path="/admin/service" exact>
                  <Service />
                </Route>
                <Route path="/admin/orders" exact>
                  <Order />
                </Route>
                <Route path="/admin/service/addservice" exact>
                  <AddService />
                </Route>
                <Route path="/admin/service/editservice" exact>
                  <Editservice />
                </Route>
                <Route path="/admin/timeclass" exact>
                  <TimeClass />
                </Route>
                <Route path="/admin/timeclass/addtime">
                  <Addtime />
                </Route>
                <Route path="/admin/users" exact>
                  <Users />
                </Route>
                <Route path="/admin/customer" exact>
                  <Customer />
                </Route>
                <Route path="/admin/customer/addcustomer">
                  <AddCustomer />
                </Route>
              </Switch>
      </Router>
        );
    }
Routers.propTypes = {}

export default Routers;
