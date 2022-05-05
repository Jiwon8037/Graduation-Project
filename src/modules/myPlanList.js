const GET_MY_PLAN_DATA='myPlanList/GET_MY_PLAN_DATA';

export const getPlanData=(input)=>({type:GET_MY_PLAN_DATA, input})

const initialState={
    myPlans:[
        {
            userId:'',
            start_date:'',
            end_date:'',
            plan_id:'',
            title:'',
            place_num:Number,
            liked:Number,
        }
    ]
}

function myPlanList(state=initialState,action){
    switch(action.type){
        case GET_MY_PLAN_DATA:
            return {...state,
                myPlans:state.myPlans=action.input
            };
        default : return state;
    }
}

export default myPlanList;

