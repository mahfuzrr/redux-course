import { combineReducers } from "redux";
import countReducer from "./counter/countReducer";
import dynamicReducer from "./dynamicCounter/dynamicReducer";

const rootReducers = combineReducers({
    count: countReducer,
    dynamic: dynamicReducer,
});

export default rootReducers;