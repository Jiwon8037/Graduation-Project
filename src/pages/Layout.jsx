import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';

const Layout = ({loginState,userId,isLogOut,getUserId}) => {
    let userLoginState=`${loginState}`;

    const logOut=()=>{
        axios.post('/api/logout',null,{withCredentials:true})
        .then(()=>{
            isLogOut();
            getUserId('');
            sessionStorage.clear();
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    return (
        <div>
            <header style={{background:'lightgray',padding:16,fontSize:24}}>
                <Link to='/'><h1>Title...</h1></Link>
                <h3>login now : {userLoginState}</h3>
                <h3>user id : {userId}</h3>
                {loginState ? (
                    <div>
                        <button onClick={logOut}>logout</button>
                        <Link to='/mypage'><button>mypage</button></Link>
                    </div>
                    ):(
                    <div>
                        <Link to='/login'><button>login</button></Link>
                        <Link to='/register'><button>register</button></Link>
                    </div>
                )}
                <Link to='/makeSchedule'><button>make schedule</button></Link>
                <Link to='/publicpage'><button>others plan</button></Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;