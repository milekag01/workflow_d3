/* eslint-disable no-unused-vars */
import _ from "lodash";

import CREATE_CLIENT from "..actions/types";
import READ_CLIENT from "..actions/types";
import LIST_CLIENTS from "..actions/types";
import EDIT_CLIENT from "..actions/types";
import DELETE_CLIENT from "..actions/types";
import ADD_CLIENT_OWNER from "../actions/types";
import REMOVE_CLIENT_OWNER from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
    case LIST_CLIENTS:
        return { ...state, ..._.mapKeys(action.payload, "_id") };
    case CREATE_CLIENT:
        return { ...state, [action.payload._id]: action.payload };
    case READ_CLIENT:
        return { ...state, [action.payload._id]: action.payload };
    case EDIT_CLIENT:
        return { ...state, [action.payload._id]: action.payload };
    case DELETE_CLIENT:
        return _.omit(state, action.payload);
    default:
        return state;
    }
};
