import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header style={{background:'lightgray',padding:16,fontSize:24}}>
                <Link to='/'><h1>Title...</h1></Link>
                <button><Link to='/login'>login</Link></button>
                <button><Link to='/mypage'>mypage</Link></button>
                <button><Link to='/makeSchedule'>make schedule</Link></button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;