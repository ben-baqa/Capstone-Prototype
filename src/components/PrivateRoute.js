import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';

const PrivateRoute = () => {

    const {currentUser} = useAuth();
    return currentUser ? <Outlet/> : <Navigate to="/"/>
    // return(
    //     <Route
    //         {...rest}
    //         render={props=>{
    //             return currentUser ? <Component {...props}/> : <Navigate to="/"/>
    //         }}
    //     >
    //     </Route>
    // )
}

export default PrivateRoute;