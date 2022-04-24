
const IS_LOGIN='auth/IS_LOGIN';
const IS_LOGOUT='auth/IS_LOGOUT';

export const isLogIn=()=>({type:IS_LOGIN});
export const isLogOut=()=>({type:IS_LOGOUT});

const initialState={
    loginState:false
}

function auth(state=initialState,action){
    switch(action.type){
        case IS_LOGIN:
            return {loginState : true};
        case IS_LOGOUT:
            return {loginState:false};
        default : return state;
    }
}

export default auth;