import React from 'react';
import Routers from '../router/index'
import './App.scss';
function App() {
  var $baseUrl = 'http://localhost:8000/public/';
  return (
    <div className="App">
     
         <Routers />
     
    </div>
  );
}

export default App;
