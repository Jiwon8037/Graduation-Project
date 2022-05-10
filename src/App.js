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
import PublicPageContainer from './containers/PublicPageContainer';
import PublicPlan from './pages/PublicPlan';
import {isLogOut,getUserId} from './modules/auth';

function App({isLogOut,getUserId,loginState,userId}) {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout loginState={loginState} userId={userId} isLogOut={isLogOut} getUserId={getUserId}/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetCoord/>}/>
          <Route path='/login' element={<AuthContainer/>}/>
          <Route path='/myplan/:plan_id' element={<MyPlan userId={userId}/>}/>
          <Route path='/mypage' element={<MyPageContainer loginState={loginState} userId={userId}/>}/>
          <Route path='/publicplan/:plan_id' element={<PublicPlan userId={userId}/>}/>
          <Route path='/publicpage' element={<PublicPageContainer loginState={loginState} userId={userId}/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default connect(
  (state)=>({
    loginState:state.auth.loginState,
    userId:state.auth.userId,
  }),{
    isLogOut,
    getUserId
  }
)(App);
