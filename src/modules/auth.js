const IS_LOGIN='auth/IS_LOGIN';
const IS_LOGOUT='auth/IS_LOGOUT';
const GET_USER='auth/GET_USER';

export const isLogIn=()=>({type:IS_LOGIN});
export const isLogOut=()=>({type:IS_LOGOUT});
export const getUserId=(input)=>({type:GET_USER, input});


const initialState={
    loginState:false,
    userId:''
}

function auth(state=initialState,action){
    switch(action.type){
        case IS_LOGIN:
            return {...state,
                loginState : true};
        case IS_LOGOUT:
            return {...state,
                loginState:false};
        case GET_USER:
            return {...state,
                userId:state.userId=action.input
            };
        default : return state;
    }
}

export default auth;