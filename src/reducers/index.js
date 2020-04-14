/* eslint-disable quotes */
import { combineReducers } from "redux";
import authReducer from './authReducer';
import userReducer from './userReducer';
import clientReducer from './clientReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    client: clientReducer,
    project: projectReducer,
});
