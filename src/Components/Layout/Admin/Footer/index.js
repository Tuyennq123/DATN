import React, { Component } from 'react';
import '../css/sb-admin-2.min.scss';

const Footer = props =>{
        return (
            <div>
                <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                    <span>Copyright © Your Website 2020</span>
                    </div>
                </div>
                </footer>
            </div>
        );
    }

export default Footer;