/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import _ from "lodash";

import { CREATE_CLIENT } from '../actions/types.js';
import { READ_CLIENT } from '../actions/types.js';
import { LIST_CLIENTS } from '../actions/types.js';
import { EDIT_CLIENT } from '../actions/types.js';
import { DELETE_CLIENT } from '../actions/types.js';
import { ADD_CLIENT_OWNER } from '../actions/types.js';
import { REMOVE_CLIENT_OWNER } from '../actions/types.js';

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
        case ADD_CLIENT_OWNER:
            return { ...state, [action.payload._id]: action.payload };
        case REMOVE_CLIENT_OWNER:
            return { ...state, [action.payload._id]: action.payload };
        default:
            return state;
    }
};
