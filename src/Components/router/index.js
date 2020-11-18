import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Contact from '../Layout/Main/Contact'
  import Home from '../Layout/Main/Home/index'
  import Dashboard from '../Layout/Admin/Dashboard/index'
  import Doctor from '../Layout/Admin/Doctor'
  import Post from '../Layout/Admin/Post'
  import AddPost from '../Layout/Admin/Post/AddPost/Addpost'
  import EditPost from '../Layout/Admin/Post/EditPost/EditPost'
  import Service from '../Layout/Admin/Service'
  import AddService from '../Layout/Admin/Service/AddService/Addservice'




  const Routers = ({ props })  => {
        return (
        <Router>
              <Route>
                <Switch>
                  <Route path="/gioithieu">
                    <Contact />
                  </Route>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                </Switch>
              </Route>

              <Switch>
                <Route path="/admin" exact>
                  <Dashboard />
                </Route>
                <Route path="/admin/bacsi">
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
                <Route path="/admin/service/addservice" exact>
                  <AddService />
                </Route>
              </Switch>
      </Router>
        );
    }
Routers.propTypes = {}

export default Routers;