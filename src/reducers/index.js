import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import clientReducer from "./clientReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
    authReducer: authReducer,
    userReducer: userReducer,
    clientReducer: clientReducer,
    projectReducer: projectReducer,
});
