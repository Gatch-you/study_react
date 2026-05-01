import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const RedirectToUsers = () => {

    if (axios.defaults.withCredentials) {
       return <Navigate to="/users" replace />;
    } else {
        return <Navigate to="/login" replace />;
    }

}
export default RedirectToUsers