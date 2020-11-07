import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: true,

        };
      }
      close() {
        this.setState({ showModal: false });
      }
    
      open() {
        this.setState({ showModal: true });
      }
    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Modal;