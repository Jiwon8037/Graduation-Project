import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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
        <div>
            ID : <input name='id' placeholder='id' onChange={onChangeUserForm}/><br/>
            PW : <input name='pw' placeholder='pw' onChange={onChangeUserForm}/><br/>
            PW Check : <input name='pwCheck' placeholder='pw check' onChange={onChangeUserForm}/>
            {(pw===pwCheck) ? (<div>pw ok</div>):(<div>pw inconsistency</div>)}
            <button onClick={sendUserForm}>register button</button><hr/>
            {mail.isEmailAuth ? (
                <div>
                    email auth : <input type='text' onChange={onChangeEmail}/>
                    <button onClick={sendEmailAuth}>send AuthauthNum</button>
                </div> ):(<div/>)
            }
        </div>
    );
};

export default Register;