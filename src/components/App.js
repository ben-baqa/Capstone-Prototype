import React, {useState} from 'react';
import { ChannelShow } from "./channels/ChannelShow";
import { LandingPage } from "./channels/LandingPage";
import { ChannelList} from "./channels/ChannelList";
import Signup from "./users/Signup";
import Login from "./users/Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import history from '../history';
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import './App.css';

// const url = 'http://localhost:3001'

// new Date().toUTCString()

function App() {

  return (
    <div id="app-div">
      <Router history={history}>
          <AuthProvider>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<LandingPage/>}/>
                    <Route path='/channels' element={<PrivateRoute/>}>
                        <Route path='/channels' element={<ChannelList/>}/>
                    </Route>
                    <Route path='/channels/:id' element={<PrivateRoute/>}>
                        <Route path='/channels/:id' element={<ChannelShow/>}/>
                    </Route>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
          </AuthProvider>
      </Router>
    </div>
  )
}

export const SocketContext = React.createContext()
const AppWithContext = () =>{
  const [socket, setSocket] = useState(null)
  const [socketID, setSocketID] = useState(-1)

  return (
    <SocketContext.Provider value={ {socket, setSocket, socketID, setSocketID}}>
      <App/>
    </SocketContext.Provider>
  )
}

export default AppWithContext;
