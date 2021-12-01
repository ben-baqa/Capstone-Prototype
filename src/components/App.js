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
    <div style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80")`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:'100vh'
    }}>
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
