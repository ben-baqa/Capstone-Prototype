import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './components/App';
import AppWithContext from './components/SocketContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext/>
  </React.StrictMode>,
  document.getElementById('root')
);