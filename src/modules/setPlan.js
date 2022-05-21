const SET_PLAN ='setPlan/SET_PLAN';

export const setPlanData=(input)=>({type:SET_PLAN,input});

const initialState={
    planData:{
        loginSuccess:Boolean,
        userId:String,
        start_date:String,
        end_date:String,
        plan_id:String,
        title:String,
        place_num:Number,
        liked:Number,
        places:[
            {
                id: String,
                place_name: String,
                x: String,
                y: String,
                checked:Boolean,
                day:String
            },
        ]
    }
}

function setPlan(state=initialState,action){
    switch(action.type){
        case SET_PLAN:
            return{...state,
                planData:state.planData=action.input
            };
        default : return state;
    }
}

export default setPlan;