import { combineReducers } from "redux";
import auth from "./auth";
import setPlace from "./setPlace"
const rootReducer=combineReducers({
    auth,
    setPlace
})

export default rootReducer;