const INITIAL_STATE = {
    user: null,
};

import LOGIN_USER from "../actions/types";
import LOGOUT_USER from "../actions/types";
// import LOGOUT_USER_ALL from "../actions/types";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case LOGIN_USER:
        return { ...state, user: action.payload };
    case LOGOUT_USER:
        return { ...state, user: null };
    default:
        return state;
    }
};
