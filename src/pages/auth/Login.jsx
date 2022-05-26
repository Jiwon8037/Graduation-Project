import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const StyledLoginBlock=styled.div`
    h3{
        margin: 0;
        color:black;
        margin-bottom: 1px;
    }
`;
const StyledInput=styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid;
    }
    &+&{
        margin-top:1rem;
    }
`;

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
        <StyledLoginBlock>
            <h3>로그인</h3>
            <StyledInput name='id' placeholder='ID' onChange={onChange}/>
            <StyledInput name='pw' placeholder='PW' onChange={onChange} type='password'/>
            <Button onClick={loginButton}>로그인</Button>
        </StyledLoginBlock>
    );
};

export default Login;