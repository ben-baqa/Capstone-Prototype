import React from 'react';
import { ChannelShow } from "./channels/ChannelShow";
import { LandingPage } from "./channels/LandingPage";
import { ChannelList} from "./channels/ChannelList";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import history from '../history';
// const url = 'http://localhost:3001'

// new Date().toUTCString()
function App() {

  return (
    <div>
      <Header/>
      <br/>
      <Router history={history}>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/channels' element={<ChannelList/>}/>
            <Route path='/channels/:id' element={<ChannelShow/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
