import React, { Component } from 'react';
import axios from 'axios';

class index extends Component {
  state = {
    selectedFile: []
  }

  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("http://localhost:8000/api/service/store", fd, {
      onUploadProgress: progressEvent => {
        console.log("upload progress " + Math.round((progressEvent.loaded / progressEvent.total)*100) + "%");
      }
    })
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <div className="Appzz">
        <input type = "file" onChange = {this.fileSelectedHandler} />
        <button onClick = {this.fileUploadHandler}>upload</button>
      </div>
    );
  }
}
export default index;