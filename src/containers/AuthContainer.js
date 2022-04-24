import React from 'react';
import { connect } from 'react-redux';
import Login from '../pages/compo/Login';
import { isLogIn, isLogOut } from '../modules/auth';

const AuthContainer = ({isLogIn,isLogOut,loginState}) => {
    return (
        <div>
           <Login isLogIn={isLogIn} isLogOut={isLogOut} loginState={loginState}/>
        </div>
    );
};
const mapStateProps=state=>({
    loginState:state.auth.loginState,
});
const mapDispatchToProps=dispatch=>({
    isLogIn:()=>{
        dispatch(isLogIn());
    },
    isLogOut:()=>{
        dispatch(isLogOut());
    }
})
export default connect(mapStateProps,mapDispatchToProps,)(AuthContainer);