import { handleActions } from "redux-actions";
import { createAction } from "redux-actions";

const SET_PLAN ='setPlan/SET_PLAN';
const REMOVE_PLACE='setPlan/REMOVE_PLACE';

export const setPlanData=createAction(SET_PLAN,input=>input);
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
        [SET_PLAN]:(state,{payload:input})=>({
            ...state,
            planData:state.planData=input
        }),
        [REMOVE_PLACE]:(state,{payload:id})=>({
            ...state,
            planData:{...state.planData,
                places:state.planData.places.filter(place=>place.id !== id)
            }
        }),
    },
    initialState,
);

export default setPlan;