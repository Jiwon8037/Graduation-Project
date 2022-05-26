import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Button from '../components/common/Button';

const StyledHeader=styled.div`
    background: black;
    padding: 16px;
    font-size: 24px;
    color: white;
`;
const Header = ({userId,setUserId}) => {
    const logOut=()=>{
        axios.post('/api/logout',null,{withCredentials:true})
        .then(()=>{
            sessionStorage.removeItem('user');
            setUserId(sessionStorage.getItem('user'));
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div>
            <StyledHeader>
                <Link to='/'><h1>Viva ra Trip</h1></Link>
                <h3>user id : {userId}</h3>
                {(userId!==null) ? (
                    <div>
                        <Button onClick={logOut}>로그아웃</Button>
                        <Link to='/mypage'><Button>마이페이지</Button></Link>
                    </div>
                    ):(
                    <div>
                        <Link to='/login'><Button>로그인</Button></Link>
                        <Link to='/register'><Button>회원가입</Button></Link>
                    </div>
                )}
                <Link to='/makeSchedule'><Button>일정 만들기</Button></Link>
                <Link to='/publicpage'><Button>다른사람의 일정</Button></Link>
            </StyledHeader>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Header;