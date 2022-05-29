import {Route,Routes}from'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import NotFound from './pages/NotFound';
import MyPlan from './pages/mypage/MyPlan';
import { connect } from 'react-redux';
import MyPageContainer from './containers/MyPageContainer';
import PublicPageContainer from './containers/PublicPageContainer';
import PublicPlan from './pages/publicpage/PublicPlan';
import {setUserId} from './modules/auth';
import SetPlaceContainer from './containers/SetPlaceContainer';
import SetPlanContainer from './containers/SetPlanContainer';
import DndContainer from './containers/DndContainer';
import AuthPage from './pages/auth/AuthPage';

function App({setUserId,userId}) {
  return (
    <div className="App">
      <Routes>
        <Route element={<Header userId={userId} setUserId={setUserId}/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetPlaceContainer/>}/>
          <Route path='/login' element={<AuthPage componentName={'login'}/>}/>
          <Route path='/myplan/:plan_id' element={<SetPlanContainer setUserId={setUserId} ComponentName={MyPlan}/>}/>
          <Route path='/editPlan/:plan_id' element={<SetPlanContainer setUserId={setUserId} ComponentName={DndContainer}/>}/>
          <Route path='/mypage' element={<MyPageContainer setUserId={setUserId}/>}/>
          <Route path='/publicplan/:plan_id' element={<PublicPlan userId={userId}/>}/>
          <Route path='/publicpage' element={<PublicPageContainer/>}/>
          <Route path='/register' element={<AuthPage componentName={'register'}/>}/>
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
