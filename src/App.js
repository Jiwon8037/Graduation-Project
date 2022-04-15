import {Route,Routes}from'react-router-dom';
import SetCoord from './pages/compo/SetCoord';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/makeSchedule' element={<SetCoord/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
