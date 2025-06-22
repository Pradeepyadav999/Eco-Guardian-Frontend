import React from 'react';
import {Navigate} from 'react-router-dom';

//simulated auth(replace with your actual auth logic)
const user={
    _id:null,//replace with actual user ID from context or localstorage
};

const ProtectedRoute=({children}) =>{
    return user?children:<navigate to="/login"/>;
};

export default ProtectedRoute;