import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/auth/Login';
import { isLogIn, isLogOut, setUserId } from '../modules/auth';

const AuthContainer = ({isLogIn,isLogOut,setUserId,loginState,userId}) => {
    return (
        <div>
           <Login isLogIn={isLogIn} isLogOut={isLogOut} setUserId={setUserId} loginState={loginState} userId={userId}/>
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
        setUserId,
    }
)(AuthContainer);