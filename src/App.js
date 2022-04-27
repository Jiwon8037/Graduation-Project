import {Route,Routes}from'react-router-dom';
import SetCoord from './pages/compo/SetCoord';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Register from './pages/compo/Register'
import AuthContainer from './containers/AuthContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetCoord/>}/>
          <Route path='/login' element={<AuthContainer/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
