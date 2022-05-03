import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/compo/Login';
import { isLogIn, isLogOut, getUserId } from '../modules/auth';

const AuthContainer = ({isLogIn,isLogOut,getUserId,loginState,userId}) => {
    return (
        <div>
           <Login isLogIn={isLogIn} isLogOut={isLogOut} getUserId={getUserId} loginState={loginState} userId={userId}/>
        </div>
    );
};

export default connect(
    (state)=>({
        loginState:state.auth.loginState,
        userId:state.auth.userId,
    }),
    {
        isLogIn,
        isLogOut,
        getUserId,
    }
)(AuthContainer);