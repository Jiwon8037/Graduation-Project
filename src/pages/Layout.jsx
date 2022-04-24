import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

const Layout = ({loginState}) => {

    let userLoginState=`${loginState}`;

    return (
        <div>
            <header style={{background:'lightgray',padding:16,fontSize:24}}>
                <Link to='/'><h1>Title...</h1></Link>
                <h3>login now : {userLoginState}</h3>
                <button><Link to='/login'>login</Link></button>
                <button><Link to='/register'>register</Link></button>
                <button><Link to='/mypage'>mypage</Link></button>
                <button><Link to='/makeSchedule'>make schedule</Link></button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};
const mapStateProps=state=>({
    loginState:state.auth.loginState,
});
export default connect(mapStateProps)(Layout);