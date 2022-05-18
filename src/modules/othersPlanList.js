const SET_OTHERS_PLAN_DATA='publicPlanList/GET_MY_PLAN_DATA';

export const setOthersPlan=(input)=>({type:SET_OTHERS_PLAN_DATA, input})

const initialState={
    planList:{
        othersPlans:[
            {
                userId:'',
                start_date:'',
                end_date:'',
                plan_id:'',
                title:'',
                place_num:Number,
                liked:Number,
            }
        ],
        Totalpage:Number,
        loginSuccess:Boolean,

    }
}

function othersPlanList(state=initialState,action){
    switch(action.type){
        case SET_OTHERS_PLAN_DATA:
            return {...state,
                planList:state.planList=action.input
            };
        default : return state;
    }
}

export default othersPlanList;
