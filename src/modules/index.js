import { combineReducers } from "redux";
import auth from "./auth";
import setPlace from "./setPlace"
import myPlanList from "./myPlanList";
import othersPlanList from "./othersPlanList";

const rootReducer=combineReducers({
    auth,
    setPlace,
    myPlanList,
    othersPlanList,
})

export default rootReducer;