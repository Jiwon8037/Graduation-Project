import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = ({setUserId, userId}) => {
    const navigate=useNavigate();

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
    
    const loginButton=()=>{/*
        let form = new FormData();
        form.append("id", loginForm.id);
        form.append("pw", loginForm.pw);
        axios.post('/api/login',form,{withCredentials: true})*/
        axios.post('/api/login',loginForm,{withCredentials: true})
        .then((res)=>{
            if(res.data.loginSuccess===true){
                sessionStorage.setItem('user',String(res.data.id));
                setUserId(sessionStorage.getItem('user'));
                navigate('/',{replace: true});
            }else{
                alert('check id or pw ');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div>
            <h1>login page</h1>
            <h2>user : {userId}</h2>
            ID : <input name='id' placeholder='id' onChange={onChange}/><br/>
            PW : <input name='pw' placeholder='pw' onChange={onChange}/><br/>
            <button onClick={loginButton}>login button</button>
        </div>
    );
};

export default Login;