import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import WikiSearch from './components/WikiSearch';
import './App.css';

class App extends Component {
  static flashMessenger(type = 'default', message = '') {
    toast(message, {
      position: toast.POSITION.TOP_CENTER,
      type
    });
  }

  render() {
    return (
      <div>
        <WikiSearch flashMessenger={App.flashMessenger} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
