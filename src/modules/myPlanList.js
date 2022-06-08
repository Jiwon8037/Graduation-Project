const GET_MY_PLAN_DATA='myPlanList/GET_MY_PLAN_DATA';

export const getPlanData=(input)=>({type:GET_MY_PLAN_DATA, input})

const initialState={
    planList:{
        myPlans:[
            {
                userId:String,
                start_date:String,
                end_date:String,
                plan_id:String,
                title:String,
                place_num:Number,
                liked:Number,
            }
        ],
        totalPage:Number,
        loginSuccess:Boolean,
    }
}

function myPlanList(state=initialState,action){
    switch(action.type){
        case GET_MY_PLAN_DATA:
            return {...state,
                planList:state.planList=action.input
            };
        default : return state;
    }
}

export default myPlanList;

