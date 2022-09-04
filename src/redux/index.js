import { combineReducers } from "redux";
import contactReducer from "./reducer/contactReducer";

const RootReducer = combineReducers({
    contacts: contactReducer

})

export default RootReducer;