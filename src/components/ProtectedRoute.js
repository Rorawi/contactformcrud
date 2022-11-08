import React from 'react';
import { useSelector,connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children,authUsers}) => {

       if(!authUsers) 
       return <Navigate to= "/login" replace="true" />
    return children
}


const mapStateToProps =(state)=> {
    return{
        authUsers: state.authReducer.loggedInUsers,
    }
}
export default connect(mapStateToProps) (ProtectedRoute);


