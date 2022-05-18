import {Route,Routes}from'react-router-dom';
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
import {setUserId} from './modules/auth';
import SetPlaceContainer from './containers/SetPlaceContainer';

function App({setUserId,userId}) {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout userId={userId} setUserId={setUserId}/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetPlaceContainer/>}/>
          <Route path='/login' element={<AuthContainer/>}/>
          <Route path='/myplan/:plan_id' element={<MyPlan setUserId={setUserId}/>}/>
          <Route path='/mypage' element={<MyPageContainer setUserId={setUserId}/>}/>
          <Route path='/publicplan/:plan_id' element={<PublicPlan userId={userId}/>}/>
          <Route path='/publicpage' element={<PublicPageContainer/>}/>
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
    setUserId
  }
)(App);
