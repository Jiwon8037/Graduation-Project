import React, { useState } from 'react';
import axios from 'axios'

const Login = ({isLogIn,isLogOut,loginState}) => {
    let userLoginState=`${loginState}`;
    const [userName,setUserName]=useState('');

    const [loginForm,setLoginForm]=useState({
        id:'',
        pw:'',
    });

    const onChange=(event)=>{
        setLoginForm({
            ...loginForm,
            [event.target.name]:event.target.value,
        })
    };
   
    const onClick=()=>{
        axios.post('/api/login',loginForm
            ).then(res=>{
                if(res.data.id===loginForm.id){
                    isLogIn();
                    setUserName(res.data.id);
                }else alert(res.data);
            }).catch((err)=>{
                console.log(err);
            });
    }
    const logOut=()=>{
        isLogOut();
        setUserName('');
    }
    return (
        <div>
            <h1>login page</h1>
            <h2>login now? : {userLoginState}</h2>
            <h2>user : {userName}</h2>
            ID : <input name='id' placeholder='id' onChange={onChange}/><br/>
            PW : <input name='pw' placeholder='pw' onChange={onChange}/><br/>
            <button onClick={onClick}>login button</button>
            <button onClick={logOut}>logout button</button>
        </div>
    );
};

export default Login;