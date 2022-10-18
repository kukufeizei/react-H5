import {
    combineReducers
} from "redux";
import city from "./city";
import user from "./user";


const rootReducer = combineReducers({
    city,
    user
})

export default rootReducer