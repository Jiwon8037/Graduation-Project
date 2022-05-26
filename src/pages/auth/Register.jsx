import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const StyledRegisterBlock=styled.div`
    h3{
        margin: 0;
        color:black;
        margin-bottom: 1px;
    }
    .success{
        background: lightgreen;
        
    }
    .fail{
        background: red;
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
const Register = () => {
    const navigate=useNavigate();
    const [userForm,setUserForm]=useState({
        id:'',
        pw:'',
        pwCheck:'',
    });
    const {pw,pwCheck}=userForm;

    const [mail,setMail]=useState({
        authNum:'',
        isEmailAuth:false,
    });

    const onChangeUserForm=(event)=>{
        setUserForm({
            ...userForm,
            [event.target.name]:event.target.value,
        })
    };

    const onChangeEmail=(event)=>{
        setMail({
            ...mail,
            authNum:event.target.value,
        });
    };

    
    const sendUserForm=()=>{
        if(pw!==pwCheck){
            alert('check pw!');
        }
        else{
            axios.post('/api/register',userForm ,{withCredentials:true})//회원가입 정보 전송
            .then((res)=>{
                const success=res.data.success;
                if(success==='success'){
                    setMail({...mail,isEmailAuth:true});
                }else if(success==='usedId'){
                    alert('used id');
                }else if(success==='emailErr'){
                    alert('check your email');
                }else{
                    alert('unknown err');
                };
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    };

    const sendEmailAuth=()=>{
        axios.post('/api/register/email',mail)//이메일인증번호 전송
        .then(res=>{
            if(res.data.success===true){
                alert('register success');
                navigate('/login',{replace:true});
            }else{
                alert('check your email or authauthNum');
                setMail({...mail,authNum:''});
            };
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <StyledRegisterBlock>
            <h3>회원 가입</h3>
            <StyledInput name='id' placeholder='E-MAIL' onChange={onChangeUserForm}/>
            <StyledInput name='pw' placeholder='PW' onChange={onChangeUserForm} type='password'/>
            <StyledInput name='pwCheck' placeholder='PW 확인' onChange={onChangeUserForm} type='password'/>
            {(pw===pwCheck) ? (
                <div className='success'>비밀번호가 일치합니다.</div>
                ):(
                <div className='fail'>비밀번호가 일치하지 않습니다.</div>
            )}
            <Button onClick={sendUserForm}>register button</Button><hr/>
            {mail.isEmailAuth && (
                <div>
                    <h3>이메일 인증번호 입력</h3>
                    <StyledInput type='text' placeholder='인증번호를 입력해주세요.' onChange={onChangeEmail}/>
                    <Button onClick={sendEmailAuth}>send AuthauthNum</Button>
                </div>
            )}
        </StyledRegisterBlock>
    );
};

export default Register;