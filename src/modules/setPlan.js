import { handleActions, createAction } from "redux-actions";
import * as api from '../lib/api';

const SET_PLAN ='setPlan/SET_PLAN';
const SET_PLAN_SUCCESS='setPlan/SET_PLAN_SUCCESS';
const SET_PLAN_FAILURE='setPlan/SET_PLAN_FAILURE';
const REMOVE_PLACE='setPlan/REMOVE_PLACE';

export const setPlanData=(id)=>async dispatch=>{
    dispatch({type:SET_PLAN});
    try{
        const res = await api.getPlanData(id);
        dispatch({
            type:SET_PLAN_SUCCESS,
            payload:res.data
        });
    }catch(e){
        dispatch({
            type:SET_PLAN_FAILURE,
            payload:e,
            error:true
        });
        throw e;
    }
};
export const removePlanPlace=createAction(REMOVE_PLACE,id=>id);

const initialState={
    planData:{
        loginSuccess:Boolean,
        userId:String,
        start_date:Date,
        end_date:Date,
        total_days:Number,
        plan_id:String,
        title:String,
        liked:Number,
        isPublic:Boolean,
        places:[
            {
                id: String,
                place_name: String,
                x: String,
                y: String,
                checked:Boolean,
                day:Number
            },
        ]
    }
}

const setPlan=handleActions(
    {
        [SET_PLAN]:(state,actions)=>({
            ...state,
        }),
        [SET_PLAN_SUCCESS]:(state,action)=>({
            ...state,
            planData:state.planData=action.payload
        }),
        [SET_PLAN_FAILURE]:(state,action)=>({
            ...state,
        }),        
        [REMOVE_PLACE]:(state,actions)=>({
            ...state,
            planData:{...state.planData,
                places:state.planData.places.filter(place=>place.id !== actions.payload)
            }
        }),
    },
    initialState,
);

export default setPlan;