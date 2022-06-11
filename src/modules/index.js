import { combineReducers } from "redux";
import auth from "./auth";
import setPlace from "./setPlace";
import myPlanList from "./myPlanList";
import othersPlanList from "./othersPlanList";
import setPlan from "./setPlan";

const rootReducer = combineReducers({
  auth,
  setPlace,
  myPlanList,
  othersPlanList,
  setPlan,
});

export default rootReducer;
