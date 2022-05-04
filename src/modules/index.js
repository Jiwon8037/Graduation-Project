import { combineReducers } from "redux";
import auth from "./auth";
import setPlace from "./setPlace"
import myPlanList from "./myPlanList";

const rootReducer=combineReducers({
    auth,
    setPlace,
    myPlanList,
})

export default rootReducer;