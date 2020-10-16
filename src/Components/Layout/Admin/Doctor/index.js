import React, { Component } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Topbar from '../Topbar';


const Doctor = (props)  => {

        return (
            <div>      
        <div className="admin-page">
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                           123
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
            </div>
        );
    }


export default Doctor;