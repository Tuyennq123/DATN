import React, { Component } from 'react';
import Header from '../Header';

class News extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="breadcrumb-page">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Trang chủ</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Tin tức</li>
                            </ol>
                        </nav>
                    </div>
	            </div>
            </div>
        );
    }
}

export default News;