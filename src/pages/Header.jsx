import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import HeaderTemplate from './HeaderTemplate';
import { apiLogout } from '../lib/api';

const Header = ({userId,setUserId}) => {
    const logOut=()=>{
        apiLogout()
        .then(()=>{
            sessionStorage.removeItem('user');
            setUserId(sessionStorage.getItem('user'));
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <>
            <HeaderTemplate>
                <div className='logo'>
                    <Link to='/'><h1>Viva La Trip</h1></Link>
                </div>
                <div className='buttons'>
                    <>
                        <div className='loginIdDiv'>
                            <h4>
                                {userId!==null ? (
                                        userId
                                ) : (
                                        <>&nbsp;</>
                                )}
                            </h4>
                        </div>
                        <div className='buttonDiv'>
                            {(userId!==null) ? (
                                <>
                                    <Button onClick={logOut}>로그아웃</Button>
                                    <Button to='/mypage'>마이페이지</Button>
                                </>
                                ):(
                                <>
                                    <Button to='/login'>로그인</Button>
                                    <Button to='/register'>회원가입</Button>
                                </>
                            )}
                            <Button to='/makeSchedule'>일정 만들기</Button>
                            <Button to='/publicpage'>다른사람의 일정</Button>
                        </div>
                    </>
                </div>
            </HeaderTemplate>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Header;