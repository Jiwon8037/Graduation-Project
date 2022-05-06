import React, { useState } from 'react';
import axios from 'axios'

const Login = ({isLogIn,isLogOut, getUserId, loginState, userId}) => {
    let userLoginState=`${loginState}`;

    const [loginForm,setLoginForm]=useState({
        id:'',
        pw:'',
    });

    let form = new FormData();
    form.append("id", loginForm.id);
    form.append("pw", loginForm.pw)

    const onChange=(event)=>{
        setLoginForm({
            ...loginForm,
            [event.target.name]:event.target.value,
        })
    };
   
    const loginButton=()=>{
        //axios.post('/api/login',form,{withCredentials: true})
        axios.post('/api/login',loginForm,{withCredentials: true})
        .then((res)=>{
            console.log(res.data.isLogin)
            if(res.data.isLogin===true){
                isLogIn();
                getUserId(res.data.id)
            }else{
                alert('check id or pw ');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    const logOut=()=>{
        axios.post('/api/logout',null,{withCredentials:true})
        .then(()=>{
            isLogOut();
            getUserId('');
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div>
            <h1>login page</h1>
            <h2>login now? : {userLoginState}</h2>
            <h2>user : {userId}</h2>
            ID : <input name='id' placeholder='id' onChange={onChange}/><br/>
            PW : <input name='pw' placeholder='pw' onChange={onChange}/><br/>
            <button onClick={loginButton}>login button</button>
            <button onClick={logOut}>logout button</button>
        </div>
    );
};

export default Login;