import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';

const PrivateRoute = () => {
    const {currentUser} = useAuth();
    return currentUser && currentUser.emailVerified ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoute;