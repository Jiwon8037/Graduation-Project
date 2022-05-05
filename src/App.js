import {Route,Routes}from'react-router-dom';
import SetCoord from './pages/compo/SetCoord';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import MyPlan from './pages/MyPlan';
import Register from './pages/compo/Register'
import AuthContainer from './containers/AuthContainer';
import { connect } from 'react-redux';
import MyPageContainer from './containers/MyPageContainer';

function App({loginState,userId}) {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout loginState={loginState} userId={userId}/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetCoord/>}/>
          <Route path='/login' element={<AuthContainer/>}/>
          <Route path='/myplan/:plan_id' element={<MyPlan userId={userId}/>}/>
          <Route path='/mypage' element={<MyPageContainer loginState={loginState} userId={userId}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

const mapStateProps=state=>({
  loginState:state.auth.loginState,
  userId:state.auth.userId,
});

export default connect(mapStateProps)(App);
