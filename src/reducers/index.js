import { combineReducers } from "redux";

const testReducer = () => {
    return {
        name: "testReducer",
    };
};

export default combineReducers({
    testReducer: testReducer,
});
