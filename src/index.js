import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules'
import { getUserId, isLogIn } from './modules/auth';

const store=createStore(rootReducer,composeWithDevTools());

function loadUser(){
  try{
    const user=sessionStorage.getItem('user');
    if(!user){
      return;
    }
    console.log(user);
    store.dispatch(getUserId(user));
    store.dispatch(isLogIn());
  }catch(e){
    console.log('sessionstorage err');
  }
}
loadUser();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
