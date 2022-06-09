import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { apiLogin } from '../../lib/api';

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
        apiLogin(loginForm)
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
        <>
            <h3>로그인</h3>
            <Input name='id' placeholder='ID' onChange={onChange}/>
            <Input name='pw' placeholder='PW' onChange={onChange} type='password'/>
            <Button onClick={loginButton}>로그인</Button>
        </>
    );
};

export default Login;